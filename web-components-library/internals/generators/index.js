const componentGenerator = require("./component/index.js");
const rawComponentGenerator = require("./raw-component/index.js");

module.exports = plop => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("raw-component", rawComponentGenerator);
};
