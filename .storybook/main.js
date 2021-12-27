module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal(config) {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  }
}
