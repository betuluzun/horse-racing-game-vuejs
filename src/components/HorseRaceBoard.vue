<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import IconHorse from './icons/IconHorse.vue'
export default {
  components: { IconHorse },
  setup() {
    const store = useStore()
    const list = ref([])
    const length = ref('')
    const lapResult1 = computed(() => store.getters.lapResult1)
    const lap1 = computed(() => store.getters.lap1)
    const lap2 = computed(() => store.getters.lap2)
    const lap3 = computed(() => store.getters.lap3)
    const lap4 = computed(() => store.getters.lap4)
    const lap5 = computed(() => store.getters.lap5)
    const lap6 = computed(() => store.getters.lap6)
    const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms))
    }
    const startRaceAnimation = async () => {
      length.value = 1200
      list.value = lap1.value
      await delay(4000)
      length.value = 1400
      list.value = lap2.value
      await delay(4000)
      length.value = 1600
      list.value = lap3.value
      await delay(4000)
      length.value = 1800
      list.value = lap4.value
      await delay(4000)
      length.value = 2000
      list.value = lap5.value
      await delay(4000)
      length.value = 2200
      list.value = lap6.value
    }

    watch(lapResult1, () => {
      if (lapResult1.value.length !== 0) {
        startRaceAnimation()
      }
    })

    return {
      list,
      startRaceAnimation,
      length,
    }
  },
}
</script>

<template>
  <div id="board">
    <h2>Race Board</h2>
    <div class="board-table" :key="length">
      <div class="board-row" v-for="(row, index) in list" :key="index">
        <div class="board-block">{{ index + 1 }}</div>
        <div class="board-race">
          <IconHorse
            class="move"
            :style="{ animationDuration: row.duration + 's' }"
            :color="row?.color || 'white'"
          />
        </div>
      </div>
      <h4 style="text-align: center">{{ length }}</h4>
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
  position: relative;
  width: calc(100% - 72px);
}
</style>
