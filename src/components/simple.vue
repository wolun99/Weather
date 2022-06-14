<template>
  <div class="simple">
    <h3>{{ parseFloat(simple.main.temp - 273.15).toFixed(1) }}°C</h3>
    <p>{{ simple.weather[0].main }}</p><img :src='`http://openweathermap.org/img/wn/${simple.weather[0].icon}@2x.png`'
      alt="" class="weather_icon">
    <h5 class="city_name">{{ simple.name }}</h5>
    <p class="humidity">{{ simple.main.humidity }}%</p>
    <p class="high">{{ parseFloat(simple.main.temp_max - 273.15).toFixed(1) }}°C/{{
        parseFloat(simple.main.temp_min - 273.15).toFixed(1)
    }}°C</p>
    <p class="sensible">{{ parseFloat(simple.main.feels_like - 273.15).toFixed(1) }}°C</p>
    <p class="week_date">{{ dayName[day] }}</p>
    <div>
      <input type="text" placeholder="영문으로 적어주세요" @input="getInput">
      <button @click="$store.commit('getCityName', value)">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleWeather",
  data() {
    return {
      day: '',
      value: '',
      dayName: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일',],
    }
  },
  props: {
    simple: Object,
    todayDate: Object,
    todayDay: Array,
  },
  methods: {
    getDay() {
      this.day = new Date(this.simple.dt * 1000).getDay()
    },
    getInput(e) {
      this.value = e.target.value;
    }
  },
  created() {
    this.getDay();
  }
}
</script>

<style>
</style>