'use strict'

import deliveriesController from './deliveries.controller'
import deliveriesTpl from './deliveries.html'

export default function routeConfig ($stateProvider) {
  'ngInject'

  $stateProvider
    .state('deliveries', {
      url: '/deliveries',
      component: 'deliveryManager',
      resolve: {
        orders: ['DeliveryService', function (DeliveryService) {
          return DeliveryService.getOrders()
        }]
      },
      templateUrl: deliveriesTpl,
      controller: deliveriesController,
      controllerAs: 'vm'
    })
}
