##vue-fullcalendar-zcj

> 在 [vue-fullcalendar](https://github.com/Wanderxx/vue-fullcalendar/) 的基础上修改的满足自己需求的日历插件。


### 引入

```javascript
import FullCalendar from 'vue-fullcalendar-zcj'

Vue.use(FullCalendar)
```

### 使用

```html
  <full-calendar class="test-fc" :arrData="fcArrData"
      first-day='1' lang="zh"
      @dayClick="dayClick"
      @pullData="pullData"
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
    this.pullData()
  },
  methods : {
    // 拉取数据
    pullData() {
      // 获取数据 如果获取到数据 用获取到的数据  如果没有 用本地数据
      this.fcArrData =  [...demoArrData]
    },
    // 保存数据
    saveData() {
      // 保存 数据 后重新拉取数据
      this.pullData()
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
  },
  components : {
    'full-calendar' : require('src/fullCalendar')
  }
}
```