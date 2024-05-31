/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import {PresetColor, PureArgsTable, SortType} from "@storybook/blocks";
import {Badge, Spaced} from "@storybook/components";
import {includeConditionalArg} from "@storybook/csf";
import {useArgTypes, useArgs, useGlobals, useParameter, useStorybookState} from "@storybook/manager-api";
import {styled} from "@storybook/theming";
import {type ArgTypes} from "@storybook/web-components";
import React, {useEffect, useState} from "react";

export const ADDON_ID = "args-controls";
export const PARAM_KEY = "addon-args-controls";

interface ControlsParameters {
  sort?: SortType;
  expanded?: boolean;
  presetColors?: PresetColor[];
}

/**
 * Filter argTypes to only include those listed in the story args.
 */
const getFilteredArgTypes = () => {
  const argTypes = useArgTypes();
  const args = useArgs()[0];

  return Object.entries(argTypes).reduce((acc, [key, arg]) => {
    if (key in args) {
      if (arg.table && !arg.table.category) {
        // set a category for the "auxiliary" args that are not part of the component but are used for demo purposes
        arg.table.category = "Story controls";
      }

      if (arg.table?.category === "css custom properties") {
        // fix control type for css custom properties. set text instead of the `object` automatically inferred by storybook
        arg.control = Object.assign(arg.control ?? {}, {type: "text"});
      }
      acc[key] = arg;
    }

    return acc;
  }, {} as ArgTypes);
};

/**
 * Custom title for the panel. Include controls count badge.
 */
export const ArgsControlsTitle = (() => {
  const args = getFilteredArgTypes();
  // TODO: sometimes the controlsCount is not accurate, because the ArgsTable use different condition to filter the args, especially when the args are conditional
  const controlsCount = Object.values(args).filter(
    (arg) => arg?.control && !arg.table?.disable && includeConditionalArg(arg, args, {})
  ).length;

  return (
    <div>
      <Spaced col={1}>
        <span style={{display: "inline-block", verticalAlign: "middle"}}>Controls</span>
        {controlsCount === 0 ? "" : <Badge status="neutral">{controlsCount}</Badge>}
      </Spaced>
    </div>
  );
}) satisfies React.FC;

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
  const {expanded, sort, presetColors} = useParameter<ControlsParameters>("args-controls", {});
  const {path, previewInitialized} = useStorybookState();
  const rows = getFilteredArgTypes();

  // If the story is prepared, then show the controls table
  // and reset the loading states
  useEffect(() => {
    if (previewInitialized) {
      setIsLoading(false);
    }
  }, [previewInitialized]);

  const hasControls = Object.values(rows).some((arg) => arg?.control);

  const withPresetColors = Object.entries(rows).reduce((acc, [key, arg]) => {
    const control = arg?.control;
    if (typeof control !== "object" || control?.type !== "color" || control?.presetColors) {
      acc[key] = arg;
    } else acc[key] = {...arg, control: {...control, presetColors}};

    return acc;
  }, {} as ArgTypes);

  return (
    <AddonWrapper>
      <PureArgsTable
        key={path} // resets state when switching stories
        compact={!expanded && hasControls}
        rows={withPresetColors}
        args={args}
        globals={globals}
        updateArgs={updateArgs}
        resetArgs={resetArgs}
        inAddonPanel
        sort={sort}
        isLoading={isLoading}
      />
    </AddonWrapper>
  );
}) satisfies React.FC;
