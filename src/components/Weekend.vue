<template>
  <div class="weekend_item">
    <img :src='`http://openweathermap.org/img/wn/${week.weather[0].icon}@2x.png`' alt="">
    <p class="tem">{{ parseFloat(week.temp.day - 273.15).toFixed(1) }}°C</p>
    <p class="time">{{ ktc[0] }}년{{ ktc[1] }}월{{ ktc[2] }}일</p>
  </div>
</template>

<script>
export default {
  name: "WeekEnd",
  data() {
    return {
      date: new Date(),
      ktc: [],
    }
  },
  props: {
    week: Object,
  },
  methods: {
    changeKtc() {
      let change = new Date(this.week.dt * 1000)
      let year = change.getFullYear();
      let month = change.getMonth() + 1;
      let dat = change.getDate();
      this.ktc.push(year, month, dat)
    }
  },
  created() {
    this.changeKtc()
  },
}
</script>

<style>
</style>