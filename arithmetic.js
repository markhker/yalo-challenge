const factorialize = (num) => {
  if (num < 0) return -1 // cannot foactorialize negative numbers
  else if (num == 0) return 1 // the factorial of 0 is 1
  else {
    return (num * factorialize(num - 1)) // Recursive method, multiply until run out of numbers
  }
}

const parseStringExpression = (expression, context) => {
  // Replace all context occurrences with actual values
  Object.keys(context).forEach( key => {
    const type = typeof context[key]
    if (expression.includes(key)){
      switch (type) {
        case 'string':
          expression = expression.replace(key, `'${context[key]}'`)
          break;
        default:
          expression = expression.replace(key, context[key])
          break;
      }
    }
  })

  // special case if its a factorial, only works with one number, no parenthesis... e.g: '10!'
  if (expression.charAt(expression.length - 1) === '!') {
    expression = expression.slice(0, -1)
    expression = factorialize(+expression)
  }
  // Ovbiously this has to be sanitized before executing, but for sake of simplicity...
  return Function(`return ${expression};`)()
}

const validateResult = result => {
  if (isNaN(result)) return
  if (typeof result === 'number') return true
}

const getTransition = (result, transitions) => {
  const isValidResult = validateResult(result)
  return isValidResult ? transitions.next : transitions.error
}

const getResult = data => {
  const { expression, save, transitions, context } = data
  let result

  try {
    result = parseStringExpression(expression, context)
  } catch (error) {
    result = `Uncaught ${error.name}: ${error.message}`
  }

  const transition = getTransition(result, transitions)
  result = result.toString()

  return JSON.stringify({ [save]: result, transition })
}

module.exports = getResult
