<template>
  <div class="wrap">
    <Simple :simple="$store.state.simpleWeather" />
    <div class="today">
      <h4>Today</h4>
      <Today :daily="$store.state.hourWeather.daily['0']" :num="i" v-for="(today, i) in 4" :key="i" />
    </div>
    <div class="weekend">
      <h4>1주일 예보</h4>
      <div>
        <Weekend :week="$store.state.hourWeather.daily[i]" v-for="(week, i) in 7" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>

import Simple from './components/simple.vue'
import Today from './components/Today.vue'
import Weekend from './components/Weekend.vue'

export default {
  namespaced: true,
  name: 'App',
  date() {
    return {

    }
  },
  components: {
    Simple: Simple,
    Today: Today,
    Weekend: Weekend,
  },
  beforeCreate() {
    this.$store.dispatch('getSimpleData');
    this.$store.dispatch('getHourData');
  },

}
</script>

<style>
@import "./css/main.css"
</style>
