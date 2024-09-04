export var LicenseType;
(function (LicenseType) {
    LicenseType["REAL"] = "reale";
    LicenseType["VIRTUAL"] = "virtuale";
    LicenseType["TRIAL"] = "saggio";
    LicenseType["TEMP"] = "reale_temp";
})(LicenseType || (LicenseType = {}));
export var CardVariant;
(function (CardVariant) {
    CardVariant["BORDER"] = "border";
    CardVariant["SHADOW"] = "shadow";
    CardVariant["OVERLAY"] = "overlay";
    CardVariant["TEXT"] = "text";
})(CardVariant || (CardVariant = {}));
export var NavigationTabsOrientation;
(function (NavigationTabsOrientation) {
    NavigationTabsOrientation["HORIZONTAL"] = "horizontal";
    NavigationTabsOrientation["VERTICAL"] = "vertical";
})(NavigationTabsOrientation || (NavigationTabsOrientation = {}));
export var NavigationTabsSize;
(function (NavigationTabsSize) {
    NavigationTabsSize["BIG"] = "big";
    NavigationTabsSize["SMALL"] = "small";
})(NavigationTabsSize || (NavigationTabsSize = {}));
export var NavigationTabsKeyboardEvents;
(function (NavigationTabsKeyboardEvents) {
    NavigationTabsKeyboardEvents["LEFT"] = "ArrowLeft";
    NavigationTabsKeyboardEvents["RIGHT"] = "ArrowRight";
    NavigationTabsKeyboardEvents["UP"] = "ArrowUp";
    NavigationTabsKeyboardEvents["DOWN"] = "ArrowDown";
})(NavigationTabsKeyboardEvents || (NavigationTabsKeyboardEvents = {}));
export var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["PRIMARY"] = "primary";
    ButtonVariant["SECONDARY"] = "secondary";
    ButtonVariant["TERTIARY"] = "tertiary";
})(ButtonVariant || (ButtonVariant = {}));
export var ButtonType;
(function (ButtonType) {
    ButtonType["SUBMIT"] = "submit";
    ButtonType["RESET"] = "reset";
    ButtonType["BUTTON"] = "button";
})(ButtonType || (ButtonType = {}));
/**
 * @deprecated Use ControlSize instead
 */
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["BIG"] = "big";
    ButtonSize["SMALL"] = "small";
    ButtonSize["X_SMALL"] = "x-small";
})(ButtonSize || (ButtonSize = {}));
export var ControlSize;
(function (ControlSize) {
    ControlSize["BIG"] = "big";
    ControlSize["SMALL"] = "small";
    ControlSize["X_SMALL"] = "x-small";
})(ControlSize || (ControlSize = {}));
export var InputType;
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
export var InputStatus;
(function (InputStatus) {
    InputStatus["SUCCESS"] = "success";
    InputStatus["ERROR"] = "error";
    InputStatus["WARNING"] = "warning";
})(InputStatus || (InputStatus = {}));
export var PopoverPosition;
(function (PopoverPosition) {
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
export var KeyboardKeyCode;
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
export var KeyboardCode;
(function (KeyboardCode) {
    KeyboardCode["TAB"] = "Tab";
    KeyboardCode["SPACE"] = "Space";
    KeyboardCode["ESC"] = "Escape";
    KeyboardCode["ENTER"] = "Enter";
    KeyboardCode["ARROW_UP"] = "ArrowUp";
    KeyboardCode["ARROW_DOWN"] = "ArrowDown";
    KeyboardCode["BACKSPACE"] = "Backspace";
    KeyboardCode["DELETE"] = "Delete";
})(KeyboardCode || (KeyboardCode = {}));
export var ThemeVariant;
(function (ThemeVariant) {
    ThemeVariant["DARK"] = "dark";
    ThemeVariant["LIGHT"] = "light";
})(ThemeVariant || (ThemeVariant = {}));
export var DividerSize;
(function (DividerSize) {
    DividerSize["SMALL"] = "small";
    DividerSize["MEDIUM"] = "medium";
    DividerSize["LARGE"] = "large";
})(DividerSize || (DividerSize = {}));
export var DividerOrientation;
(function (DividerOrientation) {
    DividerOrientation["HORIZONTAL"] = "horizontal";
    DividerOrientation["VERTICAL"] = "vertical";
})(DividerOrientation || (DividerOrientation = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(SortDirection || (SortDirection = {}));
export var AvatarSize;
(function (AvatarSize) {
    AvatarSize["SMALL"] = "small";
    AvatarSize["MEDIUM"] = "medium";
    AvatarSize["LARGE"] = "large";
})(AvatarSize || (AvatarSize = {}));
export var ListSize;
(function (ListSize) {
    ListSize["SMALL"] = "small";
    ListSize["MEDIUM"] = "medium";
    ListSize["LARGE"] = "large";
    ListSize["X_LARGE"] = "x-large";
})(ListSize || (ListSize = {}));
export var ExpandableListStyle;
(function (ExpandableListStyle) {
    ExpandableListStyle["ACCORDION"] = "accordion";
    ExpandableListStyle["MENU"] = "menu";
})(ExpandableListStyle || (ExpandableListStyle = {}));
export var ExpandableListButtonAlign;
(function (ExpandableListButtonAlign) {
    ExpandableListButtonAlign["RIGHT"] = "right";
    ExpandableListButtonAlign["LEFT"] = "left";
})(ExpandableListButtonAlign || (ExpandableListButtonAlign = {}));
export var LabelPosition;
(function (LabelPosition) {
    LabelPosition["RIGHT"] = "right";
    LabelPosition["LEFT"] = "left";
})(LabelPosition || (LabelPosition = {}));
export var ListDividerType;
(function (ListDividerType) {
    ListDividerType["NONE"] = "none";
    ListDividerType["HEADER"] = "header";
    ListDividerType["ELEMENT"] = "element";
})(ListDividerType || (ListDividerType = {}));
export var ListType;
(function (ListType) {
    ListType["NONE"] = "none";
    ListType["ORDERED"] = "ordered";
    ListType["UNORDERED"] = "unordered";
})(ListType || (ListType = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["WARNING"] = "warning";
    NotificationType["ERROR"] = "error";
})(NotificationType || (NotificationType = {}));
export var AlertType;
(function (AlertType) {
    AlertType["SUCCESS"] = "success";
    AlertType["WARNING"] = "warning";
    AlertType["ERROR"] = "error";
})(AlertType || (AlertType = {}));
export var Device;
(function (Device) {
    Device["MOBILE"] = "mobile";
    Device["TABLET"] = "tablet";
    Device["DESKTOP"] = "desktop";
    Device["DESKTOP_WIDE"] = "desktop-wide";
})(Device || (Device = {}));
export var ToastNotification;
(function (ToastNotification) {
    ToastNotification["DARK"] = "dark";
    ToastNotification["LIGHT"] = "light";
    ToastNotification["ACCENT"] = "accent";
    ToastNotification["ERROR"] = "error";
    ToastNotification["SUCCESS"] = "success";
    ToastNotification["WARNING"] = "warning";
})(ToastNotification || (ToastNotification = {}));
export var ToastNotificationTransition;
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
export var ToastNotificationPosition;
(function (ToastNotificationPosition) {
    ToastNotificationPosition["TOP_RIGHT"] = "top-right";
    ToastNotificationPosition["TOP_LEFT"] = "top-left";
    ToastNotificationPosition["TOP_CENTRE"] = "top-centre";
    ToastNotificationPosition["BOTTOM_RIGHT"] = "bottom-right";
    ToastNotificationPosition["BOTTOM_LEFT"] = "bottom-left";
    ToastNotificationPosition["BOTTOM_CENTRE"] = "bottom-centre";
})(ToastNotificationPosition || (ToastNotificationPosition = {}));
export var ZTableRowExpandedType;
(function (ZTableRowExpandedType) {
    ZTableRowExpandedType["EXPANDABLE"] = "expandable";
    ZTableRowExpandedType["PADDING"] = "padding";
    ZTableRowExpandedType["NONE"] = "none";
})(ZTableRowExpandedType || (ZTableRowExpandedType = {}));
export var ZAriaAlertMode;
(function (ZAriaAlertMode) {
    ZAriaAlertMode["POLITE"] = "polite";
    ZAriaAlertMode["ASSERTIVE"] = "assertive";
})(ZAriaAlertMode || (ZAriaAlertMode = {}));
export var TransitionDirection;
(function (TransitionDirection) {
    TransitionDirection["LEFT"] = "left";
    TransitionDirection["RIGHT"] = "right";
})(TransitionDirection || (TransitionDirection = {}));
export var OffCanvasVariant;
(function (OffCanvasVariant) {
    OffCanvasVariant["OVERLAY"] = "overlay";
    OffCanvasVariant["PUSHCONTENT"] = "pushcontent";
})(OffCanvasVariant || (OffCanvasVariant = {}));
export var ZFileUploadType;
(function (ZFileUploadType) {
    ZFileUploadType["DEFAULT"] = "default";
    ZFileUploadType["DRAGDROP"] = "dragdrop";
})(ZFileUploadType || (ZFileUploadType = {}));
export var ZChipType;
(function (ZChipType) {
    ZChipType["DEFAULT"] = "default";
    ZChipType["MEDIUM"] = "medium";
    ZChipType["SMALL"] = "small";
})(ZChipType || (ZChipType = {}));
export var ZSectionTitleDividerPosition;
(function (ZSectionTitleDividerPosition) {
    ZSectionTitleDividerPosition["BEFORE"] = "before";
    ZSectionTitleDividerPosition["AFTER"] = "after";
})(ZSectionTitleDividerPosition || (ZSectionTitleDividerPosition = {}));
export var ZDatePickerMode;
(function (ZDatePickerMode) {
    ZDatePickerMode["DATE"] = "date";
    ZDatePickerMode["DATE_TIME"] = "date-time";
    ZDatePickerMode["MONTHS"] = "months";
})(ZDatePickerMode || (ZDatePickerMode = {}));
export var ZDatePickerModeValue;
(function (ZDatePickerModeValue) {
    ZDatePickerModeValue[ZDatePickerModeValue["DATE"] = 401] = "DATE";
    ZDatePickerModeValue[ZDatePickerModeValue["DATE_TIME"] = 523] = "DATE_TIME";
    ZDatePickerModeValue[ZDatePickerModeValue["MONTHS"] = 288] = "MONTHS";
})(ZDatePickerModeValue || (ZDatePickerModeValue = {}));
export var ZDatePickerPosition;
(function (ZDatePickerPosition) {
    ZDatePickerPosition["TOP"] = "top";
    ZDatePickerPosition["BOTTOM"] = "bottom";
})(ZDatePickerPosition || (ZDatePickerPosition = {}));
export var ZRangePickerMode;
(function (ZRangePickerMode) {
    ZRangePickerMode["DATE"] = "date";
    ZRangePickerMode["DATE_TIME"] = "date-time";
})(ZRangePickerMode || (ZRangePickerMode = {}));
export var InfoRevealPosition;
(function (InfoRevealPosition) {
    InfoRevealPosition["TOP_RIGHT"] = "top_right";
    InfoRevealPosition["TOP_LEFT"] = "top_left";
    InfoRevealPosition["BOTTOM_RIGHT"] = "bottom_right";
    InfoRevealPosition["BOTTOM_LEFT"] = "bottom_left";
})(InfoRevealPosition || (InfoRevealPosition = {}));
export var CoverHeroVariant;
(function (CoverHeroVariant) {
    CoverHeroVariant["OVERLAY"] = "overlay";
    CoverHeroVariant["STACKED"] = "stacked";
})(CoverHeroVariant || (CoverHeroVariant = {}));
export var CoverHeroContentPosition;
(function (CoverHeroContentPosition) {
    CoverHeroContentPosition["TOP"] = "top";
    CoverHeroContentPosition["BOTTOM"] = "bottom";
})(CoverHeroContentPosition || (CoverHeroContentPosition = {}));
export var CarouselArrowsPosition;
(function (CarouselArrowsPosition) {
    CarouselArrowsPosition["OVER"] = "over";
    CarouselArrowsPosition["BOTTOM"] = "bottom";
})(CarouselArrowsPosition || (CarouselArrowsPosition = {}));
export var CarouselProgressMode;
(function (CarouselProgressMode) {
    CarouselProgressMode["DOTS"] = "dots";
    CarouselProgressMode["NUMBERS"] = "numbers";
})(CarouselProgressMode || (CarouselProgressMode = {}));
export var BreadcrumbPathStyle;
(function (BreadcrumbPathStyle) {
    BreadcrumbPathStyle["SEMIBOLD"] = "semibold";
    BreadcrumbPathStyle["UNDERLINED"] = "underlined";
})(BreadcrumbPathStyle || (BreadcrumbPathStyle = {}));
export var BreadcrumbHomepageVariant;
(function (BreadcrumbHomepageVariant) {
    BreadcrumbHomepageVariant["TEXT"] = "text";
    BreadcrumbHomepageVariant["ICON"] = "icon";
})(BreadcrumbHomepageVariant || (BreadcrumbHomepageVariant = {}));
export var VisibilityCondition;
(function (VisibilityCondition) {
    VisibilityCondition["HOVER"] = "hover";
    VisibilityCondition["ALWAYS"] = "always";
})(VisibilityCondition || (VisibilityCondition = {}));
export var BookCardVariant;
(function (BookCardVariant) {
    BookCardVariant["EXPANDED"] = "expanded";
    BookCardVariant["COMPACT"] = "compact";
    BookCardVariant["SEARCH"] = "search";
})(BookCardVariant || (BookCardVariant = {}));
export var AccordionVariant;
(function (AccordionVariant) {
    AccordionVariant["DEFAULT"] = "default";
    AccordionVariant["BACKGROUND"] = "background";
})(AccordionVariant || (AccordionVariant = {}));
//# sourceMappingURL=index.js.map
