export type FooterBean = {
  zanichelliLinks: FooterGroupBean[];
  myzLink: MyzLinkBean;
  zanichelliAddress: string;
  social: FooterSocialBean[];
  certification: string;
  bottomLinks: FooterGroupItemBean[];
};

export type FooterGroupItemBean = {
  label: string;
  link: string;
  target?: string;
};

export type FooterGroupBean = {
  title: string;
  items: FooterGroupItemBean[];
};

export type MyzLinkBean = {
  label: string;
  img: string;
  link: string;
};

export type FooterSocialBean = {
  icon: string;
  link: string;
  description?: string;
};

export enum LicenseTypeEnum {
  real = "reale",
  virtual = "virtuale",
  trial = "saggio"
}
export type LicenseType = LicenseTypeEnum;

export type CardBean = {
  id: string;
  isbn: string;
  volume_title: string;
  opera_title: string;
  img: string;
  authors: string;
  actions: ActionBean[];
  is_bookmark: boolean;
  licenseType: LicenseTypeEnum;
};

export declare type ActionBean = {
  isLink: boolean;
  value: string;
  url?: string;
};

export type ListItemBean = {
  text: string;
  link?: string;
  linktarget?: string;
  icon?: string;
  listitemid?: string;
};

export type FilterItem = {
  name: string;
  id: string;
  isActive: boolean;
  isfixed: boolean;
};

export type MenuItem = {
  id: string;
  label: string;
  link?: string;
  icon?: string;
  subMenu?: MenuItem[];
};

export type HeaderUserData = {
  islogged: boolean;
  id?: number;
  name?: string;
  usergroup: number;
  userlinks: MenuItem[];
};
export type ComboItemBean = {
  id: string;
  name: string;
  checked: boolean;
};

export type ButtonVariantBean = ButtonVariantEnum;

export enum ButtonVariantEnum {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary"
}

export enum ButtonTypeEnum {
  submit = "submit",
  reset = "reset",
  button = "button"
}

export type InputTypeBean = InputTypeEnum;

export enum InputTypeEnum {
  text = "text",
  password = "password",
  number = "number",
  email = "email",
  textarea = "textarea",
  checkbox = "checkbox",
  radio = "radio",
  select = "select"
}

export type InputStatusBean = InputStatusEnum;

export enum InputStatusEnum {
  success = "success",
  error = "error",
  warning = "warning"
}

export type TooltipPositionBean = TooltipPosition;

export enum TooltipPosition {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NO_ARROW = "NO_ARROW"
}

export enum keybordKeyCodeEnum {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40
}

export type SelectItemBean = {
  id: string;
  name: string;
  selected: boolean;
  disabled?: boolean;
};

export enum AlertTypesEnum {
  success = "success",
  warning = "warning",
  error = "error"
}

export type AlertTypes = AlertTypesEnum;

export enum DeviceEnum {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop"
}

export type DeviceType = DeviceEnum;

export enum StepperItemStatus {
  IDLE = "idle",
  ACTIVE = "active",
  DONE = "done"
}
