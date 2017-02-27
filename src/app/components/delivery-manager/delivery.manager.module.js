'use strict'

import route from './delivery.manager.route'
import deliveryService from './delivery.service'
import deliveryManagerComponent from './delivery.manager.component'
import orderFilterComponent from '_components/order-filter/order.filter.component'
import orderItemComponent from '_components/order-item/order.item.component'
import orderListComponent from '_components/order-list/order.list.component'
import orderCalendarComponent from '_components/order-calendar/order.calendar.component'
import orderStatusFilter from '_components/order-list/order.status.filter'
import orderDateFilter from '_components/order-list/order.date.filter'

const deliveryManagerModule = angular.module('delivery-manager-module', [
  'ui.router'
])

deliveryManagerModule
  .config(route)
  .service('DeliveryService', deliveryService)
  .filter('orderStatus', orderStatusFilter)
  .filter('orderDate', orderDateFilter)
  .component('deliveryManager', deliveryManagerComponent)
  .component('orderCalendar', orderCalendarComponent)
  .component('orderList', orderListComponent)
  .component('orderItem', orderItemComponent)
  .component('orderFilter', orderFilterComponent)

export default deliveryManagerModule
