export declare type Footer = {
  zanichelliLinks: FooterGroup[];
  myzLink: MyzLink;
  zanichelliAddress: string;
  social: FooterSocial[];
  certification: string;
  bottomLinks: FooterGroupItem[];
};
export declare type FooterGroupItem = {
  label: string;
  link: string;
  target?: string;
};
export declare type FooterGroup = {
  title: string;
  items: FooterGroupItem[];
};
export declare type MyzLink = {
  label: string;
  img: string;
  link: string;
};
export declare type FooterSocial = {
  icon: string;
  link: string;
  description?: string;
};
export declare enum LicenseType {
  REAL = "reale",
  VIRTUAL = "virtuale",
  TRIAL = "saggio",
  TEMP = "reale_temp"
}
export declare type Card = {
  id: string;
  isbn: string;
  volumeTitle: string;
  operaTitle: string;
  img: string;
  authors: string;
  actions: Action[];
  isBookmark: boolean;
  licenseType: LicenseType;
};
export declare enum CardVariant {
  BORDER = "border",
  SHADOW = "shadow",
  OVERLAY = "overlay",
  TEXT = "text"
}
export declare type Action = {
  isLink: boolean;
  value: string;
  url?: string;
};
export declare type ListItem = {
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
export declare enum NavigationTabsOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical"
}
export declare enum NavigationTabsSize {
  BIG = "big",
  SMALL = "small"
}
export declare type HeaderUserData = {
  islogged: boolean;
  id?: number;
  name?: string;
  usergroup: number;
  userlinks: MenuItem[];
};
export declare type ComboItem = {
  id: string;
  name: string;
  checked: boolean;
};
export declare enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DARK_BG = "dark-bg"
}
export declare enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button"
}
export declare enum ButtonSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small"
}
export declare enum InputType {
  TEXT = "text",
  PASSWORD = "password",
  NUMBER = "number",
  EMAIL = "email",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  TEL = "tel",
  URL = "url",
  SEARCH = "search"
}
export declare enum InputStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning"
}
export declare enum PopoverPositions {
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
  LEFT_BOTTOM = "left_bottom"
}
export declare enum PopoverPosition {
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
  ABOVE_LEFT = "above-left"
}
export declare enum PopoverBorderRadius {
  NONE = "none",
  SMALL = "small",
  MEDIUM = "medium"
}
export declare enum PopoverShadow {
  SHADOW_1 = "shadow-1",
  SHADOW_2 = "shadow-2",
  SHADOW_3 = "shadow-3",
  SHADOW_4 = "shadow-4",
  SHADOW_6 = "shadow-6",
  SHADOW_8 = "shadow-8",
  SHADOW_12 = "shadow-12",
  SHADOW_16 = "shadow-16",
  SHADOW_24 = "shadow-24"
}
export declare enum KeyboardKeyCode {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  BACKSPACE = 8,
  DELETE = 46
}
export declare enum KeyboardCode {
  TAB = "Tab",
  SPACE = "Space",
  ESC = "Escape",
  ENTER = "Enter",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACKSPACE = "Backspace",
  DELETE = "Delete"
}
export declare type SelectItem = {
  id: string;
  name: string;
  selected: boolean;
  disabled?: boolean;
};
export declare enum ThemeVariant {
  DARK = "dark",
  LIGHT = "light"
}
export declare enum DividerSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}
export declare enum DividerOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical"
}
export declare enum SortDirection {
  ASC = "asc",
  DESC = "desc",
  NONE = "none"
}
export declare enum AvatarSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}
export declare enum ListSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "x-large"
}
export declare enum Size {
  X_SMALL = "x-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  SPECIAL = "special"
}
export declare enum ExpandableListStyle {
  ACCORDION = "accordion",
  MENU = "menu"
}
export declare enum ExpandableListButtonAlign {
  RIGHT = "right",
  LEFT = "left"
}
export declare enum LabelPosition {
  RIGHT = "right",
  LEFT = "left"
}
export declare enum ListDividerType {
  NONE = "none",
  HEADER = "header",
  ELEMENT = "element"
}
export declare enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}
export declare enum AlertType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}
export declare enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop"
}
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
export declare enum PocketStatus {
  PREVIEW = "preview",
  OPEN = "open",
  CLOSED = "closed"
}
export declare enum ToastNotification {
  DARK = "dark",
  LIGHT = "light",
  ACCENT = "accent",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning"
}
export declare enum ToastNotificationTransition {
  SLIDE_IN_LEFT = "slide-in-left",
  SLIDE_IN_RIGHT = "slide-in-right",
  SLIDE_IN_DOWN = "slide-in-down",
  SLIDE_IN_UP = "slide-in-up",
  SLIDE_OUT_LEFT = "slide-out-left",
  SLIDE_OUT_RIGHT = "slide-out-right",
  SLIDE_OUT_DOWN = "slide-out-down",
  SLIDE_OUT_UP = "slide-out-up"
}
export declare enum ToastNotificationPosition {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  TOP_CENTRE = "top-centre",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTRE = "bottom-centre"
}
export declare enum ZTableRowExpandedType {
  EXPANDABLE = "expandable",
  PADDING = "padding",
  NONE = "none"
}
export declare enum ZAriaAlertMode {
  POLITE = "polite",
  ASSERTIVE = "assertive"
}
export declare enum TransitionDirection {
  LEFT = "left",
  RIGHT = "right"
}
export declare enum OffCanvasVariant {
  OVERLAY = "overlay",
  PUSHCONTENT = "pushcontent"
}
export declare enum ZFileUploadType {
  DEFAULT = "default",
  DRAGDROP = "dragdrop"
}
export declare enum ZChipType {
  DEFAULT = "default",
  MEDIUM = "medium",
  SMALL = "small"
}
export declare enum ZSectionTitleDividerPosition {
  BEFORE = "before",
  AFTER = "after"
}
export declare enum ZDatePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
  MONTHS = "months"
}
export declare enum ZDatePickerModeValue {
  DATE = 401,
  DATE_TIME = 523,
  MONTHS = 288
}
export declare enum ZDatePickerPosition {
  TOP = "top",
  BOTTOM = "bottom"
}
export declare enum ZRangePickerMode {
  DATE = "date",
  DATE_TIME = "date-time"
}
export declare type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};
export declare enum StatusTagStatus {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  NEUTRAL = "neutral",
  DEFAULT = "default"
}
export declare enum InfoRevealPosition {
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left"
}
export declare enum CoverHeroVariant {
  OVERLAY = "overlay",
  STACKED = "stacked"
}
export declare enum CoverHeroContentPosition {
  TOP = "top",
  BOTTOM = "bottom"
}
export declare enum CarouselArrowsPosition {
  OVER = "over",
  BOTTOM = "bottom"
}
export declare enum CarouselProgressMode {
  DOTS = "dots",
  NUMBERS = "numbers"
}
