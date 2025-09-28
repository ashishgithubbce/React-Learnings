import mul from "../mul";
test("Mul function should calculate the multiplication of two numbers", () => {
  const result = mul(2, 3);

  //assertion
  expect(result).toBe(6);
});
// expect(result).toBe(5); // this will fail the test case
// toBe is a matcher function which is used to compare the expected value with the actual value
// if the expected value is equal to the actual value then the test case will pass otherwise it will fail
// you can use different matcher functions like toEqual, toBeGreaterThan, toBeLessThan, etc.
