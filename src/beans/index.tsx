export type Footer = {
  zanichelliLinks: FooterGroup[];
  myzLink: MyzLink;
  zanichelliAddress: string;
  social: FooterSocial[];
  certification: string;
  bottomLinks: FooterGroupItem[];
};

export type FooterGroupItem = {
  label: string;
  link: string;
  target?: string;
};

export type FooterGroup = {
  title: string;
  items: FooterGroupItem[];
};

export type MyzLink = {
  label: string;
  img: string;
  link: string;
};

export type FooterSocial = {
  icon: string;
  link: string;
  description?: string;
};

export const enum LicenseType {
  REAL = "reale",
  VIRTUAL = "virtuale",
  TRIAL = "saggio",
  TEMP = "reale_temp",
}

export type Card = {
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

export const enum CardVariant {
  BORDER = "border",
  SHADOW = "shadow",
  OVERLAY = "overlay",
  TEXT = "text",
}

export type Action = {
  isLink: boolean;
  value: string;
  url?: string;
};

export type ListItem = {
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

export const enum NavigationTabsOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export const enum NavigationTabsSize {
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

export type ComboItem = {
  id: string;
  name: string;
  checked: boolean;
};

export const enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DARK_BG = "dark-bg",
}

export const enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export const enum ButtonSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export const enum InputType {
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

export const enum InputStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export const enum PopoverPositions {
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

export const enum PopoverPosition {
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

export const enum PopoverBorderRadius {
  NONE = "none",
  SMALL = "small",
  MEDIUM = "medium",
}

export const enum PopoverShadow {
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

export const enum KeyboardKeyCode {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  BACKSPACE = 8,
  DELETE = 46,
}

export const enum KeyboardCode {
  TAB = "Tab",
  SPACE = "Space",
  ESC = "Escape",
  ENTER = "Enter",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACKSPACE = "Backspace",
  DELETE = "Delete",
}

export type SelectItem = {
  id: string;
  name: string;
  selected: boolean;
  disabled?: boolean;
};

export const enum ThemeVariant {
  DARK = "dark",
  LIGHT = "light",
}

export const enum DividerSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const enum DividerOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export const enum SortDirection {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

export const enum AvatarSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const enum ListSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  X_LARGE = "x-large",
}

export const enum Size {
  X_SMALL = "x-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  SPECIAL = "special",
}

export const enum ExpandableListStyle {
  ACCORDION = "accordion",
  MENU = "menu",
}

export const enum ExpandableListButtonAlign {
  RIGHT = "right",
  LEFT = "left",
}

export const enum LabelPosition {
  RIGHT = "right",
  LEFT = "left",
}

export const enum ListDividerType {
  NONE = "none",
  HEADER = "header",
  ELEMENT = "element",
}

export const enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export const enum AlertType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export const enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

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

export const enum PocketStatus {
  PREVIEW = "preview",
  OPEN = "open",
  CLOSED = "closed",
}

export const enum ToastNotification {
  DARK = "dark",
  LIGHT = "light",
  ACCENT = "accent",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

export const enum ToastNotificationTransition {
  SLIDE_IN_LEFT = "slide-in-left",
  SLIDE_IN_RIGHT = "slide-in-right",
  SLIDE_IN_DOWN = "slide-in-down",
  SLIDE_IN_UP = "slide-in-up",
  SLIDE_OUT_LEFT = "slide-out-left",
  SLIDE_OUT_RIGHT = "slide-out-right",
  SLIDE_OUT_DOWN = "slide-out-down",
  SLIDE_OUT_UP = "slide-out-up",
}

export const enum ToastNotificationPosition {
  TOP_RIGHT = "top-right",
  TOP_LEFT = "top-left",
  TOP_CENTRE = "top-centre",
  BOTTOM_RIGHT = "bottom-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTRE = "bottom-centre",
}

export const enum ZTableRowExpandedType {
  EXPANDABLE = "expandable",
  PADDING = "padding",
  NONE = "none",
}

export const enum ZAriaAlertMode {
  POLITE = "polite",
  ASSERTIVE = "assertive",
}

export const enum TransitionDirection {
  LEFT = "left",
  RIGHT = "right",
}

export const enum OffCanvasVariant {
  OVERLAY = "overlay",
  PUSHCONTENT = "pushcontent",
}

export const enum ZFileUploadType {
  DEFAULT = "default",
  DRAGDROP = "dragdrop",
}

export const enum ZChipType {
  DEFAULT = "default",
  MEDIUM = "medium",
  SMALL = "small",
}

export const enum ZSectionTitleDividerPosition {
  BEFORE = "before",
  AFTER = "after",
}

export const enum ZDatePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
  MONTHS = "months",
}

export const enum ZDatePickerModeValue {
  DATE = 401,
  DATE_TIME = 523,
  MONTHS = 288,
}

export const enum ZDatePickerPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export const enum ZRangePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
}

export type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export const enum StatusTagStatus {
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
  NEUTRAL = "neutral",
  DEFAULT = "default",
}

export const enum InfoRevealPosition {
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left",
}

export const enum CoverHeroVariant {
  OVERLAY = "overlay",
  STACKED = "stacked",
}

export const enum CoverHeroContentPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export const enum CarouselArrowsPosition {
  OVER = "over",
  BOTTOM = "bottom",
}

export const enum CarouselProgressMode {
  DOTS = "dots",
  NUMBERS = "numbers",
}
