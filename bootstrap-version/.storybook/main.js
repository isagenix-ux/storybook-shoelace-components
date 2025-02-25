/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.base = process.env.NODE_ENV === 'production' ? '/storybook-shoelace-components/' : '/';
    return config;
  },
  webpackFinal: async (config) => {
    // Add SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource'
    });
    
    return config;
  }
};

export default config;
