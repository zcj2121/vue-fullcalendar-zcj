<template>
  <div class="full-calendar-body">
    <div class="weeks">
      <strong class="week" v-for="week in weekNames">{{week}}</strong>
    </div>
    <div class="dates" ref="dates">
      <div class="dates-bg">
        <div class="week-row" v-for="week in currentDates">
          <div onselectstart="return false" class="day-cell" v-for="day in week"
            :class="{'today' : day.isToday,
              'not-cur-month' : !day.isCurMonth}"  @click.stop="dayClick(day.date, $event, day)">
            <p class="day-number">{{day.monthDay}}</p>
            <p class="day-iswork">
              <span v-if="day.isworkDay == 2">休</span>
            </p>
          </div>
        </div>
      </div>
      <!-- absolute so we can make dynamic td -->
      <slot name="body-card">
      </slot>

    </div>
  </div>
</template>
<script type="text/babel">
  import dateFunc from './dateFunc'

  export default {
    props : {
      arrData: {
        type : Array,
        default : []
      },
      currentDate : {},
      weekNames   : {
        type : Array,
        default : []
      },
      monthNames  : {},
      firstDay    : {}
    },
    created () {
      
    },
    data () {
      return {
        // weekNames : DAY_NAMES,
        weekMask : [1,2,3,4,5,6,7],
        isLismit : true,
        eventLimit : 3,
        showMore : false,
        morePos : {
          top: 0,
          left : 0
        },
        selectDay : {}
      }
    },
    watch : {
      weekNames (val) {
      }
    },
    computed : {
      currentDates () {
        return this.getCalendar()
      }
    },
    methods : {
      isBegin (event, date, index) {
        let st = new Date(event.start)

        if (index == 0 || st.toDateString() == date.toDateString()) {
          return event.title
        }
        return '　'
      },
      moreTitle (date) {
        let dt = new Date(date)
        return this.weekNames[dt.getDay()] + ', ' + this.monthNames[dt.getMonth()] + dt.getDate()
      },
      classNames (cssClass) {
        if(!cssClass) return ''
        // string  
        if (typeof cssClass == 'string') return cssClass

        // Array
        if (Array.isArray(cssClass)) return cssClass.join(' ')
        
        // else
        return ''
      },
      getCalendar () {
        // calculate 2d-array of each month
        // first day of this month
        let now = new Date() // today
        let current = new Date(this.currentDate)

        let startDate = dateFunc.getStartDate(current) // 1st day of this month

        let curWeekDay = startDate.getDay()

        // begin date of this table may be some day of last month
        let diff = parseInt(this.firstDay) - curWeekDay
        diff = diff > 0 ? (diff - 7) : diff

        startDate.setDate(startDate.getDate() + diff)
        let calendar = []
        
        for(let perWeek = 0 ; perWeek < 6 ; perWeek++) {

          let week = []

          for(let perDay = 0 ; perDay < 7 ; perDay++) {
            let datetime = dateFunc.format(new Date(startDate), 'yyyy-MM-dd')
            week.push({
              monthDay : startDate.getDate(),
              isToday : now.toDateString() == startDate.toDateString(),
              isCurMonth : startDate.getMonth() == current.getMonth(),
              weekDay : perDay,
              date : new Date(startDate),
              datetime: datetime,
              isworkDay: this._isWorkFun(datetime) || 1
            })

            startDate.setDate(startDate.getDate() + 1)
            // if (startDate.toDateString() == endDate.toDateString()) {
            //   isFinal = true
            //   break
            // }
          }
          calendar.push(week)
          // if (isFinal) break
        }
        return calendar
      },
      _isWorkFun(val) {
        for(let item of this.arrData){
          if (item.time == val) {
            return item.type
          }
        }
      },
      isStart (eventDate, date) {
        let st = new Date(eventDate)
        return st.toDateString() == date.toDateString()
      },
      isEnd (eventDate,date) {
        let ed = new Date(eventDate)
        return ed.toDateString() == date.toDateString()
      },
      computePos (target) {
        let eventRect = target.getBoundingClientRect()
        let pageRect = this.$refs.dates.getBoundingClientRect()
        return {
          left : eventRect.left - pageRect.left,
          top  : eventRect.top + eventRect.height - pageRect.top
        }
      },
      dayClick(day, jsEvent, dayObj) {
        this.$emit('dayclick', day, jsEvent, dayObj)
      },
      eventClick(event, jsEvent) {
        if (!event.isShow) {
          return
        }
        jsEvent.stopPropagation()
        let pos = this.computePos(jsEvent.target)
        this.$emit('eventclick', event, jsEvent, pos)
      }
    }
  }
