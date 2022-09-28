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
  trial = "saggio",
  temp = "reale_temp"
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
export declare enum CardVariants {
  border = "border",
  shadow = "shadow",
  overlay = "overlay",
  text = "text"
}
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
export declare type TabItem = {
  id: string;
  label: string;
  icon?: string;
  size?: string;
  selected?: boolean;
  disabled?: boolean;
};
export declare type NavigationTabsOrientation = keyof typeof NavigationTabsOrientations;
export declare enum NavigationTabsOrientations {
  horizontal = "horizontal",
  vertical = "vertical"
}
export declare type NavigationTabsSize = keyof typeof NavigationTabsSizes;
export declare enum NavigationTabsSizes {
  big = "big",
  small = "small"
}
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
  tertiary = "tertiary",
  "dark-bg" = "dark-bg"
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
  tel = "tel",
  url = "url",
  search = "search"
}
export declare type InputStatusBean = keyof typeof InputStatusEnum;
export declare enum InputStatusEnum {
  success = "success",
  error = "error",
  warning = "warning"
}
export declare type PopoverPositionBean = keyof typeof PopoverPositions;
export declare enum PopoverPositions {
  auto = "auto",
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
  top_right = "top_right",
  top_left = "top_left",
  bottom_right = "bottom_right",
  bottom_left = "bottom_left",
  right_top = "right_top",
  right_bottom = "right_bottom",
  left_top = "left_top",
  left_bottom = "left_bottom"
}
export declare enum PopoverPosition {
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
  "above-left" = "above-left"
}
export declare enum PopoverBorderRadius {
  "none" = "none",
  small = "small",
  medium = "medium"
}
export declare enum PopoverShadow {
  "shadow-1" = "shadow-1",
  "shadow-2" = "shadow-2",
  "shadow-3" = "shadow-3",
  "shadow-4" = "shadow-4",
  "shadow-6" = "shadow-6",
  "shadow-8" = "shadow-8",
  "shadow-12" = "shadow-12",
  "shadow-16" = "shadow-16",
  "shadow-24" = "shadow-24"
}
export declare enum KeyboardKeyCodeEnum {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  BACKSPACE = 8,
  DELETE = 46
}
export declare enum KeyboardCodeEnum {
  TAB = "Tab",
  SPACE = "Space",
  ESC = "Escape",
  ENTER = "Enter",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACKSPACE = "Backspace",
  DELETE = "Delete"
}
export declare enum KeyboardKeys {
  ARROW_DOWN = "ArrowDown",
  ARROW_UP = "ArrowUp",
  ENTER = "Enter",
  ESC = "Escape",
  SPACE = "Space"
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
export declare enum SortDirectionEnum {
  asc = "asc",
  desc = "desc",
  none = "none"
}
export declare type SortDirection = SortDirectionEnum;
export declare enum AvatarSize {
  small = "small",
  medium = "medium",
  large = "large"
}
export declare enum ListSize {
  small = "small",
  medium = "medium",
  large = "large",
  "x-large" = "x-large"
}
export declare enum Size {
  "x-small" = "x-small",
  small = "small",
  medium = "medium",
  large = "large",
  special = "special"
}
export declare enum ExpandableListStyle {
  accordion = "accordion",
  menu = "menu"
}
export declare enum ExpandableListButtonAlign {
  right = "right",
  left = "left"
}
export declare enum LabelPositions {
  right = "right",
  left = "left"
}
export declare type LabelPosition = keyof typeof LabelPositions;
export declare enum ListDividerType {
  none = "none",
  header = "header",
  element = "element"
}
export declare enum NotificationType {
  success = "success",
  warning = "warning",
  error = "error"
}
export declare enum AlertTypesEnum {
  success = "success",
  warning = "warning",
  error = "error"
}
export declare type AlertTypes = AlertTypesEnum;
export declare enum DeviceEnum {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop"
}
export declare type DeviceType = DeviceEnum;
export declare type DictionaryData = {
  author: string;
  year: string;
  title: string;
  description: string;
  onlineLicense: DictionaryLicenseData;
  offlineLicense: DictionaryLicenseData;
};
export declare type DictionaryLicenseData = {
  expiration: string;
  expired: boolean;
  expiring: boolean;
  installations: string;
};
export declare enum PocketStatusEnum {
  preview = "preview",
  open = "open",
  closed = "closed"
}
export declare type PocketStatus = PocketStatusEnum;
export declare enum ToastNotificationEnum {
  dark = "dark",
  light = "light",
  accent = "accent",
  error = "error",
  success = "success",
  warning = "warning"
}
export declare type ToastNotificationTypes = ToastNotificationEnum;
export declare enum ToastNotificationTransitionsEnum {
  slideInLeft = "slide-in-left",
  slideInRight = "slide-in-right",
  slideInDown = "slide-in-down",
  slideInUp = "slide-in-up",
  slideOutLeft = "slide-out-left",
  slideOutRight = "slide-out-right",
  slideOutDown = "slide-out-down",
  slideOutUp = "slide-out-up"
}
export declare type ToastNotificationTransitionTypes = ToastNotificationTransitionsEnum;
export declare enum ToastNotificationPositionsEnum {
  topRight = "top-right",
  topLeft = "top-left",
  topCentre = "top-centre",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
  bottomCentre = "bottom-centre"
}
export declare enum ZTableRowExpandedType {
  expandable = "expandable",
  padding = "padding",
  none = "none"
}
export declare enum ZAriaAlertMode {
  polite = "polite",
  assertive = "assertive"
}
export declare enum TransitionDirectionEnum {
  left = "left",
  right = "right"
}
export declare enum OffCanvasVariantsEnum {
  overlay = "overlay",
  pushcontent = "pushcontent"
}
export declare type ToastNotificationPositionsTypes = ToastNotificationPositionsEnum;
export declare enum ZFileUploadTypeEnum {
  default = "default",
  dragdrop = "dragdrop"
}
export declare enum ZChipType {
  default = "default",
  medium = "medium",
  small = "small"
}
export declare enum ZSectionTitleDividerPositions {
  before = "before",
  after = "after"
}
export declare type ZSectionTitleDividerPosition = keyof typeof ZSectionTitleDividerPositions;
export declare enum ZDatePickerMode {
  date = "date",
  dateTime = "date-time",
  months = "months"
}
export declare enum ZDatePickerModeValues {
  DATE = 401,
  DATETIME = 523,
  MONTHS = 288
}
export declare enum ZDatePickerPosition {
  top = "top",
  bottom = "bottom"
}
export declare enum ZRangePickerMode {
  date = "date",
  dateTime = "date-time"
}
export declare type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};
export declare enum StatusTagStatus {
  warning = "warning",
  error = "error",
  success = "success",
  neutral = "neutral",
  default = "default"
}
export declare type InfoRevealPositionBean = keyof typeof InfoRevealPosition;
export declare enum InfoRevealPosition {
  top_right = "top_right",
  top_left = "top_left",
  bottom_right = "bottom_right",
  bottom_left = "bottom_left"
}
export declare enum CoverHeroVariant {
  OVERLAY = "overlay",
  STACKED = "stacked"
}
export declare enum CoverHeroContentPosition {
  TOP = "top",
  BOTTOM = "bottom"
}
