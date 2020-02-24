import { keybordKeyCodeEnum } from "../beans/index";

export function format(first: string, middle: string, last: string): string {
  return (
    (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "")
  );
}

export function retrieveAsset(assetName: string): string {
  return assetName && "assets/images/png/" + assetName;
}

export function randomId(): string {
  return Math.random()
    .toString(36)
    .replace("0.", "");
}

export function handleKeyboardSubmit(
  ev: KeyboardEvent,
  callback: Function,
  ...args: any[]
) {
  if (
    ev.keyCode === keybordKeyCodeEnum.ENTER ||
    ev.keyCode === keybordKeyCodeEnum.SPACE
  ) {
    ev.preventDefault();
    callback(...args);
  }
}
