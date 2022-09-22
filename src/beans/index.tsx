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
  REAL = "reale",
  VIRTUAL = "virtuale",
  TRIAL = "saggio",
  TEMP = "reale_temp",
}
export type LicenseType = keyof typeof LicenseTypeEnum;

export type CardBean = {
  id: string;
  isbn: string;
  volumeTitle: string;
  operaTitle: string;
  img: string;
  authors: string;
  actions: ActionBean[];
  isBookmark: boolean;
  licenseType: LicenseTypeEnum;
};

export enum CardVariants {
  BORDER = "border",
  SHADOW = "shadow",
  OVERLAY = "overlay",
  TEXT = "text",
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

export enum NavigationTabsOrientations {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum NavigationTabsSizes {
  BIG = "big",
  SMALL = "small",
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
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DARK_BG = "dark-bg",
}

export enum ButtonTypeEnum {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export enum ButtonSizeEnum {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export type InputTypeBean = keyof typeof InputTypeEnum;

export enum InputTypeEnum {
  TEXT = "text",
  PASSWORD = "password",
  NUMBER = "number",
  EMAIL = "email",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
}

export type InputStatusBean = keyof typeof InputStatusEnum;

export enum InputStatusEnum {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
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
  AFTER_DOWN = "after-down",
  AFTER_CENTER = "after-center",
  AFTER_UP = "after-up",
  BELOW_RIGHT = "below-right",
  BELOW_CENTER = "below-center",
  BELOW_LEFT = "below-left",
  BEFORE_DOWN = "before-down",
  BEFORE_CENTER = "before-center",
  BEFORE_UP = "before-up",
  ABOVE_RIGHT = "above-right",
  ABOVE_CENTER = "above-center",
  ABOVE_LEFT = "above-left",
}

export enum PopoverBorderRadius {
  NONE = "none",
  SMALL = "small",
  MEDIUM = "medium",
}

export enum PopoverShadow {
  SHADOW_1 = "shadow-1",
  SHADOW_2 = "shadow-2",
  SHADOW_3 = "shadow-3",
  SHADOW_4 = "shadow-4",
  SHADOW_6 = "shadow-6",
  SHADOW_8 = "shadow-8",
  SHADOW_12 = "shadow-12",
  SHADOW_16 = "shadow-16",
  SHADOW_24 = "shadow-24",
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
  DARK = "dark",
  LIGHT = "light",
}

export enum DividerSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum DividerOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum SortDirectionEnum {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

export type SortDirection = SortDirectionEnum;

export enum AvatarSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ListSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "x-large",
}

export enum Size {
  X_SMALL = "x-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  SPECIAL = "special",
}

export enum ExpandableListStyle {
  ACCORDION = "accordion",
  MENU = "menu",
}

export enum ExpandableListButtonAlign {
  RIGHT = "right",
  LEFT = "left",
}

export enum LabelPositions {
  RIGHT = "right",
  LEFT = "left",
}

export enum ListDividerType {
  NONE = "none",
  HEADER = "header",
  ELEMENT = "element",
}

export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export enum AlertTypesEnum {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export type AlertTypes = AlertTypesEnum;

export enum DeviceEnum {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
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
  PREVIEW = "preview",
  OPEN = "open",
  CLOSED = "closed",
}
export type PocketStatus = PocketStatusEnum;

export enum ToastNotificationEnum {
  DARK = "dark",
  LIGHT = "light",
  ACCENT = "accent",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}
export type ToastNotificationTypes = ToastNotificationEnum;

export enum ToastNotificationTransitionsEnum {
  SLIDE_IN_LEFT = "slide-in-left",
  SLIDE_IN_RIGHT = "slide-in-right",
  SLIDE_IN_DOWN = "slide-in-down",
  SLIDE_IN_UP = "slide-in-up",
  SLIDE_OUT_LEFT = "slide-out-left",
  SLIDE_OUT_RIGHT = "slide-out-right",
  SLIDE_OUT_DOWN = "slide-out-down",
  SLIDE_OUT_UP = "slide-out-up",
}

export type ToastNotificationTransitionTypes = ToastNotificationTransitionsEnum;

export enum ToastNotificationPositionsEnum {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  TOP_CENTRE = "top-centre",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTRE = "bottom-centre",
}

export enum ZTableRowExpandedType {
  EXPANDABLE = "expandable",
  PADDING = "padding",
  NONE = "none",
}

export enum ZAriaAlertMode {
  POLITE = "polite",
  ASSERTIVE = "assertive",
}

export enum TransitionDirectionEnum {
  LEFT = "left",
  RIGHT = "right",
}

export enum OffCanvasVariantsEnum {
  OVERLAY = "overlay",
  PUSHCONTENT = "pushcontent",
}

export type ToastNotificationPositionsTypes = ToastNotificationPositionsEnum;

export enum ZFileUploadTypeEnum {
  DEFAULT = "default",
  DRAGDROP = "dragdrop",
}

export enum ZChipType {
  DEFAULT = "default",
  MEDIUM = "medium",
  SMALL = "small",
}

export enum ZSectionTitleDividerPositions {
  BEFORE = "before",
  AFTER = "after",
}

export type ZSectionTitleDividerPosition = keyof typeof ZSectionTitleDividerPositions;

export enum ZDatePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
  MONTHS = "months",
}

export enum ZDatePickerModeValues {
  DATE = 401,
  DATE_TIME = 523,
  MONTHS = 288,
}

export enum ZDatePickerPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export enum ZRangePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
}

export declare type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export enum StatusTagStatus {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  NEUTRAL = "neutral",
  DEFAULT = "default",
}

export type InfoRevealPositionBean = keyof typeof InfoRevealPosition;

export enum InfoRevealPosition {
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left",
}
