/* eslint strict: ["off"] */

"use strict";

module.exports = {
  description: "Add an unconnected raw component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "z-component"
    }
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.tsx",
        templateFile: "./component/index.tsx.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/styles.css",
        templateFile: "./component/styles.css.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.spec.ts",
        templateFile: "./component/index.spec.ts.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.mdx",
        templateFile: "./component/index.mdx.hbs",
        abortOnFail: true
      }
    ];
    return actions;
  }
};
