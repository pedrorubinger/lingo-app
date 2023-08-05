module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@components': './src/components',
            '@modules': './src/modules',
           }
        }
      ]
    ]
  };
};
