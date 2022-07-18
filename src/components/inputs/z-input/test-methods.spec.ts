import { ZInput } from "./index";

it("getValue() should return input value", async () => {
  const input = new ZInput();
  input.value = "input value";

  const value = await input.getValue();
  expect(value).toBe("input value");
});

it("isChecked() should return checked state", async () => {
  const input = new ZInput();
  input.type = "checkbox";

  input.checked = true;
  const checked = await input.isChecked();
  expect(checked).toBe(true);

  input.checked = false;
  const unchecked = await input.isChecked();
  expect(unchecked).toBe(false);
});
