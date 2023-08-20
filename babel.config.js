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
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@components': './src/components',
            '@modules': './src/modules',
            '@routes': './src/routes',
            '@interfaces': './src/interfaces',
            '@services': './src/services'
           }
        }
      ]
    ]
  };
};
