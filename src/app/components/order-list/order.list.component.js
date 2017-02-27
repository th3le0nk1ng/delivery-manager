'use strict'

import orderListTpl from './order.list.html'

export default {
  bindings: {
    orders: '<',
    status: '<',
    date: '<'
  },
  templateUrl: orderListTpl,
  controller: function () {

    this.noOrdersFound = function (orders, status, date) {
      return status !== 'All' && _.filter(orders, (o) => o.orderStatus === status && o.deliveryDate === moment(date).format('YYYY-MM-DD')).length === 0
    }
  }
}
