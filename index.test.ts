import { scrambler, capsOnly } from "./index";

test('capsIt', () => {
  expect(capsOnly("PAssWOrD")).toBe("PASSWORD");
})

test('capsIt', () => {
  expect(capsOnly("gi1bReI54?)")).toBe("GIBREI");
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