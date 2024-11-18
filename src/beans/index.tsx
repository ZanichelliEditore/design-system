export type MyzLink = {
  label: string;
  img: string;
  link: string;
};

export enum LicenseType {
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

export enum CardVariant {
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

export enum NavigationTabsOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum NavigationTabsSize {
  BIG = "big",
  SMALL = "small",
}

export enum NavigationTabsKeyboardEvents {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
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
  category?: string;
};

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

/**
 * @deprecated Use ControlSize instead
 */
export enum ButtonSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export enum ControlSize {
  BIG = "big",
  SMALL = "small",
  X_SMALL = "x-small",
}

export enum InputType {
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

export enum InputStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export enum PopoverPosition {
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

export enum KeyboardKeyCode {
  TAB = 9,
  SPACE = 32,
  ESC = 27,
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
  BACKSPACE = 8,
  DELETE = 46,
}

export enum KeyboardCode {
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

export type SelectItem = {
  id: string;
  name: string;
  selected: boolean;
  icon?: string;
  disabled?: boolean;
  category?: string;
};

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

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

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

export enum ExpandableListStyle {
  ACCORDION = "accordion",
  MENU = "menu",
}

export enum ExpandableListButtonAlign {
  RIGHT = "right",
  LEFT = "left",
}

export enum LabelPosition {
  RIGHT = "right",
  LEFT = "left",
}

export enum ListDividerType {
  NONE = "none",
  HEADER = "header",
  ELEMENT = "element",
}

export enum ListType {
  NONE = "none",
  ORDERED = "ordered",
  UNORDERED = "unordered",
}

export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export enum AlertType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  DESKTOP_WIDE = "desktop-wide",
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

export enum ToastNotification {
  DARK = "dark",
  LIGHT = "light",
  ACCENT = "accent",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

export enum ToastNotificationTransition {
  SLIDE_IN_LEFT = "slide-in-left",
  SLIDE_IN_RIGHT = "slide-in-right",
  SLIDE_IN_DOWN = "slide-in-down",
  SLIDE_IN_UP = "slide-in-up",
  SLIDE_OUT_LEFT = "slide-out-left",
  SLIDE_OUT_RIGHT = "slide-out-right",
  SLIDE_OUT_DOWN = "slide-out-down",
  SLIDE_OUT_UP = "slide-out-up",
}

export enum ToastNotificationPosition {
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

export enum TransitionDirection {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
}

export enum OffCanvasVariant {
  OVERLAY = "overlay",
  PUSHCONTENT = "pushcontent",
}

export enum ZFileUploadType {
  DEFAULT = "default",
  DRAGDROP = "dragdrop",
}

export enum ZChipType {
  DEFAULT = "default",
  MEDIUM = "medium",
  SMALL = "small",
}

export enum ZSectionTitleDividerPosition {
  BEFORE = "before",
  AFTER = "after",
}

export enum ZDatePickerMode {
  DATE = "date",
  DATE_TIME = "date-time",
  MONTHS = "months",
}

export enum ZDatePickerModeValue {
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

export type SkipToContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export enum InfoRevealPosition {
  TOP_RIGHT = "top_right",
  TOP_LEFT = "top_left",
  BOTTOM_RIGHT = "bottom_right",
  BOTTOM_LEFT = "bottom_left",
}

export enum CoverHeroVariant {
  OVERLAY = "overlay",
  STACKED = "stacked",
}

export enum CoverHeroContentPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export enum CarouselArrowsPosition {
  OVER = "over",
  BOTTOM = "bottom",
}

export enum CarouselProgressMode {
  DOTS = "dots",
  NUMBERS = "numbers",
}

export type SearchbarItem = {
  label: string;
  id?: string;
  icon?: string;
  tag?: {icon?: string; text: string};
  category?: string;
  subcategory?: string;
  children?: Omit<SearchbarItem, "category" | "subcategory">[];
};

export type SearchbarGroupedItem = {
  [key: string]: SearchbarGroup;
};

export type SearchbarGroup = {
  items: SearchbarItem[];
  category?: string;
  subcategory?: string;
};

export type BreadcrumbPath = {
  text?: string;
  path?: string;
  hasTooltip?: boolean;
};

export enum BreadcrumbPathStyle {
  SEMIBOLD = "semibold",
  UNDERLINED = "underlined",
}

export enum BreadcrumbHomepageVariant {
  TEXT = "text",
  ICON = "icon",
}

export enum VisibilityCondition {
  HOVER = "hover",
  ALWAYS = "always",
}

export enum BookCardVariant {
  EXPANDED = "expanded",
  COMPACT = "compact",
  SEARCH = "search",
  LANDSCAPE = "landscape",
  PORTRAIT = "portrait",
}

export type CardTag = {
  label: string;
  active: boolean;
};

export enum AccordionVariant {
  DEFAULT = "default",
  BACKGROUND = "background",
}
