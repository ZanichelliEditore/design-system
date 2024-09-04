'use strict';

exports.LicenseType = void 0;
(function (LicenseType) {
    LicenseType["REAL"] = "reale";
    LicenseType["VIRTUAL"] = "virtuale";
    LicenseType["TRIAL"] = "saggio";
    LicenseType["TEMP"] = "reale_temp";
})(exports.LicenseType || (exports.LicenseType = {}));
exports.CardVariant = void 0;
(function (CardVariant) {
    CardVariant["BORDER"] = "border";
    CardVariant["SHADOW"] = "shadow";
    CardVariant["OVERLAY"] = "overlay";
    CardVariant["TEXT"] = "text";
})(exports.CardVariant || (exports.CardVariant = {}));
exports.NavigationTabsOrientation = void 0;
(function (NavigationTabsOrientation) {
    NavigationTabsOrientation["HORIZONTAL"] = "horizontal";
    NavigationTabsOrientation["VERTICAL"] = "vertical";
})(exports.NavigationTabsOrientation || (exports.NavigationTabsOrientation = {}));
exports.NavigationTabsSize = void 0;
(function (NavigationTabsSize) {
    NavigationTabsSize["BIG"] = "big";
    NavigationTabsSize["SMALL"] = "small";
})(exports.NavigationTabsSize || (exports.NavigationTabsSize = {}));
exports.NavigationTabsKeyboardEvents = void 0;
(function (NavigationTabsKeyboardEvents) {
    NavigationTabsKeyboardEvents["LEFT"] = "ArrowLeft";
    NavigationTabsKeyboardEvents["RIGHT"] = "ArrowRight";
    NavigationTabsKeyboardEvents["UP"] = "ArrowUp";
    NavigationTabsKeyboardEvents["DOWN"] = "ArrowDown";
})(exports.NavigationTabsKeyboardEvents || (exports.NavigationTabsKeyboardEvents = {}));
exports.ButtonVariant = void 0;
(function (ButtonVariant) {
    ButtonVariant["PRIMARY"] = "primary";
    ButtonVariant["SECONDARY"] = "secondary";
    ButtonVariant["TERTIARY"] = "tertiary";
})(exports.ButtonVariant || (exports.ButtonVariant = {}));
exports.ButtonType = void 0;
(function (ButtonType) {
    ButtonType["SUBMIT"] = "submit";
    ButtonType["RESET"] = "reset";
    ButtonType["BUTTON"] = "button";
})(exports.ButtonType || (exports.ButtonType = {}));
/**
 * @deprecated Use ControlSize instead
 */
