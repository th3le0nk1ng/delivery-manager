'use strict'

export default function DeliveriesController (orders) {
  'ngInject'
  this.orders = orders
  this.status = 'Accepted'
  this.date = new Date()
}
