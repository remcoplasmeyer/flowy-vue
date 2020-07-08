/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendWithComponent(conf) {
  // make sure boot file is registered
  conf.boot.push('~quasar-app-extension-flowy/src/boot/index.js');

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-flowy[\\/]src/);
  console.log(
    ' App Extension (flowy-vue) Info: \'Adding flowy-vue boot reference to your quasar.conf.js\'',
  );
}

module.exports = function (api) {
  // api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  console.log('pre register api');

  // register JSON api
  // api.registerDescribeApi('Flowy', '~@hipsjs/flowy-vue/src/components/Flowy.json');
  // api.registerDescribeApi(
  //   'FlowyNewBlock',
  //   '~@hipsjs/flowy-vue/src/components/FlowyNewBlock.json',
  // );

  // api.registerDescribeApi(
  //   'FlowyDragHandle',
  //   '~@hipsjs/flowy-vue/src/components/FlowyDragHandle.json',
  // );

  // extend quasar.conf
  api.extendQuasarConf(extendWithComponent);
};
