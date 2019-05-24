##vue-fullcalendar-zcj

> 在 [vue-fullcalendar](https://github.com/Wanderxx/vue-fullcalendar/) 的基础上修改的满足自己需求的日历插件。


### 引入

```javascript
import FullCalendar from 'vue-fullcalendar-zcj'
Vue.component('full-calendar', FullCalendar)
```

### 使用

```html
  <full-calendar
    :arrData="fcArrData"
    @dayClick="dayClick"
    @pullData="pullData"
    @resetData="resetData"
    @saveData="saveData">
  </full-calendar>
```

```javascript
let demoArrData = [{
	time: '2019-05-05',
	type: 2 // 1:工作日，2:休息日
}]

export default {
	data () {
		return {
      fcArrData: []
    }
  },
  created () {
    this.resetData()
  },
  methods : {
    // 拉取数据 由前端请求公共接口获取数据
    pullData() {
      this.fcArrData =  [...demoArrData]
    },
    // 重置数据
    resetData() {
      this.fcArrData =  [...demoArrData]
    },
    // 保存数据
    saveData() {
      // 保存 数据 然后重置数据
      this.resetData()
		},
		// 点击日期 设置工作日、非工作日
    dayClick (day, jsEvent, dayObj) {
      let arr = []
      for (let item of this.fcArrData) {
        arr.push(item.time)
        if (dayObj.datetime == item.time) {
          item.type = item.type == 1 ? 2 : 1
        }
      }
      if (arr.indexOf(dayObj.datetime) < 0) {
        this.fcArrData.push({
          time: dayObj.datetime,
          type: 2
        })
      }
    }
  }
}
```