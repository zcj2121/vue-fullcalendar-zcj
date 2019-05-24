<template>
  <div class="full-calendar-header">
    <div class="header-left">
      <span onselectstart="return false" class="fc-today" title="今天" @click.stop="toToday">{{lang =='en'? 'today' : '今天'}}</span>
    </div>
    <div class="header-center">
      <span onselectstart="return false" class="prev-month" @click.stop="goPrev">{{leftArrow}}</span>
      <span class="title">{{title}}</span>
      <span onselectstart="return false" class="next-month" @click.stop="goNext">{{rightArrow}}</span>
    </div>
    <div class="header-right">
      <span onselectstart="return false" title="拉取" class="fc-pull" @click.stop="toPull">{{lang =='en'? 'pull' : '拉取'}}</span>
      <span onselectstart="return false" title="重置" class="fc-reset" @click.stop="toReset">{{lang =='en'? 'reset' : '重置'}}</span>
      <span onselectstart="return false" title="保存" class="fc-save" @click.stop="toSave">{{lang =='en'? 'save' : '保存'}}</span>
      <span onselectstart="return false" title="导出" class="fc-save" @click.stop="toExport">{{lang =='en'? 'export' : '导出'}}</span>
    </div>
  </div>
</template>
<script type="text/babel">
  import dateFunc from './dateFunc'
  import exportRaw from './export'

  export default {
    created () {
      this.dispatchEvent()
    },
    props : {
      lang : {},
      arrData : {},
      currentDate : {},
      titleFormat : {},
      firstDay    : {},
      monthNames  : {}
    },
    data () {
      return {
        title      : '',
        leftArrow  : '<<',
        rightArrow : '>>',
        headDate : new Date()
      }
    },
    watch : {
      currentDate (val) {
        if (!val) return
        this.headDate = val
        // this.headDate = JSON.parse(JSON.stringify(val))
      }
    },
    methods : {
      toPull() {
        this.$emit('changeData')
        this.dispatchEvent()
      },
      toReset() {
        this.$emit('changeReset')
        this.dispatchEvent()
      },
      toSave() {
        this.$emit('changeSave')
        this.dispatchEvent()
      },
      toExport () {
        exportRaw('日期JSON数据'+new Date().getTime()+'.txt', JSON.stringify(this.arrData))
      },
      toToday () {
        this.headDate = this.changeMonth(this.headDate, 0,'today')
        this.dispatchEvent()
      },
      goPrev () {
        this.headDate = this.changeMonth(this.headDate, -1)
        this.dispatchEvent()
      },
      goNext () {
        this.headDate = this.changeMonth(this.headDate, 1)
        this.dispatchEvent()
      },
      changeMonth (date, num, today) {
        let dt = new Date(date)
         let month=(new Date).getMonth();
        if (today) {
          return new Date(dt.setMonth(month))
        } else {
          return new Date(dt.setMonth(dt.getMonth() + num))
        }
      },
      dispatchEvent() {
        this.title = dateFunc.format(this.headDate, this.titleFormat, this.monthNames)

        let startDate = dateFunc.getStartDate(this.headDate)
        let curWeekDay = startDate.getDay()

        // 1st day of this monthView
        let diff = parseInt(this.firstDay) - curWeekDay
        if (diff) diff -= 7
        startDate.setDate(startDate.getDate() + diff) 

        // the month view is 6*7
        let endDate = dateFunc.changeDay(startDate, 41)

        // 1st day of current month
        let currentDate = dateFunc.getStartDate(this.headDate)

        this.$emit('change', 
          dateFunc.format(startDate, 'yyyy-MM-dd'),
          dateFunc.format(endDate, 'yyyy-MM-dd'),
          dateFunc.format(currentDate,'yyyy-MM-dd'),
          this.headDate
        )
      }
    }
  }
</script>
<style lang="scss">
.full-calendar-header{
  display: flex;
  align-items: center;
  .header-left,.header-right{
    flex:2;
    white-space: nowrap;
  }
  .header-right{
    text-align: right;
  }
  .fc-today, .fc-pull, .fc-reset, .fc-save{
    display: inline-block;
    border: 1px solid #ccc;
    padding: 2px 6px;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
  }
  .fc-today:hover, .fc-pull:hover, .fc-save:hover, .fc-reset:hover{
    background: #eee;
  }
  .header-center{
    flex:2;
    text-align:center;
    white-space: nowrap;
    .title{
      margin: 0 10px;
      width: 90px;
      display: inline-block;
    }
    .prev-month,.next-month{
      cursor: pointer;
    }
  }
}
</style>
