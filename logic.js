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

  // Ovbiously this has to be sanitized before executing, but for sake of simplicity...
  return Function(`return ${expression};`)()

}

const getTransition = (result, transitions) => {
  switch (result) {
    case true:
      return transitions.isTrue
    case false:
      return transitions.isFalse
    default:
      return transitions.isError
  }
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
