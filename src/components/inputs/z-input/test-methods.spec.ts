import {InputTypeEnum} from "../../../beans";
import {ZInput} from "./index";

it("isChecked() should return checked state", async () => {
  const input = new ZInput();
  input.type = InputTypeEnum.CHECKBOX;

  input.checked = true;
  const checked = await input.isChecked();
  expect(checked).toBe(true);

  input.checked = false;
  const unchecked = await input.isChecked();
  expect(unchecked).toBe(false);
});
