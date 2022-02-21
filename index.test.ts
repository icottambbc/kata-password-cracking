import { scrambler, capsOnly, lettersToNumbers, mixUpFirstLetter, jumbleNumbers, numbersToLetters } from "./index";

test('capsIt', () => {
  expect(capsOnly("PAssWOrD")).toBe("PASSWORD");
})

test('capsIt', () => {
  expect(capsOnly("gi1bReI54?)")).toBe("GIBREI");
})

test('lettersToNumbers', () => {
  expect(lettersToNumbers("ABCEDE")).toEqual([0,1,2,4,3,4]);
})

test('lettersToNumbers', () => {
  expect(lettersToNumbers("SSKCYMDG")).toEqual([18,18,10,2,24,12,3,6]);
})

test('mixUpFirstLetter', () => {
  expect(mixUpFirstLetter([18,18,10,2,24,12,3,6])).toEqual([7,18,10,2,24,12,3,6]);
})

test('mixUpFirstLetter', () => {
  expect(mixUpFirstLetter([1,18,10])).toEqual([16,18,10]);
})

test('jumbleNumbers', () => {
  expect(jumbleNumbers([18,0,18,2,24])).toEqual([18,18,10,12,10]);
})

test('jumbleNumbers', () => {
  expect(jumbleNumbers([2,17,10,22,12])).toEqual([2,19,3,25,11]);
})

test('numbersToLetters', () => {
  expect(numbersToLetters([18,0,18,2,24])).toEqual("SASCY");
})

test('numbersToLetters', () => {
  expect(numbersToLetters([2,17,10,22,12])).toEqual("CRKWM");
})

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("PASSWORD")).toBe("SSKCYMDG");
});

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("PAssWORD123!")).toBe("SSKCYMDG");
});

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("SECURITY")).toBe("VZBVMUNL");
});

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("AREALLYLONGPASSWORDWITHMANYCHARACTERS")).toBe("DUYYJUSDREKZZRJFTKNJRKRDDQOQXXOOQJNEW");
});