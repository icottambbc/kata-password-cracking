import { scrambler, capsOnly, lettersToNumbers } from "./index";

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