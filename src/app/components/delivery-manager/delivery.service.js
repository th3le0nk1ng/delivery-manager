/**
 * Created by christian on 2/25/17.
 */

import orders from '_json/orders.json'
import Order from './order'

export default function DeliveryService () {
  return {
    orderList: _.map(orders, (o) => new Order(o)),

    deliverOrder (orderId) {
      _.find(this.orderList, (o) => o.id === orderId).handleOrder(true)
    },

    undoDelivery (orderId) {
      _.find(this.orderList, (o) => o.id === orderId).handleOrder(false)
    },

    getOrderItems (orderId) {
      return _.find(this.orderList, (o) => o.id === orderId).getItems()
    },

    getOrders () {
      return this.orderList
    }
  }
}
