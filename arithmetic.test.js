const getResult = require('./arithmetic')
const data1 = require('./testFiles/arithmetic-case-1.json')
const data2 = require('./testFiles/arithmetic-case-2.json')
const data3 = require('./testFiles/arithmetic-case-3.json')
const data4 = require('./testFiles/arithmetic-case-4.json')
const data5 = require('./testFiles/arithmetic-case-5.json')
const data6 = require('./testFiles/arithmetic-case-6.json')
const data7 = require('./testFiles/arithmetic-case-7.json')
const data8 = require('./testFiles/arithmetic-case-8.json')
const data9 = require('./testFiles/arithmetic-case-9.json')

test('divide 180 / 99 ** 2 to equal 0.018365472910927456', () => {
  expect(getResult(data1)).toBe('{"result":"0.018365472910927456","transition":1}')
})

test('divide a string by 2 to equal NaN', () => {
  expect(getResult(data2)).toBe('{"result":"NaN","transition":102}')
})

test('divide 10 / 2 to equal 5', () => {
  expect(getResult(data3)).toBe('{"result":"5","transition":25}')
})

test('adds 45 + 896 to equal 941', () => {
  expect(getResult(data4)).toBe('{"result":"941","transition":25}')
})

test('substract 9856 - 741 to equal 9115', () => {
  expect(getResult(data5)).toBe('{"result":"9115","transition":25}')
})

test('factorialize 10 to equal 3628800', () => {
  expect(getResult(data6)).toBe('{"result":"3628800","transition":25}')
})

test('adds 485 + 980 and substract 785 to equal 680', () => {
  expect(getResult(data7)).toBe('{"result":"680","transition":25}')
})

test('divide 7895 / 82 and elevate it by 2 to equal 8833.76204648526', () => {
  expect(getResult(data8)).toBe('{"result":"8833.76204648526","transition":25}')
})

test('substract 185 - 84 divide by 2 and adds 895 / 2 and elevate at 3 to equal 89614722.375', () => {
  expect(getResult(data9)).toBe('{"result":"89614722.375","transition":25}')
})