import { scrambler, capsIt } from "./index";

test('capsIt', () => {
  expect(capsIt("PAssWOrD")).toBe("PASSWORD");
})

test('capsIt', () => {
  expect(capsIt("gi1bReI54?)")).toBe("GI1BREI54?)");
})

test('capsIt', () => {
  expect(capsIt("PAssWOrD")).toBe("PASSWORD");
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