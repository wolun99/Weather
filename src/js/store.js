import axios from 'axios'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
  state() {
    return {
      simpleWeather: {},
      hourWeather: {},
      city: 'Seoul',
      cityOri: ['Seoul']
    }
  },
  plugins: [
    createPersistedState({
    })
  ]
  , mutations: {
    getSimDate(state, data) {
      state.simpleWeather = data
      console.log(state.simpleWeather.main.temp)
    },
    getHoDate(state, data) {
      state.hourWeather = data;
    },
    getCityName(state, data) {
      state.city = data;
    },
    getOrigin(state) {
      state.city == [...state.cityOri]
    }
  }
  , actions: {
    getSimpleData(context) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=3ae11a97f077e8d4aaef302a26ea2cdb&lang=kr`)
        .then((result) => {
          context.commit("getSimDate", result.data)
        })
        .catch(() => {
          console.log('못불러왔습니다')
        }
        )
    },
    getHourData(context) {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.simpleWeather.coord.lat}&lon=${this.state.simpleWeather.coord.lat}&exclude=hourly&appid=3ae11a97f077e8d4aaef302a26ea2cdb`)
        .then((result) => {
          context.commit("getHoDate", result.data);
        })
        .catch(() => {
          console.log('실패했습니다')
        })
    }
  },
  computed: {
    getCityname() {
      return this.$store.state.city
    }
  },
  watch: {
    getCityName() {

    }
  }
})

export default store