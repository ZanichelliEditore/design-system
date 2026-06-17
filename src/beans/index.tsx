export enum SfLicenseType {
  REAL = "reale",
  VIRTUAL = "virtuale",
  TRIAL = "saggio",
  TEMP = "reale_temp",
}
export enum SfButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum SfButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

/**
 * @deprecated Use ControlSize instead
 */
export enum SfButtonSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export enum SfControlSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export enum SfInputStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export enum SfPopoverPosition {
  /** @deprecated This value is not needed anymore as the popover will always try to position itself automatically based on available space.
   *
   * Passing `AUTO` is the same as not passing any position value.
   * Use any of the other values to explicitly set the preferred position of the popover.
   */
  AUTO = "auto",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left",
  RIGHT_TOP = "right_top",
  RIGHT_BOTTOM = "right_bottom",
  LEFT_TOP = "left_top",
  LEFT_BOTTOM = "left_bottom",
}

export enum SfKeyboardCode {
  TAB = "Tab",
  SPACE = "Space",
  ESC = "Escape",
  ENTER = "Enter",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACKSPACE = "Backspace",
  DELETE = "Delete",
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
}
export enum SfAlertType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export enum SfDevice {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  DESKTOP_WIDE = "desktop-wide",
}
export type SfDictionaryData = {
  author: string;
  year: string;
  title: string;
  description: string;
  onlineLicense: SfDictionaryLicenseData;
  offlineLicense: SfDictionaryLicenseData;
};

export type SfDictionaryLicenseData = {
  expiration: string;
  expired: boolean;
  expiring: boolean;
  installations: string;
};

export enum SfIconPosition {
  LEFT = "left",
  RIGHT = "right",
}
