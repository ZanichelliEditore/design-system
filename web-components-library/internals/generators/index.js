const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setGenerator('../../src/components', componentGenerator);
};
