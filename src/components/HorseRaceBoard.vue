<script>
import IconHorse from './icons/IconHorse.vue'
export default {
  name: 'PeopleTable',
  components: { IconHorse },
  data() {
    return {
      list: [
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
      ],
    }
  },
}
</script>

<template>
  <div id="board">
    <h2>Race Board</h2>
    <div class="board-table">
      <div class="board-row" v-for="(row, index) in list" :key="index">
        <div class="board-block">{{ index + 1 }}</div>
        <div class="board-race"><IconHorse :color="row.color" /></div>
      </div>
    </div>
  </div>
</template>

<style>
#board {
  width: 100%;
  margin-right: 20px;
  margin-left: 10px;
}
.board-table {
  margin-top: 10px;
  border-right: 5px solid #07a64c;
}
.board-row {
  display: flex;
  align-items: center;
  border-bottom: 2px dashed white;
}
.board-row:first-child {
  border-top: 2px dashed white;
}
.board-block {
  background: #285078;
  font-size: 20px;
  padding: 10px 0;
  width: 30px;
  color: white;
  text-align: center;
}
.board-race {
  padding: 0 10px;
}
</style>
