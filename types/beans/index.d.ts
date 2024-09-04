export type MyzLink = {
    label: string;
    img: string;
    link: string;
};
export declare enum LicenseType {
    REAL = "reale",
    VIRTUAL = "virtuale",
    TRIAL = "saggio",
    TEMP = "reale_temp"
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
export declare enum CardVariant {
    BORDER = "border",
    SHADOW = "shadow",
    OVERLAY = "overlay",
    TEXT = "text"
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
export declare enum NavigationTabsOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export declare enum NavigationTabsSize {
    BIG = "big",
    SMALL = "small"
}
export declare enum NavigationTabsKeyboardEvents {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown"
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
export declare enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary"
}
export declare enum ButtonType {
    SUBMIT = "submit",
    RESET = "reset",
    BUTTON = "button"
}
/**
 * @deprecated Use ControlSize instead
 */
export declare enum ButtonSize {
    BIG = "big",
    SMALL = "small",
    X_SMALL = "x-small"
}
export declare enum ControlSize {
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
export declare enum PopoverPosition {
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
export type SelectItem = {
    id: string;
    name: string;
    selected: boolean;
    icon?: string;
    disabled?: boolean;
    category?: string;
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
    DESC = "desc"
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
export declare enum ListType {
    NONE = "none",
    ORDERED = "ordered",
    UNORDERED = "unordered"
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
    DESKTOP = "desktop",
    DESKTOP_WIDE = "desktop-wide"
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
export type SkipToContentLink = {
    label: string;
    href: string;
    ariaLabel?: string;
};
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
export type SearchbarItem = {
    label: string;
    id?: string;
    icon?: string;
    tag?: {
        icon?: string;
        text: string;
    };
    category?: string;
    subcategory?: string;
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
export declare enum BreadcrumbPathStyle {
    SEMIBOLD = "semibold",
    UNDERLINED = "underlined"
}
export declare enum BreadcrumbHomepageVariant {
    TEXT = "text",
    ICON = "icon"
}
export declare enum VisibilityCondition {
    HOVER = "hover",
    ALWAYS = "always"
}
export declare enum BookCardVariant {
    EXPANDED = "expanded",
    COMPACT = "compact",
    SEARCH = "search"
}
export declare enum AccordionVariant {
    DEFAULT = "default",
    BACKGROUND = "background"
}
