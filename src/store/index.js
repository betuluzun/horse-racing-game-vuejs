import { createStore } from 'vuex'
import horseList from './modules/horseList'
import horseProgram from './modules/horseProgram'
import horseResults from './modules/horseResults'

const store = createStore({
  modules: {
    horseList,
    horseProgram,
    horseResults,
  },
})

export default store
