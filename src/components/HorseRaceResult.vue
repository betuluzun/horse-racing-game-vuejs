<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const lapResult1 = computed(() => store.getters.lapResult1)
    const lapResult2 = computed(() => store.getters.lapResult2)
    const lapResult3 = computed(() => store.getters.lapResult3)
    const lapResult4 = computed(() => store.getters.lapResult4)
    const lapResult5 = computed(() => store.getters.lapResult5)
    const lapResult6 = computed(() => store.getters.lapResult6)
    return {
      lapResult1,
      lapResult2,
      lapResult3,
      lapResult4,
      lapResult5,
      lapResult6,
    }
  },
}
</script>

<template>
  <div>
    <h2>Results</h2>
    <div>
      <h5>1st Lap - 1200m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult1" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h5>2nd Lap - 1400m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult2" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h5>3rd Lap - 1600m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult3" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h5>4th Lap - 1800m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult4" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h5>5th Lap - 2000m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult5" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h5>6th Lap - 2200m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lapResult6" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