</script>
<style lang="scss">
.full-calendar-body{
  margin-top: 20px;
  .weeks{
    display: flex;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
    .week{
      flex:1;
      text-align: center;
      border-right:1px solid #e0e0e0;
    }
  }
  .dates {
    position:relative;
    .week-row{
      // width: 100%;
      // position:absolute;
      border-left:1px solid #e0e0e0;
      display: flex;
      .day-cell{
        flex:1;
        min-height: 100px;
        padding:4px;
        border-right:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
        position: relative;
        cursor: pointer;
        .day-number{
          text-align: right;
        }
        .day-iswork{
          text-align: center;
          position: absolute;
          left:50%;top:50%;transform:translate(-50%,-50%); 
          span{
            font-size: 16px;
            background: #00CC00;
            color: #fff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            line-height: 20px;
            padding:4px;
            display: block;
          }
        }
        .day-btn{
          display: block;
          text-align: center;
          span{
            font-size: 12px;
            border:1px solid #ccc;
            padding:2px 4px;
            display: block;
            // display: inline-block;
          }
        }
        &.today{
          background-color:#fcf8e3;
        }
        &.not-cur-month{
          .day-number{
            color:rgba(0,0,0,.24);
          }
        }
      }
      // .day-cell:hover{
      //   background: rgba(0,0,0,.15);
      //   .day-btn{
      //     display: block;
      //   }
      // }
    }
    .dates-events{
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      width: 100%;
      .events-week{
        display: flex;
        .events-day{
          cursor: pointer;
          flex:1;
          min-height: 109px;
          overflow: hidden;
          text-overflow: ellipsis;
          .day-number{
            text-align: right;
            padding:4px 5px 4px 4px;
            opacity: 0;
          }
          &.not-cur-month{
            .day-number{
              color:rgba(0,0,0,.24);
            }
          }
          .event-box{
            .event-item{
              cursor: pointer;
              font-size:12px;
              background-color:#C7E6FD;
              margin-bottom:2px;
              color: rgba(0,0,0,.87);
              padding:0 0 0 4px;
              height: 18px;
              line-height: 18px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &.is-start{
                margin-left: 4px;
                // border-top-left-radius:4px;
                // border-bottom-left-radius:4px;
              }
              &.is-end{
                margin-right: 4px;
                // border-top-right-radius:4px;
                // border-bottom-right-radius:4px;
              }
              &.is-opacity{
                opacity: 0;
              }
            }
            .more-link{
              cursor: pointer;
              // text-align: right;
              padding-left: 8px;
              padding-right: 2px;
              color: rgba(0,0,0,.38);
              font-size: 14px;
            }
          }
        }
      }
    }
    .more-events{
      position:absolute;
      width: 150px;
      z-index: 2;
      border:1px solid #eee;
      box-shadow: 0 2px 6px rgba(0,0,0,.15);
      .more-header{
        background-color:#eee;
        padding:5px;
        display: flex;
        align-items : center;
        font-size: 14px;
        .title{
          flex:1;
        }
        .close{
          margin-right: 2px;
          cursor: pointer;
          font-size: 16px;
        }
      }
      .more-body{
        height: 140px;
        overflow: hidden;
        .body-list{
          height: 120px;
          padding:5px;
          overflow: auto;
          background-color:#fff;
          .body-item{
            cursor: pointer;
            font-size:12px;
            background-color:#C7E6FD;
            margin-bottom:2px;
            color: rgba(0,0,0,.87);
            padding:0 0 0 4px;
            height: 18px;
            line-height: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
