<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      list: store.getters.horseList,
    }
  },
}
</script>

<template>
  <div>
    <h2>Horse List (1-20)</h2>
    <div>
      <table class="styled-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Condition</th>
            <th>Color</th>
          </tr>
          <tr v-for="horse in list" :key="horse.id">
            <td>{{ horse.name }}</td>
            <td>{{ horse.condition }}</td>
            <td>{{ horse.color }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
