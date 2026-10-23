var LicenseType;
(function (LicenseType) {
    LicenseType["REAL"] = "reale";
    LicenseType["VIRTUAL"] = "virtuale";
    LicenseType["TRIAL"] = "saggio";
    LicenseType["TEMP"] = "reale_temp";
})(LicenseType || (LicenseType = {}));
var CardVariant;
(function (CardVariant) {
    CardVariant["BORDER"] = "border";
    CardVariant["SHADOW"] = "shadow";
    CardVariant["OVERLAY"] = "overlay";
    CardVariant["TEXT"] = "text";
})(CardVariant || (CardVariant = {}));
var Orientation;
(function (Orientation) {
    Orientation["HORIZONTAL"] = "horizontal";
    Orientation["VERTICAL"] = "vertical";
})(Orientation || (Orientation = {}));
var NavigationTabsOrientation;
(function (NavigationTabsOrientation) {
    NavigationTabsOrientation["HORIZONTAL"] = "horizontal";
    NavigationTabsOrientation["VERTICAL"] = "vertical";
})(NavigationTabsOrientation || (NavigationTabsOrientation = {}));
var NavigationTabsSize;
(function (NavigationTabsSize) {
    NavigationTabsSize["BIG"] = "big";
    NavigationTabsSize["SMALL"] = "small";
})(NavigationTabsSize || (NavigationTabsSize = {}));
var NavigationTabsKeyboardEvents;
(function (NavigationTabsKeyboardEvents) {
    NavigationTabsKeyboardEvents["LEFT"] = "ArrowLeft";
    NavigationTabsKeyboardEvents["RIGHT"] = "ArrowRight";
    NavigationTabsKeyboardEvents["UP"] = "ArrowUp";
    NavigationTabsKeyboardEvents["DOWN"] = "ArrowDown";
})(NavigationTabsKeyboardEvents || (NavigationTabsKeyboardEvents = {}));
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["PRIMARY"] = "primary";
    ButtonVariant["SECONDARY"] = "secondary";
    ButtonVariant["TERTIARY"] = "tertiary";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["SUBMIT"] = "submit";
    ButtonType["RESET"] = "reset";
    ButtonType["BUTTON"] = "button";
})(ButtonType || (ButtonType = {}));
/**
 * @deprecated Use ControlSize instead
 */
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["BIG"] = "big";
    ButtonSize["SMALL"] = "small";
    ButtonSize["X_SMALL"] = "x-small";
})(ButtonSize || (ButtonSize = {}));
var ControlSize;
(function (ControlSize) {
    ControlSize["BIG"] = "big";
    ControlSize["SMALL"] = "small";
    ControlSize["X_SMALL"] = "x-small";
})(ControlSize || (ControlSize = {}));
var InputType;
(function (InputType) {
    InputType["TEXT"] = "text";
    InputType["PASSWORD"] = "password";
    InputType["NUMBER"] = "number";
    InputType["EMAIL"] = "email";
    InputType["TEXTAREA"] = "textarea";
    InputType["CHECKBOX"] = "checkbox";
    InputType["RADIO"] = "radio";
    InputType["TEL"] = "tel";
    InputType["URL"] = "url";
    InputType["SEARCH"] = "search";
})(InputType || (InputType = {}));
var InputStatus;
(function (InputStatus) {
    InputStatus["SUCCESS"] = "success";
    InputStatus["ERROR"] = "error";
    InputStatus["WARNING"] = "warning";
})(InputStatus || (InputStatus = {}));
var PopoverPosition;
(function (PopoverPosition) {
    /** @deprecated This value is not needed anymore as the popover will always try to position itself automatically based on available space.
     *
     * Passing `AUTO` is the same as not passing any position value.
     * Use any of the other values to explicitly set the preferred position of the popover.
     */
    PopoverPosition["AUTO"] = "auto";
    PopoverPosition["TOP"] = "top";
    PopoverPosition["RIGHT"] = "right";
    PopoverPosition["BOTTOM"] = "bottom";
    PopoverPosition["LEFT"] = "left";
    PopoverPosition["TOP_RIGHT"] = "top_right";
    PopoverPosition["TOP_LEFT"] = "top_left";
    PopoverPosition["BOTTOM_RIGHT"] = "bottom_right";
    PopoverPosition["BOTTOM_LEFT"] = "bottom_left";
    PopoverPosition["RIGHT_TOP"] = "right_top";
    PopoverPosition["RIGHT_BOTTOM"] = "right_bottom";
    PopoverPosition["LEFT_TOP"] = "left_top";
    PopoverPosition["LEFT_BOTTOM"] = "left_bottom";
})(PopoverPosition || (PopoverPosition = {}));
var KeyboardKeyCode;
(function (KeyboardKeyCode) {
    KeyboardKeyCode[KeyboardKeyCode["TAB"] = 9] = "TAB";
    KeyboardKeyCode[KeyboardKeyCode["SPACE"] = 32] = "SPACE";
    KeyboardKeyCode[KeyboardKeyCode["ESC"] = 27] = "ESC";
    KeyboardKeyCode[KeyboardKeyCode["ENTER"] = 13] = "ENTER";
    KeyboardKeyCode[KeyboardKeyCode["ARROW_UP"] = 38] = "ARROW_UP";
    KeyboardKeyCode[KeyboardKeyCode["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    KeyboardKeyCode[KeyboardKeyCode["BACKSPACE"] = 8] = "BACKSPACE";
    KeyboardKeyCode[KeyboardKeyCode["DELETE"] = 46] = "DELETE";
})(KeyboardKeyCode || (KeyboardKeyCode = {}));
var KeyboardCode;
(function (KeyboardCode) {
    KeyboardCode["TAB"] = "Tab";
    KeyboardCode["SPACE"] = "Space";
    KeyboardCode["ESC"] = "Escape";
    KeyboardCode["ENTER"] = "Enter";
    KeyboardCode["ARROW_UP"] = "ArrowUp";
    KeyboardCode["ARROW_DOWN"] = "ArrowDown";
    KeyboardCode["BACKSPACE"] = "Backspace";
    KeyboardCode["DELETE"] = "Delete";
    KeyboardCode["ARROW_RIGHT"] = "ArrowRight";
    KeyboardCode["ARROW_LEFT"] = "ArrowLeft";
})(KeyboardCode || (KeyboardCode = {}));
var ThemeVariant;
(function (ThemeVariant) {
    ThemeVariant["DARK"] = "dark";
    ThemeVariant["LIGHT"] = "light";
})(ThemeVariant || (ThemeVariant = {}));
var DividerSize;
(function (DividerSize) {
    DividerSize["SMALL"] = "small";
    DividerSize["MEDIUM"] = "medium";
    DividerSize["LARGE"] = "large";
})(DividerSize || (DividerSize = {}));
var DividerOrientation;
(function (DividerOrientation) {
    DividerOrientation["HORIZONTAL"] = "horizontal";
    DividerOrientation["VERTICAL"] = "vertical";
})(DividerOrientation || (DividerOrientation = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(SortDirection || (SortDirection = {}));
var AvatarSize;
(function (AvatarSize) {
    AvatarSize["SMALL"] = "small";
    AvatarSize["MEDIUM"] = "medium";
    AvatarSize["LARGE"] = "large";
})(AvatarSize || (AvatarSize = {}));
var ListSize;
(function (ListSize) {
    ListSize["SMALL"] = "small";
    ListSize["MEDIUM"] = "medium";
    ListSize["LARGE"] = "large";
    ListSize["X_LARGE"] = "x-large";
    ListSize["NONE"] = "none";
})(ListSize || (ListSize = {}));
var ExpandableListStyle;
(function (ExpandableListStyle) {
    ExpandableListStyle["ACCORDION"] = "accordion";
    ExpandableListStyle["MENU"] = "menu";
})(ExpandableListStyle || (ExpandableListStyle = {}));
var ExpandableListButtonAlign;
(function (ExpandableListButtonAlign) {
    ExpandableListButtonAlign["RIGHT"] = "right";
    ExpandableListButtonAlign["LEFT"] = "left";
})(ExpandableListButtonAlign || (ExpandableListButtonAlign = {}));
var LabelPosition;
(function (LabelPosition) {
    LabelPosition["RIGHT"] = "right";
    LabelPosition["LEFT"] = "left";
})(LabelPosition || (LabelPosition = {}));
var ListDividerType;
(function (ListDividerType) {
    ListDividerType["NONE"] = "none";
    ListDividerType["HEADER"] = "header";
    ListDividerType["ELEMENT"] = "element";
})(ListDividerType || (ListDividerType = {}));
var ListType;
(function (ListType) {
    ListType["NONE"] = "none";
    ListType["ORDERED"] = "ordered";
    ListType["UNORDERED"] = "unordered";
})(ListType || (ListType = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["WARNING"] = "warning";
    NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));
var AlertType;
(function (AlertType) {
    AlertType["SUCCESS"] = "success";
    AlertType["WARNING"] = "warning";
    AlertType["ERROR"] = "error";
})(AlertType || (AlertType = {}));
var Device;
(function (Device) {
    Device["MOBILE"] = "mobile";
    Device["TABLET"] = "tablet";
    Device["DESKTOP"] = "desktop";
    Device["DESKTOP_WIDE"] = "desktop-wide";
})(Device || (Device = {}));
var ToastNotification;
(function (ToastNotification) {
    ToastNotification["DARK"] = "dark";
    ToastNotification["LIGHT"] = "light";
    ToastNotification["ACCENT"] = "accent";
    ToastNotification["ERROR"] = "error";
    ToastNotification["SUCCESS"] = "success";
    ToastNotification["WARNING"] = "warning";
})(ToastNotification || (ToastNotification = {}));
var ToastNotificationTransition;
(function (ToastNotificationTransition) {
    ToastNotificationTransition["SLIDE_IN_LEFT"] = "slide-in-left";
    ToastNotificationTransition["SLIDE_IN_RIGHT"] = "slide-in-right";
    ToastNotificationTransition["SLIDE_IN_DOWN"] = "slide-in-down";
    ToastNotificationTransition["SLIDE_IN_UP"] = "slide-in-up";
    ToastNotificationTransition["SLIDE_OUT_LEFT"] = "slide-out-left";
    ToastNotificationTransition["SLIDE_OUT_RIGHT"] = "slide-out-right";
    ToastNotificationTransition["SLIDE_OUT_DOWN"] = "slide-out-down";
    ToastNotificationTransition["SLIDE_OUT_UP"] = "slide-out-up";
})(ToastNotificationTransition || (ToastNotificationTransition = {}));
var ToastNotificationPosition;
(function (ToastNotificationPosition) {
    ToastNotificationPosition["TOP_RIGHT"] = "top-right";
    ToastNotificationPosition["TOP_LEFT"] = "top-left";
    ToastNotificationPosition["TOP_CENTRE"] = "top-centre";
    ToastNotificationPosition["BOTTOM_RIGHT"] = "bottom-right";
    ToastNotificationPosition["BOTTOM_LEFT"] = "bottom-left";
    ToastNotificationPosition["BOTTOM_CENTRE"] = "bottom-centre";
})(ToastNotificationPosition || (ToastNotificationPosition = {}));
var ZTableRowExpandedType;
(function (ZTableRowExpandedType) {
    ZTableRowExpandedType["EXPANDABLE"] = "expandable";
    ZTableRowExpandedType["PADDING"] = "padding";
    ZTableRowExpandedType["NONE"] = "none";
})(ZTableRowExpandedType || (ZTableRowExpandedType = {}));
var ZAriaAlertMode;
(function (ZAriaAlertMode) {
    ZAriaAlertMode["POLITE"] = "polite";
    ZAriaAlertMode["ASSERTIVE"] = "assertive";
})(ZAriaAlertMode || (ZAriaAlertMode = {}));
var TransitionDirection;
(function (TransitionDirection) {
    TransitionDirection["LEFT"] = "left";
    TransitionDirection["RIGHT"] = "right";
    TransitionDirection["UP"] = "up";
})(TransitionDirection || (TransitionDirection = {}));
var OffCanvasVariant;
(function (OffCanvasVariant) {
    OffCanvasVariant["OVERLAY"] = "overlay";
    OffCanvasVariant["PUSHCONTENT"] = "pushcontent";
})(OffCanvasVariant || (OffCanvasVariant = {}));
var ZFileUploadType;
(function (ZFileUploadType) {
    ZFileUploadType["DEFAULT"] = "default";
    ZFileUploadType["DRAGDROP"] = "dragdrop";
})(ZFileUploadType || (ZFileUploadType = {}));
var ZChipType;
(function (ZChipType) {
    ZChipType["DEFAULT"] = "default";
    ZChipType["MEDIUM"] = "medium";
    ZChipType["SMALL"] = "small";
})(ZChipType || (ZChipType = {}));
var ZChipVariant;
(function (ZChipVariant) {
    ZChipVariant["OUTLINE"] = "outline";
    ZChipVariant["FILLED"] = "filled";
    ZChipVariant["SOFT"] = "soft";
})(ZChipVariant || (ZChipVariant = {}));
var ZSectionTitleDividerPosition;
(function (ZSectionTitleDividerPosition) {
    ZSectionTitleDividerPosition["BEFORE"] = "before";
    ZSectionTitleDividerPosition["AFTER"] = "after";
})(ZSectionTitleDividerPosition || (ZSectionTitleDividerPosition = {}));
var ZDatePickerMode;
(function (ZDatePickerMode) {
    ZDatePickerMode["DATE"] = "date";
    ZDatePickerMode["DATE_TIME"] = "date-time";
    ZDatePickerMode["MONTHS"] = "months";
})(ZDatePickerMode || (ZDatePickerMode = {}));
var ZDatePickerModeValue;
(function (ZDatePickerModeValue) {
    ZDatePickerModeValue[ZDatePickerModeValue["DATE"] = 401] = "DATE";
    ZDatePickerModeValue[ZDatePickerModeValue["DATE_TIME"] = 523] = "DATE_TIME";
    ZDatePickerModeValue[ZDatePickerModeValue["MONTHS"] = 288] = "MONTHS";
})(ZDatePickerModeValue || (ZDatePickerModeValue = {}));
var ZDatePickerPosition;
(function (ZDatePickerPosition) {
    ZDatePickerPosition["TOP"] = "top";
    ZDatePickerPosition["BOTTOM"] = "bottom";
})(ZDatePickerPosition || (ZDatePickerPosition = {}));
var ZRangePickerMode;
(function (ZRangePickerMode) {
    ZRangePickerMode["DATE"] = "date";
    ZRangePickerMode["DATE_TIME"] = "date-time";
})(ZRangePickerMode || (ZRangePickerMode = {}));
var InfoRevealPosition;
(function (InfoRevealPosition) {
    InfoRevealPosition["TOP_RIGHT"] = "top_right";
    InfoRevealPosition["TOP_LEFT"] = "top_left";
    InfoRevealPosition["BOTTOM_RIGHT"] = "bottom_right";
    InfoRevealPosition["BOTTOM_LEFT"] = "bottom_left";
})(InfoRevealPosition || (InfoRevealPosition = {}));
var CoverHeroVariant;
(function (CoverHeroVariant) {
    CoverHeroVariant["OVERLAY"] = "overlay";
    CoverHeroVariant["STACKED"] = "stacked";
})(CoverHeroVariant || (CoverHeroVariant = {}));
var CoverHeroContentPosition;
(function (CoverHeroContentPosition) {
    CoverHeroContentPosition["TOP"] = "top";
    CoverHeroContentPosition["BOTTOM"] = "bottom";
})(CoverHeroContentPosition || (CoverHeroContentPosition = {}));
var CarouselArrowsPosition;
(function (CarouselArrowsPosition) {
    CarouselArrowsPosition["OVER"] = "over";
    CarouselArrowsPosition["BOTTOM"] = "bottom";
})(CarouselArrowsPosition || (CarouselArrowsPosition = {}));
var CarouselProgressMode;
(function (CarouselProgressMode) {
    CarouselProgressMode["DOTS"] = "dots";
    CarouselProgressMode["NUMBERS"] = "numbers";
})(CarouselProgressMode || (CarouselProgressMode = {}));
var BreadcrumbPathStyle;
(function (BreadcrumbPathStyle) {
    BreadcrumbPathStyle["SEMIBOLD"] = "semibold";
    BreadcrumbPathStyle["UNDERLINED"] = "underlined";
})(BreadcrumbPathStyle || (BreadcrumbPathStyle = {}));
var BreadcrumbHomepageVariant;
(function (BreadcrumbHomepageVariant) {
    BreadcrumbHomepageVariant["TEXT"] = "text";
    BreadcrumbHomepageVariant["ICON"] = "icon";
})(BreadcrumbHomepageVariant || (BreadcrumbHomepageVariant = {}));
var VisibilityCondition;
(function (VisibilityCondition) {
    VisibilityCondition["HOVER"] = "hover";
    VisibilityCondition["ALWAYS"] = "always";
})(VisibilityCondition || (VisibilityCondition = {}));
var BookCardVariant;
(function (BookCardVariant) {
    BookCardVariant["LANDSCAPE"] = "landscape";
    BookCardVariant["PORTRAIT"] = "portrait";
})(BookCardVariant || (BookCardVariant = {}));
var BookCardDeprecatedVariant;
(function (BookCardDeprecatedVariant) {
    BookCardDeprecatedVariant["EXPANDED"] = "expanded";
    BookCardDeprecatedVariant["COMPACT"] = "compact";
    BookCardDeprecatedVariant["SEARCH"] = "search";
})(BookCardDeprecatedVariant || (BookCardDeprecatedVariant = {}));
var AccordionVariant;
(function (AccordionVariant) {
    AccordionVariant["DEFAULT"] = "default";
    AccordionVariant["BACKGROUND"] = "background";
})(AccordionVariant || (AccordionVariant = {}));
var IconPosition;
(function (IconPosition) {
    IconPosition["LEFT"] = "left";
    IconPosition["RIGHT"] = "right";
})(IconPosition || (IconPosition = {}));
/** Map of color hex codes to their Italian and English names for the Color Picker Palette. */
const ColorPickerPalette = {
    "#FFFFFF00": { it: "Trasparente", en: "Transparent" },
    "#FFFFFF": { it: "Bianco", en: "White" },
    "#CCCCCC": { it: "Grigio", en: "Gray" },
    "#7E7E7E": { it: "Grigio scuro 1", en: "Dark gray 1" },
    "#333333": { it: "Grigio scuro 2", en: "Dark gray 2" },
    "#FFCCCC": { it: "Rosso chiaro 1", en: "Light red 1" },
    "#FF9999": { it: "Rosso chiaro 2", en: "Light red 2" },
    "#FF3333": { it: "Rosso", en: "Red" },
    "#CC0000": { it: "Rosso scuro 1", en: "Dark red 1" },
    "#660000": { it: "Rosso scuro 2", en: "Dark red 2" },
    "#FFE1CC": { it: "Arancione chiaro 1", en: "Light orange 1" },
    "#FFC399": { it: "Arancione chiaro 2", en: "Light orange 2" },
    "#FF8933": { it: "Arancione", en: "Orange" },
    "#CC5500": { it: "Arancione scuro 1", en: "Dark orange 1" },
    "#662B00": { it: "Arancione scuro 2", en: "Dark orange 2" },
    "#FFF7CC": { it: "Giallo chiaro 1", en: "Light yellow 1" },
    "#FFEE99": { it: "Giallo chiaro 2", en: "Light yellow 2" },
    "#FFDD33": { it: "Giallo", en: "Yellow" },
    "#CCAA00": { it: "Giallo scuro 1", en: "Dark yellow 1" },
    "#665600": { it: "Giallo scuro 2", en: "Dark yellow 2" },
    "#DDFFCC": { it: "Verde chiaro 1", en: "Light green 1" },
    "#BBFF99": { it: "Verde chiaro 2", en: "Light green 2" },
    "#77FF33": { it: "Verde", en: "Green" },
    "#44CC00": { it: "Verde scuro 1", en: "Dark green 1" },
    "#226600": { it: "Verde scuro 2", en: "Dark green 2" },
    "#CCFFE5": { it: "Verde acqua chiaro 1", en: "Light aquamarine 1" },
    "#99FFCC": { it: "Verde acqua chiaro 2", en: "Light aquamarine 2" },
    "#33FF99": { it: "Verde acqua", en: "Aquamarine" },
    "#00CC66": { it: "Verde acqua scuro 1", en: "Dark aquamarine 1" },
    "#006633": { it: "Verde acqua scuro 2", en: "Dark aquamarine 2" },
    "#CCEEFF": { it: "Azzurro chiaro 1", en: "Light blue 1" },
    "#99DDFF": { it: "Azzurro chiaro 2", en: "Light blue 2" },
    "#33BBFF": { it: "Azzurro", en: "Blue" },
    "#0088CC": { it: "Azzurro scuro 1", en: "Dark blue 1" },
    "#004466": { it: "Azzurro scuro 2", en: "Dark blue 2" },
    "#D4CCFF": { it: "Viola chiaro 1", en: "Light purple 1" },
    "#AA99FF": { it: "Viola chiaro 2", en: "Light purple 2" },
    "#5533FF": { it: "Viola", en: "Purple" },
    "#2200CC": { it: "Viola scuro 1", en: "Dark purple 1" },
    "#110066": { it: "Viola scuro 2", en: "Dark purple 2" },
    "#FFCCFF": { it: "Rosa chiaro 1", en: "Light pink 1" },
    "#FF99FF": { it: "Rosa chiaro 2", en: "Light pink 2" },
    "#FF33FF": { it: "Rosa", en: "Pink" },
    "#CC00CC": { it: "Rosa scuro 1", en: "Dark pink 1" },
    "#660066": { it: "Rosa scuro 2", en: "Dark pink 2" },
};

export { BookCardDeprecatedVariant as $, AvatarSize as A, ButtonVariant as B, CardVariant as C, DividerSize as D, ExpandableListStyle as E, ZDatePickerMode as F, ZDatePickerModeValue as G, ZDatePickerPosition as H, InputType as I, ZRangePickerMode as J, KeyboardKeyCode as K, LicenseType as L, InfoRevealPosition as M, NavigationTabsOrientation as N, Orientation as O, PopoverPosition as P, CoverHeroVariant as Q, CoverHeroContentPosition as R, SortDirection as S, ThemeVariant as T, CarouselArrowsPosition as U, CarouselProgressMode as V, BreadcrumbPathStyle as W, BreadcrumbHomepageVariant as X, VisibilityCondition as Y, ZTableRowExpandedType as Z, BookCardVariant as _, NavigationTabsSize as a, AccordionVariant as a0, IconPosition as a1, ColorPickerPalette as a2, NavigationTabsKeyboardEvents as b, ButtonType as c, ButtonSize as d, ControlSize as e, InputStatus as f, KeyboardCode as g, DividerOrientation as h, ListSize as i, ExpandableListButtonAlign as j, LabelPosition as k, ListDividerType as l, ListType as m, NotificationType as n, AlertType as o, Device as p, ToastNotification as q, ToastNotificationTransition as r, ToastNotificationPosition as s, ZAriaAlertMode as t, TransitionDirection as u, OffCanvasVariant as v, ZFileUploadType as w, ZChipType as x, ZChipVariant as y, ZSectionTitleDividerPosition as z };
