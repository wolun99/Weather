<template>
  <div class="day_wrap">
    <img :src='`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`' alt="" class="today_icon">
    <div class="detail" v-if="num == 0">
      <p class="tem">{{ parseFloat(daily.temp.morn - 273.15).toFixed(1) }}°C</p>
      <p class="time">Morning</p>
    </div>
    <div class="detail" v-if="num == 1">
      <p class="tem">{{ parseFloat(daily.temp.day - 273.15).toFixed(1) }}°C</p>
      <p class="time">Afternoon</p>
    </div>
    <div class="detail" v-if="num == 2">
      <p class="tem">{{ parseFloat(daily.temp.eve - 273.15).toFixed(1) }}°C</p>
      <p class="time">Evening</p>
    </div>
    <div class="detail" v-if="num == 3">
      <p class="tem">{{ parseFloat(daily.temp.night - 273.15).toFixed(1) }}°C</p>
      <p class="time">Night</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "ToDay",
  props: {
    daily: Object,
    num: Number,
  },
}
</script>

<style>
</style>