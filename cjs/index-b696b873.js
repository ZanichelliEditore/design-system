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
  TooltipPosition["TOP"] = "TOP";
  TooltipPosition["BOTTOM"] = "BOTTOM";
  TooltipPosition["LEFT"] = "LEFT";
  TooltipPosition["RIGHT"] = "RIGHT";
  TooltipPosition["NO_ARROW"] = "NO_ARROW";
  TooltipPosition["TOP_LEFT"] = "TOP_LEFT";
  TooltipPosition["TOP_RIGHT"] = "TOP_RIGHT";
  TooltipPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
  TooltipPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
})(exports.TooltipPosition || (exports.TooltipPosition = {}));
exports.keybordKeyCodeEnum = void 0;
(function (keybordKeyCodeEnum) {
  keybordKeyCodeEnum[keybordKeyCodeEnum["TAB"] = 9] = "TAB";
  keybordKeyCodeEnum[keybordKeyCodeEnum["SPACE"] = 32] = "SPACE";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ESC"] = 27] = "ESC";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ENTER"] = 13] = "ENTER";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_UP"] = 38] = "ARROW_UP";
  keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_DOWN"] = 40] = "ARROW_DOWN";
})(exports.keybordKeyCodeEnum || (exports.keybordKeyCodeEnum = {}));
exports.KeyboardKeys = void 0;
(function (KeyboardKeys) {
  KeyboardKeys["ESC"] = "Escape";
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
exports.SortingOrientation = void 0;
(function (SortingOrientation) {
  SortingOrientation["asc"] = "asc";
  SortingOrientation["desc"] = "desc";
  SortingOrientation["none"] = "none";
})(exports.SortingOrientation || (exports.SortingOrientation = {}));
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
exports.NotificationType = void 0;
(function (NotificationType) {
  NotificationType["success"] = "success";
  NotificationType["warning"] = "warning";
  NotificationType["error"] = "error";
})(exports.NotificationType || (exports.NotificationType = {}));
