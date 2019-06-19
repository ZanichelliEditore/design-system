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
        path: "../../src/components/{{name}}/index.tsx",
        templateFile: "./raw-component/webcomponent.ts.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        templateFile: "./raw-component/styles.css.hbs",
        path: "../../src/components/{{name}}/{{name}}.css",
        abortOnFail: true
      }
    ];
    return actions;
  }
};
