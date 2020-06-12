'use strict';

(function (LicenseTypeEnum) {
    LicenseTypeEnum["real"] = "reale";
    LicenseTypeEnum["virtual"] = "virtuale";
    LicenseTypeEnum["trial"] = "saggio";
})(exports.LicenseTypeEnum || (exports.LicenseTypeEnum = {}));
(function (ButtonVariantEnum) {
    ButtonVariantEnum["primary"] = "primary";
    ButtonVariantEnum["secondary"] = "secondary";
    ButtonVariantEnum["tertiary"] = "tertiary";
})(exports.ButtonVariantEnum || (exports.ButtonVariantEnum = {}));
(function (ButtonTypeEnum) {
    ButtonTypeEnum["submit"] = "submit";
    ButtonTypeEnum["reset"] = "reset";
    ButtonTypeEnum["button"] = "button";
})(exports.ButtonTypeEnum || (exports.ButtonTypeEnum = {}));
(function (InputTypeEnum) {
    InputTypeEnum["text"] = "text";
    InputTypeEnum["password"] = "password";
    InputTypeEnum["number"] = "number";
    InputTypeEnum["email"] = "email";
    InputTypeEnum["textarea"] = "textarea";
    InputTypeEnum["checkbox"] = "checkbox";
    InputTypeEnum["select"] = "select";
})(exports.InputTypeEnum || (exports.InputTypeEnum = {}));
var InputStatusEnum;
(function (InputStatusEnum) {
    InputStatusEnum["success"] = "success";
    InputStatusEnum["error"] = "error";
    InputStatusEnum["warning"] = "warning";
})(InputStatusEnum || (InputStatusEnum = {}));
(function (TooltipPosition) {
    TooltipPosition["TOP"] = "TOP";
    TooltipPosition["BOTTOM"] = "BOTTOM";
    TooltipPosition["LEFT"] = "LEFT";
    TooltipPosition["RIGHT"] = "RIGHT";
    TooltipPosition["NO_ARROW"] = "NO_ARROW";
})(exports.TooltipPosition || (exports.TooltipPosition = {}));
(function (keybordKeyCodeEnum) {
    keybordKeyCodeEnum[keybordKeyCodeEnum["TAB"] = 9] = "TAB";
    keybordKeyCodeEnum[keybordKeyCodeEnum["SPACE"] = 32] = "SPACE";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ESC"] = 27] = "ESC";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ENTER"] = 13] = "ENTER";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_UP"] = 38] = "ARROW_UP";
    keybordKeyCodeEnum[keybordKeyCodeEnum["ARROW_DOWN"] = 40] = "ARROW_DOWN";
})(exports.keybordKeyCodeEnum || (exports.keybordKeyCodeEnum = {}));

function randomId() {
    return Math.random()
        .toString(36)
        .replace("0.", "");
}
function handleKeyboardSubmit(ev, callback, ...args) {
    if (ev.keyCode === exports.keybordKeyCodeEnum.ENTER ||
        ev.keyCode === exports.keybordKeyCodeEnum.SPACE) {
        ev.preventDefault();
        callback(...args);
    }
}
function getClickedElement(elem = null) {
    if (!elem)
        elem = document.activeElement;
    if (elem && elem.shadowRoot && elem.shadowRoot.activeElement) {
        elem = elem.shadowRoot.activeElement;
        return getClickedElement(elem);
    }
    return elem;
}
function getElementTree(elem, tree = []) {
    tree.push(elem);
    if (elem.parentElement) {
        elem = elem.parentElement;
        return getElementTree(elem, tree);
        // @ts-ignore
    }
    else if (elem.parentNode && elem.parentNode.host) {
        // @ts-ignore
        elem = elem.parentNode.host;
        return getElementTree(elem, tree);
    }
    return tree;
}

exports.getClickedElement = getClickedElement;
exports.getElementTree = getElementTree;
exports.handleKeyboardSubmit = handleKeyboardSubmit;
exports.randomId = randomId;
