'use strict'

import orderFilterTpl from './order.filter.html'

export default {
  bindings: {
    status: '<',
    onStatusChange: '&'
  },
  templateUrl: orderFilterTpl,
  controller: function () {
    this.setStatus = function (status) {
      this.status = status
      this.onStatusChange({$event: {status: status}})
    }
  }
}

