/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'my-button',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{name}}/index.tsx',
        templateFile: './component/webcomponent.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        templateFile: './component/styles.ts.hbs',
        path: '../../src/components/{{name}}/styles.tsx',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
