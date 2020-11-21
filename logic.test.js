const getResult = require('./logic')
const data1 = require('./testFiles/logic-case-1.json')
const data2 = require('./testFiles/logic-case-2.json')
const data3 = require('./testFiles/logic-case-3.json')
const data4 = require('./testFiles/logic-case-4.json')
const data5 = require('./testFiles/logic-case-5.json')
const data6 = require('./testFiles/logic-case-6.json')
const data7 = require('./testFiles/logic-case-7.json')
const data8 = require('./testFiles/logic-case-8.json')
const data9 = require('./testFiles/logic-case-9.json')

test('150 > 45 equal to true', () => {
  expect(getResult(data1)).toBe('{"validAmount":"true","transition":5}')
})

test('15>= 18 equal to false', () => {
  expect(getResult(data2)).toBe('{"adult":"false","transition":23}')
})

test('age >= 18 equal to age not defined error', () => {
  expect(getResult(data3)).toBe('{"adult":"Uncaught ReferenceError: age is not defined","transition":45}')
})

test('150 < 45 equal to false', () => {
  expect(getResult(data4)).toBe('{"validAmount":"false","transition":10}')
})

test('150 <= 150 equal to true', () => {
  expect(getResult(data5)).toBe('{"result":"true","transition":5}')
})

test('1286 == 1286 equal to true', () => {
  expect(getResult(data6)).toBe('{"result":"true","transition":5}')
})

test('1286 != 1286 equal to false', () => {
  expect(getResult(data7)).toBe('{"result":"false","transition":10}')
})

test('(1286 != 1286) || (25 > 18) equal to true', () => {
  expect(getResult(data8)).toBe('{"result":"true","transition":5}')
})

test('(1286 == 1286) && (25 > 18) equal to true', () => {
  expect(getResult(data9)).toBe('{"result":"true","transition":5}')
})

test('(1286 == 1286) && (25 > 18) || 46 >= 12 equal to true', () => {
  expect(getResult(data9)).toBe('{"result":"true","transition":5}')
})