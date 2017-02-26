'use strict'

import route from './delivery.manager.route'
import deliveryService from './delivery.service'
import deliveryManagerComponent from './delivery.manager.component'

const deliveryManagerModule = angular.module('delivery-manager-module', [
  'ui.router'
])

deliveryManagerModule
  .config(route)
  .service('DeliveryService', deliveryService)
  .component('deliveryManager', deliveryManagerComponent)

export default deliveryManagerModule
