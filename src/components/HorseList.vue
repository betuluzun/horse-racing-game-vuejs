<script>
export default {
  name: 'PeopleTable',
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
