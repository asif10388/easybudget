module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          comps: './src/comps',
          helpers: './src/helpers',
        },
      },
    ],
  ],
};
