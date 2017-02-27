'use strict'

export default function DeliveriesController (orders) {
  'ngInject'
  this.orders = orders
  this.status = 'Accepted'
  this.date = moment('2016-12-12').toDate()
}
