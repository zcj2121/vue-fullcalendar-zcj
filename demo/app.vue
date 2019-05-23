<template>
  <div>
    <full-calendar class="test-fc" :arrData="fcArrData"
      first-day='1' lang="zh"
      @dayClick="dayClick"
      @pullData="pullData"
      @saveData="saveData">
    </full-calendar>
  </div>
</template>
<script>
  let demoArrData = []
  function num(e) {
  return e<10? '0'+ e : e
}
  var thisday= new Date();
 var year=thisday.getFullYear(); 
  function days(year,month){
          var dayCount;
          var now = new Date(year,month, 0);
          dayCount = now.getDate();
          return dayCount;
  }
  for (let i= 1; i<=12; i++) {
    let jlen = days(year, i)
    for (let j=0; j<jlen; j++) {
      let time = year+'-'+num(i)+'-'+num(j+1)
      let type = ((new Date(time)).getDay() == 0 || (new Date(time)).getDay() == 6) ? 2 : 1
      demoArrData.push({
        time: time,
        type: type
      })
    }
  }
export default {
	data () {
		return {
      fcArrData: []
    }
  },
  created () {
    this.pullData()
  },
  mounted () {

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
</script>
<style lang='scss'>
  .app{
    color:green;
  }
</style>