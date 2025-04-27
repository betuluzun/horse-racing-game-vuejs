<script setup>
import Header from '../components/Header.vue'
import HorseList from '../components/HorseList.vue'
import HorseRaceBoard from '../components/HorseRaceBoard.vue'
import HorseRaceProgram from '../components/HorseRaceProgram.vue'
import HorseRaceResult from '../components/HorseRaceResult.vue'
</script>

<template>
  <div id="home">
    <Header />
    <div id="content">
      <HorseList />
      <HorseRaceBoard />
      <HorseRaceProgram />
      <HorseRaceResult />
    </div>
  </div>
</template>

<style>
#home {
  background: black;
}
#content {
  display: flex;
  padding: 30px;
}
</style>
