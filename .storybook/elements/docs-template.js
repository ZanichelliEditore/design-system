/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import { ArgTypes, Description, Meta, Stories, Title, useOf } from "@storybook/blocks";
import * as React from "react";
export default (() => {
    const resolvedOf = useOf("meta", ["meta"]);
    const { meta, moduleExports } = resolvedOf.csfFile;
    const component = meta.component;
    return (React.createElement(React.Fragment, null, React.createElement(Meta, { of: moduleExports || {} }), React.createElement(Title, null), React.createElement(Description, { of: moduleExports || {} }), React.createElement(Stories, null), React.createElement(ArgTypes, { of: component || "" })));
});
//# sourceMappingURL=docs-template.js.map
