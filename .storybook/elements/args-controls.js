/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import { PureArgsTable } from "@storybook/blocks";
import { Badge, Spaced } from "@storybook/components";
import { includeConditionalArg } from "@storybook/csf";
import { useArgTypes, useArgs, useGlobals, useParameter, useStorybookState } from "@storybook/manager-api";
import { styled } from "@storybook/theming";
import React, { useEffect, useState } from "react";
export const ADDON_ID = "args-controls";
export const PARAM_KEY = "addon-args-controls";
/**
 * Filter argTypes to only include those listed in the story args.
 */
const getFilteredArgTypes = () => {
    const argTypes = useArgTypes();
    const args = useArgs()[0];
    return Object.entries(argTypes).reduce((acc, [key, argType]) => {
        var _a, _b, _c;
        if (key in args) {
            if (argType.table && !argType.table.category) {
                // set a category for the "auxiliary" args that are not part of the component but are used for demo purposes
                argType.table.category = "Story controls";
            }
            if (((_a = argType.table) === null || _a === void 0 ? void 0 : _a.category) === "css custom properties" && ((_b = argType.control) === null || _b === void 0 ? void 0 : _b["type"]) === "object") {
                // fix control type for css custom properties. set text instead of the `object` automatically inferred by storybook
                argType.control = Object.assign((_c = argType.control) !== null && _c !== void 0 ? _c : {}, { type: "text" });
            }
            acc[key] = argType;
        }
        return acc;
    }, {});
};
/**
 * Custom title for the panel. Include controls count badge.
 */
export const ArgsControlsTitle = (() => {
    const args = getFilteredArgTypes();
    // TODO: sometimes the controlsCount is not accurate, because the ArgsTable use different condition to filter the args, especially when the args are conditional
    const controlsCount = Object.values(args).filter((arg) => { var _a; return (arg === null || arg === void 0 ? void 0 : arg.control) && !((_a = arg.table) === null || _a === void 0 ? void 0 : _a.disable) && includeConditionalArg(arg, args, {}); }).length;
    return (React.createElement("div", null, React.createElement(Spaced, { col: 1 }, React.createElement("span", { style: { display: "inline-block", verticalAlign: "middle" } }, "Controls"), controlsCount === 0 ? "" : React.createElement(Badge, { status: "neutral" }, controlsCount))));
});
const AddonWrapper = styled.div({
    display: "grid",
    gridTemplateRows: "1fr 39px",
    height: "100%",
    maxHeight: "100vh",
    overflowY: "auto",
});
/**
 * Custom controls panel that only shows controls for the args of the current Story.
 */
export const ArgsControls = (() => {
    const [isLoading, setIsLoading] = useState(true);
    const [args, updateArgs, resetArgs] = useArgs();
    const [globals] = useGlobals();
    const { expanded, sort, presetColors } = useParameter("args-controls", {});
    const { path, previewInitialized } = useStorybookState();
    const rows = getFilteredArgTypes();
    // If the story is prepared, then show the controls table
    // and reset the loading states
    useEffect(() => {
        if (previewInitialized) {
            setIsLoading(false);
        }
    }, [previewInitialized]);
    const hasControls = Object.values(rows).some((arg) => arg === null || arg === void 0 ? void 0 : arg.control);
    const withPresetColors = Object.entries(rows).reduce((acc, [key, arg]) => {
        const control = arg === null || arg === void 0 ? void 0 : arg.control;
        if (typeof control !== "object" || (control === null || control === void 0 ? void 0 : control.type) !== "color" || (control === null || control === void 0 ? void 0 : control.presetColors)) {
            acc[key] = arg;
        }
        else
            acc[key] = Object.assign(Object.assign({}, arg), { control: Object.assign(Object.assign({}, control), { presetColors }) });
        return acc;
    }, {});
    return (React.createElement(AddonWrapper, null, React.createElement(PureArgsTable, { key: path, compact: !expanded && hasControls, rows: withPresetColors, args: args, globals: globals, updateArgs: updateArgs, resetArgs: resetArgs, inAddonPanel: true, sort: sort, isLoading: isLoading })));
});
//# sourceMappingURL=args-controls.js.map
