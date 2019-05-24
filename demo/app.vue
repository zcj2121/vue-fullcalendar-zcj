<template>
  <div class="box">
    <full-calendar :arrData="fcArrData"
      @dayClick="dayClick"
      @pullData="pullData"
      @resetData="resetData"
      @saveData="saveData"
      @exportData="exportData">
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
    this.resetData()
  },
  mounted () {

  },
  methods : {
    // 拉取数据
    pullData() {
      this.fcArrData =  [{
        time: '2019-05-05',
        type: '2'
      }]
    },
    // 重置数据
    resetData() {
      this.fcArrData =  [...demoArrData]
    },
    // 保存数据
    saveData() {
      // 保存 数据 后重新拉取数据
      this.pullData()
    },
    // 导出数据
    exportData() {
      // 导出 json数据
      
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
  .box{
    height: 500px;
  }
  .app{
    color:green;
  }
</style>