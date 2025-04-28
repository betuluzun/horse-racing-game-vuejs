import horseProgram from './horseProgram'

const state = {
  lapResult1: [],
  lapResult2: [],
  lapResult3: [],
  lapResult4: [],
  lapResult5: [],
  lapResult6: [],
}

const mutations = {
  setResultListLap1(state, list) {
    state.lapResult1 = list
  },
  setResultListLap2(state, list) {
    state.lapResult2 = list
  },
  setResultListLap3(state, list) {
    state.lapResult3 = list
  },
  setResultListLap4(state, list) {
    state.lapResult4 = list
  },
  setResultListLap5(state, list) {
    state.lapResult5 = list
  },
  setResultListLap6(state, list) {
    state.lapResult6 = list
  },
}

const actions = {
  startRace({ commit }) {
    commit('setResultListLap1', raceStart(horseProgram.state.lap1, 1200))
    commit('setResultListLap2', raceStart(horseProgram.state.lap2, 1400))
    commit('setResultListLap3', raceStart(horseProgram.state.lap3, 1600))
    commit('setResultListLap4', raceStart(horseProgram.state.lap4, 1800))
    commit('setResultListLap5', raceStart(horseProgram.state.lap5, 2000))
    commit('setResultListLap6', raceStart(horseProgram.state.lap6, 2200))
  },
  removeResult({ commit }) {
    commit('setResultListLap1', [])
    commit('setResultListLap2', [])
    commit('setResultListLap3', [])
    commit('setResultListLap4', [])
    commit('setResultListLap5', [])
    commit('setResultListLap6', [])
  },
}

const raceStart = (arr) => {
  const newArr = [...arr]
  return newArr.sort((a, b) => b.condition - a.condition)
}

const getters = {
  lapResult1: (state) => state.lapResult1,
  lapResult2: (state) => state.lapResult2,
  lapResult3: (state) => state.lapResult3,
  lapResult4: (state) => state.lapResult4,
  lapResult5: (state) => state.lapResult5,
  lapResult6: (state) => state.lapResult6,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
