<script>
export default {
  name: 'PeopleTable',
  data() {
    return {
      list: [
        {
          name: 'Ada',
          position: 1,
        },
        {
          name: 'Ada',
          position: 2,
        },
        {
          name: 'Ada',
          position: 3,
        },
        {
          name: 'Ada',
          position: 4,
        },
        {
          name: 'Ada',
          position: 5,
        },
        {
          name: 'Ada',
          position: 6,
        },
        {
          name: 'Ada',
          position: 7,
        },
        {
          name: 'Ada',
          position: 8,
        },
        {
          name: 'Ada',
          position: 9,
        },
        {
          name: 'Ada',
          position: 10,
        },
      ],
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
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
          <tr v-for="horse in list" :key="horse.position">
            <td>{{ horse.position }}</td>
            <td>{{ horse.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
