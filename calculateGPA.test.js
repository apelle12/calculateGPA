const { expect } = require('@jest/globals');
const funToTest = require('./calculateGPA');

test('test1: Looks like you are missing a function called calculateGPA', () => {
  expect(funToTest("A","E","A","D","C","B","D","A")).toBe(2.375);
})

test('test2: Looks like you are missing a function called calculateGPA', () => {
  expect(funToTest("D","C","A","A","A","A","A","A")).toBe(3.375);
})
