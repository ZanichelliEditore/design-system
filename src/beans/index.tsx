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
  trial = "saggio",
  temp = "reale_temp",
}
export type LicenseType = keyof typeof LicenseTypeEnum;

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

export enum CardVariants {
  border = "border",
  shadow = "shadow",
  overlay = "overlay",
  text = "text",
}

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
  target?: string;
  subMenu?: MenuItem[];
};

export type TabItem = {
  id: string;
  label: string;
  icon?: string;
  size?: string;
  selected?: boolean;
  disabled?: boolean;
};

export type NavigationTabsOrientation = keyof typeof NavigationTabsOrientations;

export enum NavigationTabsOrientations {
  horizontal = "horizontal",
  vertical = "vertical",
}

export type NavigationTabsSize = keyof typeof NavigationTabsSizes;

export enum NavigationTabsSizes {
  big = "big",
  small = "small",
}

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
  tertiary = "tertiary",
  "dark-bg" = "dark-bg",
}

export enum ButtonTypeEnum {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export enum ButtonSizeEnum {
  big = "big",
  small = "small",
  "x-small" = "x-small",
}

export type InputTypeBean = keyof typeof InputTypeEnum;

export enum InputTypeEnum {
  text = "text",
  password = "password",
  number = "number",
  email = "email",
  textarea = "textarea",
  checkbox = "checkbox",
  radio = "radio",
}

export type InputStatusBean = keyof typeof InputStatusEnum;

export enum InputStatusEnum {
  success = "success",
  error = "error",
  warning = "warning",
}

export type PopoverPositionBean = keyof typeof PopoverPositions;

export enum PopoverPositions {
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

export enum PopoverPosition {
  "after-down" = "after-down",
  "after-center" = "after-center",
  "after-up" = "after-up",

  "below-right" = "below-right",
  "below-center" = "below-center",
  "below-left" = "below-left",

  "before-down" = "before-down",
  "before-center" = "before-center",
  "before-up" = "before-up",

  "above-right" = "above-right",
  "above-center" = "above-center",
  "above-left" = "above-left",
}

export enum PopoverBorderRadius {
  "none" = "none",
  small = "small",
  medium = "medium",
}

export enum PopoverShadow {
  "shadow-1" = "shadow-1",
  "shadow-2" = "shadow-2",
  "shadow-3" = "shadow-3",
  "shadow-4" = "shadow-4",
  "shadow-6" = "shadow-6",
  "shadow-8" = "shadow-8",
  "shadow-12" = "shadow-12",
  "shadow-16" = "shadow-16",
  "shadow-24" = "shadow-24",
}

export enum KeyboardKeyCodeEnum {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  BACKSPACE = 8,
  DELETE = 46,
}

export enum KeyboardCodeEnum {
  TAB = "Tab",
  SPACE = "Space",
  ESC = "Escape",
  ENTER = "Enter",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACKSPACE = "Backspace",
  DELETE = "Delete",
}

export enum KeyboardKeys {
  ARROW_DOWN = "ArrowDown",
  ARROW_UP = "ArrowUp",
  ENTER = "Enter",
  ESC = "Escape",
  SPACE = "Space",
}

export type SelectItemBean = {
  id: string;
  name: string;
  selected: boolean;
  disabled?: boolean;
};

export type ThemeVariantBean = keyof typeof ThemeVariant;

export enum ThemeVariant {
  dark = "dark",
  light = "light",
}

export enum DividerSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum DividerOrientation {
  horizontal = "horizontal",
  vertical = "vertical",
}

export enum SortDirectionEnum {
  asc = "asc",
  desc = "desc",
  none = "none",
}

export type SortDirection = SortDirectionEnum;

export enum AvatarSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ListSize {
  small = "small",
  medium = "medium",
  large = "large",
  "x-large" = "x-large",
}

export enum Size {
  "x-small" = "x-small",
  small = "small",
  medium = "medium",
  large = "large",
  special = "special",
}

export enum ExpandableListStyle {
  accordion = "accordion",
  menu = "menu",
}

export enum ExpandableListButtonAlign {
  right = "right",
  left = "left",
}

export enum LabelPositions {
  right = "right",
  left = "left",
}
export type LabelPosition = keyof typeof LabelPositions;

export enum ListDividerType {
  none = "none",
  header = "header",
  element = "element",
}

export enum NotificationType {
  success = "success",
  warning = "warning",
  error = "error",
}

export enum AlertTypesEnum {
  success = "success",
  warning = "warning",
  error = "error",
}

export type AlertTypes = AlertTypesEnum;

export enum DeviceEnum {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
}

export type DeviceType = DeviceEnum;

export type DictionaryData = {
  author: string;
  year: string;
  title: string;
  description: string;
  onlineLicense: DictionaryLicenseData;
  offlineLicense: DictionaryLicenseData;
};

export type DictionaryLicenseData = {
  expiration: string;
  expired: boolean;
  expiring: boolean;
  installations: string;
};

export enum PocketStatusEnum {
  preview = "preview",
  open = "open",
  closed = "closed",
}
export type PocketStatus = PocketStatusEnum;

export enum ToastNotificationEnum {
  dark = "dark",
  light = "light",
  accent = "accent",
  error = "error",
  success = "success",
  warning = "warning",
}
export type ToastNotificationTypes = ToastNotificationEnum;

export enum ToastNotificationTransitionsEnum {
  slideInLeft = "slide-in-left",
  slideInRight = "slide-in-right",
  slideInDown = "slide-in-down",
  slideInUp = "slide-in-up",
  slideOutLeft = "slide-out-left",
  slideOutRight = "slide-out-right",
  slideOutDown = "slide-out-down",
  slideOutUp = "slide-out-up",
}

export type ToastNotificationTransitionTypes = ToastNotificationTransitionsEnum;

export enum ToastNotificationPositionsEnum {
  topRight = "top-right",
  topLeft = "top-left",
  topCentre = "top-centre",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
  bottomCentre = "bottom-centre",
}

export enum ZTableRowExpandedType {
  expandable = "expandable",
  padding = "padding",
  none = "none",
}

export enum ZAriaAlertMode {
  polite = "polite",
  assertive = "assertive",
}

export enum TransitionDirectionEnum {
  left = "left",
  right = "right",
}

export enum OffCanvasVariantsEnum {
  overlay = "overlay",
  pushcontent = "pushcontent",
}

export type ToastNotificationPositionsTypes = ToastNotificationPositionsEnum;

export enum ZFileUploadTypeEnum {
  default = "default",
  dragdrop = "dragdrop",
}

export enum ZChipType {
  default = "default",
  medium = "medium",
  small = "small",
}

export enum ZSectionTitleDividerPositions {
  before = "before",
  after = "after",
}

export type ZSectionTitleDividerPosition =
  keyof typeof ZSectionTitleDividerPositions;

export enum ZDatePickerMode {
  date = "date",
  dateTime = "date-time",
  months = "months",
}

export enum ZDatePickerModeValues {
  DATE = 401,
  DATETIME = 523,
  MONTHS = 288,
}

export enum ZDatePickerPosition {
  top = "top",
  bottom = "bottom",
}

export declare type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export enum StatusTagStatus {
  warning = "warning",
  error = "error",
  success = "success",
  neutral = "neutral",
  default = "default",
}

export type InfoRevealPositionBean = keyof typeof InfoRevealPosition;

export enum InfoRevealPosition {
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left",
}
