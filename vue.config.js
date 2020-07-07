module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/flowy-vue/' : '/flowy-vue/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  outputDir: 'docs',
};
