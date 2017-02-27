'use strict'

import orderCalendarTpl from './order.calendar.html'

export default {
  bindings: {
    date: '<',
    onDateChange: '&'
  },
  templateUrl: orderCalendarTpl,
  controller: function () {
    this.setDate = function () {
      this.onDateChange({$event: {date: this.date}})
    }
  }
}
