<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const lap1 = computed(() => store.getters.lap1)
    const lap2 = computed(() => store.getters.lap2)
    const lap3 = computed(() => store.getters.lap3)
    const lap4 = computed(() => store.getters.lap4)
    const lap5 = computed(() => store.getters.lap5)
    const lap6 = computed(() => store.getters.lap6)
    return {
      lap1,
      lap2,
      lap3,
      lap4,
      lap5,
      lap6,
    }
  },
}
</script>

<template>
  <div>
    <h2>Program</h2>
    <div>
      <h5>1st Lap - 1200m</h5>
      <table class="styled-table narrow">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          <tr v-for="(horse, index) in lap1" :key="index">
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
          <tr v-for="(horse, index) in lap2" :key="index">
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
          <tr v-for="(horse, index) in lap3" :key="index">
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
          <tr v-for="(horse, index) in lap4" :key="index">
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
          <tr v-for="(horse, index) in lap5" :key="index">
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
          <tr v-for="(horse, index) in lap6" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
