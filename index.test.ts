import { scrambler } from "./index";

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("PASSWORD")).toBe("SSKCYMDG");
});

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("SECURITY")).toBe("VZBVMUNL");
});

test('adds 1 + 2 to equal 3', () => {
  expect(scrambler("AREALLYLONGPASSWORDWITHMANYCHARACTERS")).toBe("DUYYJUSDREKZZRJFTKNJRKRDDQOQXXOOQJNEW");
});