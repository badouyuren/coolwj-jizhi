
const path = require('path');
const neutrino = require('neutrino');

const basicConfig = neutrino().webpack();

const generateConfig = (config) => {
  const { output, plugins } = config;
  return {
    ...config,
    output: {
      ...output,
      path: path.resolve(__dirname, './builds'),
    },
  };
};

const chromeConfig = generateConfig(basicConfig);

module.exports = [chromeConfig];