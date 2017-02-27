'use strict'

export default function() {
  return function (orders, status) {
    if (status === 'All') {
      return orders
    }
    return _.filter(orders, (o) => o.orderStatus === status)
  }
}