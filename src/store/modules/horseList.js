const state = {
  horseList: [
    {
      name: 'MADAME SCARLET',
      condition: 60,
      color: 'Crimson',
      id: 1,
    },
    {
      name: 'BEST ALYA',
      condition: 5,
      color: 'Teal',
      id: 2,
    },
    {
      name: 'BLACK RUBY',
      condition: 10,
      color: 'Gold',
      id: 3,
    },
    {
      name: 'SLIM REAPER',
      condition: 15,
      color: 'SlateBlue',
      id: 4,
    },
    {
      name: 'SYRAX',
      condition: 75,
      color: 'Tomato',
      id: 5,
    },
    {
      name: 'TEZKOR',
      condition: 70,
      color: 'Coral',
      id: 6,
    },
    {
      name: 'TRUST MY SPEED',
      condition: 60,
      color: 'Turquoise',
      id: 7,
    },
    {
      name: 'CEYCO',
      condition: 50,
      color: 'Indigo',
      id: 8,
    },
    {
      name: 'SON OF KURT',
      condition: 20,
      color: 'MediumSeaGreen',
      id: 9,
    },
    {
      name: 'MY REBELLIOUS GIRL',
      condition: 25,
      color: 'LightSalmon',
      id: 10,
    },
    {
      name: 'QUEEN TESLA',
      condition: 100,
      color: 'DodgerBlue',
      id: 11,
    },
    {
      name: 'STRONG HEARD',
      condition: 95,
      color: 'Violet',
      id: 12,
    },
    {
      name: '	LE PATRON',
      condition: 90,
      color: 'FireBrick',
      id: 13,
    },
    {
      name: 'CLANBELLA',
      condition: 85,
      color: 'DeepPink',
      id: 14,
    },
    {
      name: 'ZERO TO HERO',
      condition: 65,
      color: 'DarkOrange',
      id: 15,
    },
    {
      name: 'GREEN MILE',
      condition: 70,
      color: 'LightGreen',
      id: 16,
    },
    {
      name: 'KOCA ZEYBEK',
      condition: 40,
      color: 'RoyalBlue',
      id: 17,
    },
    {
      name: 'SUPER SHOW',
      condition: 55,
      color: 'DarkKhaki',
      id: 18,
    },
    {
      name: 'MY JUILETTE',
      condition: 30,
      color: 'SandyBrown',
      id: 19,
    },
    {
      name: 'SIRIUS BLACK',
      condition: 45,
      color: 'HotPink',
      id: 20,
    },
  ],
}

const mutations = {
  setList(state, list) {
    state.list = list
  },
}

const actions = {
  updateList({ commit }, list) {
    commit('setList', list)
  },
}

const getters = {
  horseList: (state) => state.horseList,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
