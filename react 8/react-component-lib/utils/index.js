"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForwardRef = exports.mergeRefs = void 0;
const react_1 = __importDefault(require("react"));
// The comma in the type is to trick typescript because it things a single generic in a tsx file is jsx
const mergeRefs = (...refs) => (value) => refs.forEach((ref) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        // This is typed as readonly so we need to allow for override
        ref.current = value;
    }
});
exports.mergeRefs = mergeRefs;
const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return react_1.default.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return react_1.default.forwardRef(forwardRef);
};
exports.createForwardRef = createForwardRef;
__exportStar(require("./attachProps"), exports);
__exportStar(require("./case"), exports);
//# sourceMappingURL=index.js.map