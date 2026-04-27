/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import {ArgTypes, Description, Meta, Stories, Title, useOf} from "@storybook/blocks";
import * as React from "react";

export default (() => {
  const resolvedOf = useOf("meta", ["meta"]);
  const {meta, moduleExports} = resolvedOf.csfFile;
  const component = meta.component;

  return (
    <>
      <Meta of={moduleExports || {}} />
      <Title />
      <Description of={moduleExports || {}} />
      <ArgTypes of={component || ""} />
      <Stories />
    </>
  );
}) as React.FC;
