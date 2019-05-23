// main entry file
// var Vue = require('vue')
import Vue from 'vue'
import App from './app'
import FullCalendar from 'vue-fullcalendar-zcj'
Vue.component('full-calendar', FullCalendar)
// new Vue({
//   el : '#app',
//   components : {
//     'app' : require('./app')
//   }
// })

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
    App
  }
})


