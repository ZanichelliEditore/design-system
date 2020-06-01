/* eslint strict: ["off"] */

"use strict";

module.exports = {
  description: "Add an unconnected raw component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "my-button"
    }
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.tsx",
        templateFile: "./raw-component/index.tsx.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/styles.css",
        templateFile: "./raw-component/styles.css.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.spec.ts",
        templateFile: "./raw-component/index.spec.ts.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../src/components/{{kebabCase name}}/index.stories.mdx",
        templateFile: "./raw-component/index.stories.mdx.hbs",
        abortOnFail: true
      }
    ];
    return actions;
  }
};
