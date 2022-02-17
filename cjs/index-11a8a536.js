'use strict';

exports.LicenseTypeEnum = void 0;
(function (LicenseTypeEnum) {
  LicenseTypeEnum["real"] = "reale";
  LicenseTypeEnum["virtual"] = "virtuale";
  LicenseTypeEnum["trial"] = "saggio";
})(exports.LicenseTypeEnum || (exports.LicenseTypeEnum = {}));
exports.CardVariants = void 0;
(function (CardVariants) {
  CardVariants["border"] = "border";
  CardVariants["shadow"] = "shadow";
  CardVariants["overlay"] = "overlay";
})(exports.CardVariants || (exports.CardVariants = {}));
exports.TabOrientationEnum = void 0;
(function (TabOrientationEnum) {
  TabOrientationEnum["horizontal"] = "horizontal";
  TabOrientationEnum["vertical"] = "vertical";
})(exports.TabOrientationEnum || (exports.TabOrientationEnum = {}));
exports.TabSizeEnum = void 0;
(function (TabSizeEnum) {
  TabSizeEnum["big"] = "big";
  TabSizeEnum["small"] = "small";
})(exports.TabSizeEnum || (exports.TabSizeEnum = {}));
exports.ButtonVariantEnum = void 0;
(function (ButtonVariantEnum) {
  ButtonVariantEnum["primary"] = "primary";
  ButtonVariantEnum["secondary"] = "secondary";
  ButtonVariantEnum["tertiary"] = "tertiary";
  ButtonVariantEnum["dark-bg"] = "dark-bg";
})(exports.ButtonVariantEnum || (exports.ButtonVariantEnum = {}));
exports.ButtonTypeEnum = void 0;
(function (ButtonTypeEnum) {
  ButtonTypeEnum["submit"] = "submit";
  ButtonTypeEnum["reset"] = "reset";
  ButtonTypeEnum["button"] = "button";
})(exports.ButtonTypeEnum || (exports.ButtonTypeEnum = {}));
exports.ButtonSizeEnum = void 0;
(function (ButtonSizeEnum) {
  ButtonSizeEnum["big"] = "big";
  ButtonSizeEnum["small"] = "small";
  ButtonSizeEnum["x-small"] = "x-small";
})(exports.ButtonSizeEnum || (exports.ButtonSizeEnum = {}));
exports.InputTypeEnum = void 0;
(function (InputTypeEnum) {
  InputTypeEnum["text"] = "text";
  InputTypeEnum["password"] = "password";
  InputTypeEnum["number"] = "number";
  InputTypeEnum["email"] = "email";
  InputTypeEnum["textarea"] = "textarea";
  InputTypeEnum["checkbox"] = "checkbox";
  InputTypeEnum["radio"] = "radio";
  InputTypeEnum["select"] = "select";
})(exports.InputTypeEnum || (exports.InputTypeEnum = {}));
exports.InputStatusEnum = void 0;
(function (InputStatusEnum) {
  InputStatusEnum["success"] = "success";
  InputStatusEnum["error"] = "error";
  InputStatusEnum["warning"] = "warning";
  InputStatusEnum["selecting"] = "selecting";
})(exports.InputStatusEnum || (exports.InputStatusEnum = {}));
exports.TooltipPosition = void 0;
(function (TooltipPosition) {
  TooltipPosition["AUTO"] = "auto";
  TooltipPosition["TOP"] = "top";
  TooltipPosition["RIGHT"] = "right";
  TooltipPosition["BOTTOM"] = "bottom";
  TooltipPosition["LEFT"] = "left";
  TooltipPosition["TOP_RIGHT"] = "top_right";
  TooltipPosition["TOP_LEFT"] = "top_left";
  TooltipPosition["BOTTOM_RIGHT"] = "bottom_right";
  TooltipPosition["BOTTOM_LEFT"] = "bottom_left";
})(exports.TooltipPosition || (exports.TooltipPosition = {}));
exports.keybordKeyCodeEnum = void 0;
(function (keybordKeyCodeEnum) {
  keybordKeyCodeEnum[keybordKeyCodeEnum["TAB"] = 9] = "TAB";
  keybordKeyCodeEnum[keybordKeyCodeEnum["SPACE"] = 32] = "SPACE";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ESC"] = 27] = "ESC";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ENTER"] = 13] = "ENTER";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_UP"] = 38] = "ARROW_UP";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_DOWN"] = 40] = "ARROW_DOWN";
  keybordKeyCodeEnum[keybordKeyCodeEnum["BACKSPACE"] = 8] = "BACKSPACE";
  keybordKeyCodeEnum[keybordKeyCodeEnum["DELETE"] = 46] = "DELETE";
})(exports.keybordKeyCodeEnum || (exports.keybordKeyCodeEnum = {}));
exports.KeyboardKeys = void 0;
(function (KeyboardKeys) {
  KeyboardKeys["ARROW_DOWN"] = "ArrowDown";
  KeyboardKeys["ARROW_UP"] = "ArrowUp";
  KeyboardKeys["ENTER"] = "Enter";
  KeyboardKeys["ESC"] = "Escape";
  KeyboardKeys["SPACE"] = "Space";
})(exports.KeyboardKeys || (exports.KeyboardKeys = {}));
exports.ThemeVariant = void 0;
(function (ThemeVariant) {
  ThemeVariant["dark"] = "dark";
  ThemeVariant["light"] = "light";
})(exports.ThemeVariant || (exports.ThemeVariant = {}));
exports.PopoverPosition = void 0;
(function (PopoverPosition) {
  PopoverPosition["after-down"] = "after-down";
  PopoverPosition["after-center"] = "after-center";
  PopoverPosition["after-up"] = "after-up";
  PopoverPosition["below-right"] = "below-right";
  PopoverPosition["below-center"] = "below-center";
  PopoverPosition["below-left"] = "below-left";
  PopoverPosition["before-down"] = "before-down";
  PopoverPosition["before-center"] = "before-center";
  PopoverPosition["before-up"] = "before-up";
  PopoverPosition["above-right"] = "above-right";
  PopoverPosition["above-center"] = "above-center";
  PopoverPosition["above-left"] = "above-left";
})(exports.PopoverPosition || (exports.PopoverPosition = {}));
exports.PopoverBorderRadius = void 0;
(function (PopoverBorderRadius) {
  PopoverBorderRadius["none"] = "none";
  PopoverBorderRadius["small"] = "small";
  PopoverBorderRadius["medium"] = "medium";
})(exports.PopoverBorderRadius || (exports.PopoverBorderRadius = {}));
exports.PopoverShadow = void 0;
(function (PopoverShadow) {
  PopoverShadow["shadow-1"] = "shadow-1";
  PopoverShadow["shadow-2"] = "shadow-2";
  PopoverShadow["shadow-3"] = "shadow-3";
  PopoverShadow["shadow-4"] = "shadow-4";
  PopoverShadow["shadow-6"] = "shadow-6";
  PopoverShadow["shadow-8"] = "shadow-8";
  PopoverShadow["shadow-12"] = "shadow-12";
  PopoverShadow["shadow-16"] = "shadow-16";
  PopoverShadow["shadow-24"] = "shadow-24";
})(exports.PopoverShadow || (exports.PopoverShadow = {}));
exports.DividerSize = void 0;
(function (DividerSize) {
  DividerSize["small"] = "small";
  DividerSize["medium"] = "medium";
  DividerSize["large"] = "large";
})(exports.DividerSize || (exports.DividerSize = {}));
exports.DividerOrientation = void 0;
(function (DividerOrientation) {
  DividerOrientation["horizontal"] = "horizontal";
  DividerOrientation["vertical"] = "vertical";
})(exports.DividerOrientation || (exports.DividerOrientation = {}));
exports.TableHeaderSize = void 0;
(function (TableHeaderSize) {
  TableHeaderSize["x-small"] = "x-small";
  TableHeaderSize["small"] = "small";
  TableHeaderSize["medium"] = "medium";
  TableHeaderSize["large"] = "large";
  TableHeaderSize["special"] = "special";
})(exports.TableHeaderSize || (exports.TableHeaderSize = {}));
exports.SortDirectionEnum = void 0;
(function (SortDirectionEnum) {
  SortDirectionEnum["asc"] = "asc";
  SortDirectionEnum["desc"] = "desc";
  SortDirectionEnum["none"] = "none";
})(exports.SortDirectionEnum || (exports.SortDirectionEnum = {}));
exports.AvatarSize = void 0;
(function (AvatarSize) {
  AvatarSize["small"] = "small";
  AvatarSize["medium"] = "medium";
  AvatarSize["large"] = "large";
})(exports.AvatarSize || (exports.AvatarSize = {}));
exports.StatusTagStatus = void 0;
(function (StatusTagStatus) {
  StatusTagStatus["warning"] = "warning";
  StatusTagStatus["error"] = "error";
  StatusTagStatus["success"] = "success";
  StatusTagStatus["neutral"] = "neutral";
  StatusTagStatus["default"] = "default";
})(exports.StatusTagStatus || (exports.StatusTagStatus = {}));
exports.ListSize = void 0;
(function (ListSize) {
  ListSize["small"] = "small";
  ListSize["medium"] = "medium";
  ListSize["large"] = "large";
  ListSize["x-large"] = "x-large";
})(exports.ListSize || (exports.ListSize = {}));
exports.ExpandableListStyle = void 0;
(function (ExpandableListStyle) {
  ExpandableListStyle["accordion"] = "accordion";
  ExpandableListStyle["menu"] = "menu";
})(exports.ExpandableListStyle || (exports.ExpandableListStyle = {}));
exports.ExpandableListButtonAlign = void 0;
(function (ExpandableListButtonAlign) {
  ExpandableListButtonAlign["right"] = "right";
  ExpandableListButtonAlign["left"] = "left";
})(exports.ExpandableListButtonAlign || (exports.ExpandableListButtonAlign = {}));
exports.ListDividerType = void 0;
(function (ListDividerType) {
  ListDividerType["none"] = "none";
  ListDividerType["header"] = "header";
  ListDividerType["element"] = "element";
})(exports.ListDividerType || (exports.ListDividerType = {}));
exports.NotificationType = void 0;
(function (NotificationType) {
  NotificationType["success"] = "success";
  NotificationType["warning"] = "warning";
  NotificationType["error"] = "error";
})(exports.NotificationType || (exports.NotificationType = {}));
exports.AlertTypesEnum = void 0;
(function (AlertTypesEnum) {
  AlertTypesEnum["success"] = "success";
  AlertTypesEnum["warning"] = "warning";
  AlertTypesEnum["error"] = "error";
})(exports.AlertTypesEnum || (exports.AlertTypesEnum = {}));
exports.DeviceEnum = void 0;
(function (DeviceEnum) {
  DeviceEnum["mobile"] = "mobile";
  DeviceEnum["tablet"] = "tablet";
  DeviceEnum["desktop"] = "desktop";
})(exports.DeviceEnum || (exports.DeviceEnum = {}));
exports.PocketStatusEnum = void 0;
(function (PocketStatusEnum) {
  PocketStatusEnum["preview"] = "preview";
  PocketStatusEnum["open"] = "open";
  PocketStatusEnum["closed"] = "closed";
})(exports.PocketStatusEnum || (exports.PocketStatusEnum = {}));
var ToastNotificationEnum;
(function (ToastNotificationEnum) {
  ToastNotificationEnum["dark"] = "dark";
  ToastNotificationEnum["light"] = "light";
  ToastNotificationEnum["accent"] = "accent";
  ToastNotificationEnum["error"] = "error";
  ToastNotificationEnum["success"] = "success";
  ToastNotificationEnum["warning"] = "warning";
})(ToastNotificationEnum || (ToastNotificationEnum = {}));
exports.ToastNotificationTransitionsEnum = void 0;
(function (ToastNotificationTransitionsEnum) {
  ToastNotificationTransitionsEnum["slideInLeft"] = "slide-in-left";
  ToastNotificationTransitionsEnum["slideInRight"] = "slide-in-right";
  ToastNotificationTransitionsEnum["slideInDown"] = "slide-in-down";
  ToastNotificationTransitionsEnum["slideInUp"] = "slide-in-up";
  ToastNotificationTransitionsEnum["slideOutLeft"] = "slide-out-left";
  ToastNotificationTransitionsEnum["slideOutRight"] = "slide-out-right";
  ToastNotificationTransitionsEnum["slideOutDown"] = "slide-out-down";
  ToastNotificationTransitionsEnum["slideOutUp"] = "slide-out-up";
})(exports.ToastNotificationTransitionsEnum || (exports.ToastNotificationTransitionsEnum = {}));
exports.ToastNotificationPositionsEnum = void 0;
(function (ToastNotificationPositionsEnum) {
  ToastNotificationPositionsEnum["topRight"] = "top-right";
  ToastNotificationPositionsEnum["topLeft"] = "top-left";
  ToastNotificationPositionsEnum["topCentre"] = "top-centre";
  ToastNotificationPositionsEnum["bottomRight"] = "bottom-right";
  ToastNotificationPositionsEnum["bottomLeft"] = "bottom-left";
  ToastNotificationPositionsEnum["bottomCentre"] = "bottom-centre";
})(exports.ToastNotificationPositionsEnum || (exports.ToastNotificationPositionsEnum = {}));
exports.ZRegistroTableRowExpandedType = void 0;
(function (ZRegistroTableRowExpandedType) {
  ZRegistroTableRowExpandedType["expandable"] = "expandable";
  ZRegistroTableRowExpandedType["padding"] = "padding";
  ZRegistroTableRowExpandedType["none"] = "none";
})(exports.ZRegistroTableRowExpandedType || (exports.ZRegistroTableRowExpandedType = {}));
exports.ZAriaAlertMode = void 0;
(function (ZAriaAlertMode) {
  ZAriaAlertMode["polite"] = "polite";
  ZAriaAlertMode["assertive"] = "assertive";
})(exports.ZAriaAlertMode || (exports.ZAriaAlertMode = {}));
