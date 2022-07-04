<template>
  <div class="wrap">
    <Simple :simple="simple" @search="city = $event" />
    <div class="today">
      <h4>Today</h4>
      <Today :daily="hour.daily[0]" :num="i" v-for="(today, i) in 4" :key="i" />
    </div>
    <div class="weekend">
      <h4>1주일 예보</h4>
      <div>
        <Weekend :week="hour.daily[i]" v-for="(week, i) in 7" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Simple from './components/simple.vue'
import Today from './components/Today.vue'
import Weekend from './components/Weekend.vue'


export default {
  namespaced: true,
  name: 'App',
  data() {
    return {
      simple: {},
      hour: {},
      lat: '',
      lon: '',
      city: 'Seoul',
      cityOri: 'Seoul',
      hourDaily: {}
    }
  },
  components: {
    Simple: Simple,
    Today: Today,
    Weekend: Weekend,
  },
  methods: {
    getSimpleData() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=3ae11a97f077e8d4aaef302a26ea2cdb&lang=kr`)
        .then((result) => {
          this.simple = result.data
          this.lat = result.data.coord.lat
          this.lon = result.data.coord.lon
          this.getHourWeather();
        })
    },
    getHourWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=hourly&appid=3ae11a97f077e8d4aaef302a26ea2cdb`)
        .then((result) => {
          this.hour = result.data
          this.hourDaily = result.data.daily[0]
        })
    }
  },
  watch: {
    city() {
      this.getSimpleData()
    }
  },
  created() {
    this.getSimpleData()
  },



}
</script>

<style>
@import "./css/main.css"
</style>
