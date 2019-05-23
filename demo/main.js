// main entry file
// var Vue = require('vue')
import Vue from 'vue'
import App from './app'
import FullCalendar from '../dist/vue-fullcalendar.js'
Vue.use(FullCalendar)
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


