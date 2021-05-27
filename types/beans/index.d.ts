export declare type FooterBean = {
  zanichelliLinks: FooterGroupBean[];
  myzLink: MyzLinkBean;
  zanichelliAddress: string;
  social: FooterSocialBean[];
  certification: string;
  bottomLinks: FooterGroupItemBean[];
};
export declare type FooterGroupItemBean = {
  label: string;
  link: string;
  target?: string;
};
export declare type FooterGroupBean = {
  title: string;
  items: FooterGroupItemBean[];
};
export declare type MyzLinkBean = {
  label: string;
  img: string;
  link: string;
};
export declare type FooterSocialBean = {
  icon: string;
  link: string;
  description?: string;
};
export declare enum LicenseTypeEnum {
  real = "reale",
  virtual = "virtuale",
  trial = "saggio"
}
export declare type LicenseType = keyof typeof LicenseTypeEnum;
export declare type CardBean = {
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
export declare type ListItemBean = {
  text: string;
  link?: string;
  linktarget?: string;
  icon?: string;
  listitemid?: string;
};
export declare type FilterItem = {
  name: string;
  id: string;
  isActive: boolean;
  isfixed: boolean;
};
export declare type MenuItem = {
  id: string;
  label: string;
  link?: string;
  icon?: string;
  target?: string;
  subMenu?: MenuItem[];
};
export declare type HeaderUserData = {
  islogged: boolean;
  id?: number;
  name?: string;
  usergroup: number;
  userlinks: MenuItem[];
};
export declare type ComboItemBean = {
  id: string;
  name: string;
  checked: boolean;
};
export declare type ButtonVariantBean = ButtonVariantEnum;
export declare enum ButtonVariantEnum {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary"
}
export declare enum ButtonTypeEnum {
  submit = "submit",
  reset = "reset",
  button = "button"
}
export declare enum ButtonSizeEnum {
  big = "big",
  small = "small",
  "x-small" = "x-small"
}
export declare type InputTypeBean = keyof typeof InputTypeEnum;
export declare enum InputTypeEnum {
  text = "text",
  password = "password",
  number = "number",
  email = "email",
  textarea = "textarea",
  checkbox = "checkbox",
  radio = "radio",
  select = "select"
}
export declare type InputStatusBean = keyof typeof InputStatusEnum;
export declare enum InputStatusEnum {
  success = "success",
  error = "error",
  warning = "warning",
  selecting = "selecting"
}
export declare type TooltipPositionBean = keyof typeof TooltipPosition;
export declare enum TooltipPosition {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NO_ARROW = "NO_ARROW",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT"
}
export declare enum keybordKeyCodeEnum {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40
}
export declare type SelectItemBean = {
  id: string;
  name: string;
  selected: boolean;
  disabled?: boolean;
};
export declare type ThemeVariantBean = keyof typeof ThemeVariant;
export declare enum ThemeVariant {
  dark = "dark",
  light = "light"
}
export declare enum DividerSize {
  small = "small",
  medium = "medium",
  large = "large"
}
export declare enum DividerOrientation {
  horizontal = "horizontal",
  vertical = "vertical"
}
