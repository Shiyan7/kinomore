const path = require("path")

module.exports = {
  stories: ['../**/src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          additionalData: '@import "./src/scss/vars.scss"; @import "./src/scss/mixins.scss"; @import "./src/scss/global.scss";',
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.alias['@/components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@/UI'] = path.resolve(__dirname, '../src/components/UI')
    config.resolve.alias['@/types'] = path.resolve(__dirname, '../src/types')
    config.resolve.alias['@/services'] = path.resolve(__dirname, '../src/services')
    config.resolve.alias['@/store'] = path.resolve(__dirname, '../src/store')
    config.resolve.alias['@/scss'] = path.resolve(__dirname, '../src/scss')
    config.resolve.alias['@/constants'] = path.resolve(__dirname, '../src/constants')
    config.resolve.alias['@/hooks'] = path.resolve(__dirname, '../src/hooks')
    config.resolve.alias['@/helpers'] = path.resolve(__dirname, '../src/helpers')
    return config
  }
}