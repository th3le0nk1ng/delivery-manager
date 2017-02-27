'use strict'

export default function() {
  return function (orders, date) {
    return _.filter(orders, (o) => o.deliveryDate === moment(date).format('YYYY-MM-DD'))
  }
}