import horseList from './horseList'

const state = {
  lap1: [],
  lap2: [],
  lap3: [],
  lap4: [],
  lap5: [],
  lap6: [],
}

const mutations = {
  setListLap1(state, list) {
    state.lap1 = list
  },
  setListLap2(state, list) {
    state.lap2 = list
  },
  setListLap3(state, list) {
    state.lap3 = list
  },
  setListLap4(state, list) {
    state.lap4 = list
  },
  setListLap5(state, list) {
    state.lap5 = list
  },
  setListLap6(state, list) {
    state.lap6 = list
  },
}

const actions = {
  generateLists({ commit, dispatch }) {
    const list = horseList.state.horseList
    dispatch('removeResult')
    commit('setListLap1', getRandomItems(list))
    commit('setListLap2', getRandomItems(list))
    commit('setListLap3', getRandomItems(list))
    commit('setListLap4', getRandomItems(list))
    commit('setListLap5', getRandomItems(list))
    commit('setListLap6', getRandomItems(list))
  },
}

const getRandomItems = (arr) => {
  const shuffled = arr.slice()
  let i = arr.length
  const min = i - 10
  let temp, index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[i]
    shuffled[i] = shuffled[index]
    shuffled[index] = temp
  }

  const shuffeledArr = shuffled.slice(min).map((item) => {
    const duration = ((100 - item.condition) * 3) / 100
    return {
      ...item,
      duration: duration === 0 ? 0.1 : duration,
    }
  })

  return shuffeledArr
}

const getters = {
  lap1: (state) => state.lap1,
  lap2: (state) => state.lap2,
  lap3: (state) => state.lap3,
  lap4: (state) => state.lap4,
  lap5: (state) => state.lap5,
  lap6: (state) => state.lap6,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
