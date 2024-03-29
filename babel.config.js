module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components',
          pages: './src/pages',
          types: './src/types',
          utils: './src/utils',
          assets: './src/assets',
          store: './src/store',
          hooks: './src/hooks',
          config: './src/config',
          services: './src/services',
          navigations: './src/navigations',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
