module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
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
  }
}