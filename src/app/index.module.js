'use strict'

import config from './index.config'
import run from './index.run'

import uiRouter from 'angular-ui-router'

import indexRoutes from './index.routes'
import deliveryManagerModule from '_components/delivery-manager/delivery.manager.module'

const App = angular.module(
  'h.bloom', [
    // plugins
    uiRouter,
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    '720kb.datepicker',

    // routes
    indexRoutes.name,

    // modules
    deliveryManagerModule.name

  ]
)

App
  .config(config)
  .run(run)

export default App
