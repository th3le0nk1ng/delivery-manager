/**
 * Created by christian on 2/25/17.
 */

export default class Order {
  constructor ({id, orderStatus, deliveryDate, specialInstructions, recipient, items, totalCost}) {
    this.id = id
    this.orderStatus = orderStatus
    this.deliveryDate = deliveryDate
    this.specialInstructions = specialInstructions
    this.recipient = recipient
    this.items = items
    this.totalCost = totalCost
  }

  handleOrder (isDelivered) {
    this.orderStatus = isDelivered ? 'Delivered' : 'Accepted'
  }

  getItems () {
    return this.items
  }

  getItem (itemId) {
    return _.find(this.items, (i) => i.itemId === itemId)
  }

}

