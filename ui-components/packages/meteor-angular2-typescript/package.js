Package.describe({
  name: 'shmck:angular2-typescript',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Compile Angular2 code using Typescript compiler.',
  // URL to the Git repository containing the source code for this package.
  // git: 'http://github.com/netanelgilad/meteor-angular2-typescript',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name : 'ts',
  sources : [
    'plugin/handler.js'
  ],
  npmDependencies : {
    'typescript' : '1.5.3'
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shmck:angular2-typescript');
  api.addFiles('angular-ts-tests.js');
});
