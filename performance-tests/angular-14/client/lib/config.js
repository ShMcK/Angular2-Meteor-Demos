angular.module('app').config(optimizations);

function optimizations($compileProvider, $httpProvider) {
  $compileProvider.debugInfoEnabled(false);
}