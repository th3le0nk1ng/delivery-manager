'use strict'

import orderItemTpl from './order.item.html'

export default {
  bindings: {
    order: '<'
  },
  templateUrl: orderItemTpl,
  controller: function (DeliveryService) {
    'ngInject'
    this.deliverOrder = function (orderId) {
      DeliveryService.deliverOrder(orderId)
    }

    this.undoDelivery = function (orderId) {
      DeliveryService.undoDelivery(orderId)
    }
  }
}


