'use strict'

import homeTpl from './home.html'

function routeConfig ($urlRouterProvider, $stateProvider) {
  'ngInject'

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: homeTpl
    })

  $urlRouterProvider.otherwise('/')
}

export default angular
  .module('index.routes', [])
    .config(routeConfig)

