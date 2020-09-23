import Vue from 'vue'

Vue.filter 'maskify', (number) ->
    number.toString().replace /^[0-9]{7}/g, '*******'

Vue.filter 'currency', (val) -> "\u20A6#{val}"

Vue.filter 'date', (date) -> new Date(date).toDateString()