exports.ButtonSize = void 0;
(function (ButtonSize) {
    ButtonSize["BIG"] = "big";
    ButtonSize["SMALL"] = "small";
    ButtonSize["X_SMALL"] = "x-small";
})(exports.ButtonSize || (exports.ButtonSize = {}));
exports.ControlSize = void 0;
(function (ControlSize) {
    ControlSize["BIG"] = "big";
    ControlSize["SMALL"] = "small";
    ControlSize["X_SMALL"] = "x-small";
})(exports.ControlSize || (exports.ControlSize = {}));
exports.InputType = void 0;
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
})(exports.InputType || (exports.InputType = {}));
exports.InputStatus = void 0;
(function (InputStatus) {
    InputStatus["SUCCESS"] = "success";
    InputStatus["ERROR"] = "error";
    InputStatus["WARNING"] = "warning";
})(exports.InputStatus || (exports.InputStatus = {}));
exports.PopoverPosition = void 0;
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
})(exports.PopoverPosition || (exports.PopoverPosition = {}));
exports.KeyboardKeyCode = void 0;
(function (KeyboardKeyCode) {
    KeyboardKeyCode[KeyboardKeyCode["TAB"] = 9] = "TAB";
    KeyboardKeyCode[KeyboardKeyCode["SPACE"] = 32] = "SPACE";
    KeyboardKeyCode[KeyboardKeyCode["ESC"] = 27] = "ESC";
    KeyboardKeyCode[KeyboardKeyCode["ENTER"] = 13] = "ENTER";
    KeyboardKeyCode[KeyboardKeyCode["ARROW_UP"] = 38] = "ARROW_UP";
    KeyboardKeyCode[KeyboardKeyCode["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    KeyboardKeyCode[KeyboardKeyCode["BACKSPACE"] = 8] = "BACKSPACE";
    KeyboardKeyCode[KeyboardKeyCode["DELETE"] = 46] = "DELETE";
})(exports.KeyboardKeyCode || (exports.KeyboardKeyCode = {}));
exports.KeyboardCode = void 0;
(function (KeyboardCode) {
    KeyboardCode["TAB"] = "Tab";
    KeyboardCode["SPACE"] = "Space";
    KeyboardCode["ESC"] = "Escape";
    KeyboardCode["ENTER"] = "Enter";
    KeyboardCode["ARROW_UP"] = "ArrowUp";
    KeyboardCode["ARROW_DOWN"] = "ArrowDown";
    KeyboardCode["BACKSPACE"] = "Backspace";
    KeyboardCode["DELETE"] = "Delete";
})(exports.KeyboardCode || (exports.KeyboardCode = {}));
exports.ThemeVariant = void 0;
(function (ThemeVariant) {
    ThemeVariant["DARK"] = "dark";
    ThemeVariant["LIGHT"] = "light";
})(exports.ThemeVariant || (exports.ThemeVariant = {}));
exports.DividerSize = void 0;
(function (DividerSize) {
    DividerSize["SMALL"] = "small";
    DividerSize["MEDIUM"] = "medium";
    DividerSize["LARGE"] = "large";
})(exports.DividerSize || (exports.DividerSize = {}));
exports.DividerOrientation = void 0;
(function (DividerOrientation) {
    DividerOrientation["HORIZONTAL"] = "horizontal";
    DividerOrientation["VERTICAL"] = "vertical";
})(exports.DividerOrientation || (exports.DividerOrientation = {}));
exports.SortDirection = void 0;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(exports.SortDirection || (exports.SortDirection = {}));
exports.AvatarSize = void 0;
(function (AvatarSize) {
    AvatarSize["SMALL"] = "small";
    AvatarSize["MEDIUM"] = "medium";
    AvatarSize["LARGE"] = "large";
})(exports.AvatarSize || (exports.AvatarSize = {}));
exports.ListSize = void 0;
(function (ListSize) {
    ListSize["SMALL"] = "small";
    ListSize["MEDIUM"] = "medium";
    ListSize["LARGE"] = "large";
    ListSize["X_LARGE"] = "x-large";
})(exports.ListSize || (exports.ListSize = {}));
exports.ExpandableListStyle = void 0;
(function (ExpandableListStyle) {
    ExpandableListStyle["ACCORDION"] = "accordion";
    ExpandableListStyle["MENU"] = "menu";
})(exports.ExpandableListStyle || (exports.ExpandableListStyle = {}));
exports.ExpandableListButtonAlign = void 0;
(function (ExpandableListButtonAlign) {
    ExpandableListButtonAlign["RIGHT"] = "right";
    ExpandableListButtonAlign["LEFT"] = "left";
})(exports.ExpandableListButtonAlign || (exports.ExpandableListButtonAlign = {}));
exports.LabelPosition = void 0;
(function (LabelPosition) {
    LabelPosition["RIGHT"] = "right";
    LabelPosition["LEFT"] = "left";
})(exports.LabelPosition || (exports.LabelPosition = {}));
exports.ListDividerType = void 0;
(function (ListDividerType) {
    ListDividerType["NONE"] = "none";
    ListDividerType["HEADER"] = "header";
    ListDividerType["ELEMENT"] = "element";
})(exports.ListDividerType || (exports.ListDividerType = {}));
exports.ListType = void 0;
(function (ListType) {
    ListType["NONE"] = "none";
    ListType["ORDERED"] = "ordered";
    ListType["UNORDERED"] = "unordered";
})(exports.ListType || (exports.ListType = {}));
exports.NotificationType = void 0;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["WARNING"] = "warning";
    NotificationType["ERROR"] = "error";
})(exports.NotificationType || (exports.NotificationType = {}));
exports.AlertType = void 0;
(function (AlertType) {
    AlertType["SUCCESS"] = "success";
    AlertType["WARNING"] = "warning";
    AlertType["ERROR"] = "error";
})(exports.AlertType || (exports.AlertType = {}));
exports.Device = void 0;
(function (Device) {
    Device["MOBILE"] = "mobile";
    Device["TABLET"] = "tablet";
    Device["DESKTOP"] = "desktop";
    Device["DESKTOP_WIDE"] = "desktop-wide";
})(exports.Device || (exports.Device = {}));
exports.ToastNotification = void 0;
(function (ToastNotification) {
    ToastNotification["DARK"] = "dark";
    ToastNotification["LIGHT"] = "light";
    ToastNotification["ACCENT"] = "accent";
    ToastNotification["ERROR"] = "error";
    ToastNotification["SUCCESS"] = "success";
    ToastNotification["WARNING"] = "warning";
})(exports.ToastNotification || (exports.ToastNotification = {}));
exports.ToastNotificationTransition = void 0;
(function (ToastNotificationTransition) {
    ToastNotificationTransition["SLIDE_IN_LEFT"] = "slide-in-left";
    ToastNotificationTransition["SLIDE_IN_RIGHT"] = "slide-in-right";
    ToastNotificationTransition["SLIDE_IN_DOWN"] = "slide-in-down";
    ToastNotificationTransition["SLIDE_IN_UP"] = "slide-in-up";
    ToastNotificationTransition["SLIDE_OUT_LEFT"] = "slide-out-left";
    ToastNotificationTransition["SLIDE_OUT_RIGHT"] = "slide-out-right";
    ToastNotificationTransition["SLIDE_OUT_DOWN"] = "slide-out-down";
    ToastNotificationTransition["SLIDE_OUT_UP"] = "slide-out-up";
})(exports.ToastNotificationTransition || (exports.ToastNotificationTransition = {}));
exports.ToastNotificationPosition = void 0;
(function (ToastNotificationPosition) {
    ToastNotificationPosition["TOP_RIGHT"] = "top-right";
    ToastNotificationPosition["TOP_LEFT"] = "top-left";
    ToastNotificationPosition["TOP_CENTRE"] = "top-centre";
    ToastNotificationPosition["BOTTOM_RIGHT"] = "bottom-right";
    ToastNotificationPosition["BOTTOM_LEFT"] = "bottom-left";
    ToastNotificationPosition["BOTTOM_CENTRE"] = "bottom-centre";
})(exports.ToastNotificationPosition || (exports.ToastNotificationPosition = {}));
exports.ZTableRowExpandedType = void 0;
(function (ZTableRowExpandedType) {
    ZTableRowExpandedType["EXPANDABLE"] = "expandable";
    ZTableRowExpandedType["PADDING"] = "padding";
    ZTableRowExpandedType["NONE"] = "none";
})(exports.ZTableRowExpandedType || (exports.ZTableRowExpandedType = {}));
exports.ZAriaAlertMode = void 0;
(function (ZAriaAlertMode) {
    ZAriaAlertMode["POLITE"] = "polite";
    ZAriaAlertMode["ASSERTIVE"] = "assertive";
})(exports.ZAriaAlertMode || (exports.ZAriaAlertMode = {}));
exports.TransitionDirection = void 0;
(function (TransitionDirection) {
    TransitionDirection["LEFT"] = "left";
    TransitionDirection["RIGHT"] = "right";
})(exports.TransitionDirection || (exports.TransitionDirection = {}));
exports.OffCanvasVariant = void 0;
(function (OffCanvasVariant) {
    OffCanvasVariant["OVERLAY"] = "overlay";
    OffCanvasVariant["PUSHCONTENT"] = "pushcontent";
})(exports.OffCanvasVariant || (exports.OffCanvasVariant = {}));
exports.ZFileUploadType = void 0;
(function (ZFileUploadType) {
    ZFileUploadType["DEFAULT"] = "default";
    ZFileUploadType["DRAGDROP"] = "dragdrop";
})(exports.ZFileUploadType || (exports.ZFileUploadType = {}));
exports.ZChipType = void 0;
(function (ZChipType) {
    ZChipType["DEFAULT"] = "default";
    ZChipType["MEDIUM"] = "medium";
    ZChipType["SMALL"] = "small";
})(exports.ZChipType || (exports.ZChipType = {}));
exports.ZSectionTitleDividerPosition = void 0;
(function (ZSectionTitleDividerPosition) {
    ZSectionTitleDividerPosition["BEFORE"] = "before";
    ZSectionTitleDividerPosition["AFTER"] = "after";
})(exports.ZSectionTitleDividerPosition || (exports.ZSectionTitleDividerPosition = {}));
exports.ZDatePickerMode = void 0;
(function (ZDatePickerMode) {
    ZDatePickerMode["DATE"] = "date";
    ZDatePickerMode["DATE_TIME"] = "date-time";
    ZDatePickerMode["MONTHS"] = "months";
})(exports.ZDatePickerMode || (exports.ZDatePickerMode = {}));
exports.ZDatePickerModeValue = void 0;
(function (ZDatePickerModeValue) {
    ZDatePickerModeValue[ZDatePickerModeValue["DATE"] = 401] = "DATE";
    ZDatePickerModeValue[ZDatePickerModeValue["DATE_TIME"] = 523] = "DATE_TIME";
    ZDatePickerModeValue[ZDatePickerModeValue["MONTHS"] = 288] = "MONTHS";
})(exports.ZDatePickerModeValue || (exports.ZDatePickerModeValue = {}));
exports.ZDatePickerPosition = void 0;
(function (ZDatePickerPosition) {
    ZDatePickerPosition["TOP"] = "top";
    ZDatePickerPosition["BOTTOM"] = "bottom";
})(exports.ZDatePickerPosition || (exports.ZDatePickerPosition = {}));
exports.ZRangePickerMode = void 0;
(function (ZRangePickerMode) {
    ZRangePickerMode["DATE"] = "date";
    ZRangePickerMode["DATE_TIME"] = "date-time";
})(exports.ZRangePickerMode || (exports.ZRangePickerMode = {}));
exports.InfoRevealPosition = void 0;
(function (InfoRevealPosition) {
    InfoRevealPosition["TOP_RIGHT"] = "top_right";
    InfoRevealPosition["TOP_LEFT"] = "top_left";
    InfoRevealPosition["BOTTOM_RIGHT"] = "bottom_right";
    InfoRevealPosition["BOTTOM_LEFT"] = "bottom_left";
})(exports.InfoRevealPosition || (exports.InfoRevealPosition = {}));
exports.CoverHeroVariant = void 0;
(function (CoverHeroVariant) {
    CoverHeroVariant["OVERLAY"] = "overlay";
    CoverHeroVariant["STACKED"] = "stacked";
})(exports.CoverHeroVariant || (exports.CoverHeroVariant = {}));
exports.CoverHeroContentPosition = void 0;
(function (CoverHeroContentPosition) {
    CoverHeroContentPosition["TOP"] = "top";
    CoverHeroContentPosition["BOTTOM"] = "bottom";
})(exports.CoverHeroContentPosition || (exports.CoverHeroContentPosition = {}));
exports.CarouselArrowsPosition = void 0;
(function (CarouselArrowsPosition) {
    CarouselArrowsPosition["OVER"] = "over";
    CarouselArrowsPosition["BOTTOM"] = "bottom";
})(exports.CarouselArrowsPosition || (exports.CarouselArrowsPosition = {}));
exports.CarouselProgressMode = void 0;
(function (CarouselProgressMode) {
    CarouselProgressMode["DOTS"] = "dots";
    CarouselProgressMode["NUMBERS"] = "numbers";
})(exports.CarouselProgressMode || (exports.CarouselProgressMode = {}));
exports.BreadcrumbPathStyle = void 0;
(function (BreadcrumbPathStyle) {
    BreadcrumbPathStyle["SEMIBOLD"] = "semibold";
    BreadcrumbPathStyle["UNDERLINED"] = "underlined";
})(exports.BreadcrumbPathStyle || (exports.BreadcrumbPathStyle = {}));
exports.BreadcrumbHomepageVariant = void 0;
(function (BreadcrumbHomepageVariant) {
    BreadcrumbHomepageVariant["TEXT"] = "text";
    BreadcrumbHomepageVariant["ICON"] = "icon";
})(exports.BreadcrumbHomepageVariant || (exports.BreadcrumbHomepageVariant = {}));
exports.VisibilityCondition = void 0;
(function (VisibilityCondition) {
    VisibilityCondition["HOVER"] = "hover";
    VisibilityCondition["ALWAYS"] = "always";
})(exports.VisibilityCondition || (exports.VisibilityCondition = {}));
exports.BookCardVariant = void 0;
(function (BookCardVariant) {
    BookCardVariant["EXPANDED"] = "expanded";
    BookCardVariant["COMPACT"] = "compact";
    BookCardVariant["SEARCH"] = "search";
})(exports.BookCardVariant || (exports.BookCardVariant = {}));
exports.AccordionVariant = void 0;
(function (AccordionVariant) {
    AccordionVariant["DEFAULT"] = "default";
    AccordionVariant["BACKGROUND"] = "background";
})(exports.AccordionVariant || (exports.AccordionVariant = {}));

//# sourceMappingURL=index-e3835c94.js.map