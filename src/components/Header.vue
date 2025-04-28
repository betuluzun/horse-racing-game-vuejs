<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="header">
    <h1>Horse Racing</h1>
    <div>
      <button @click="generateProgram">Generate Program</button>
      <button @click="startRace">Start</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const generateProgram = () => store.dispatch('generateLists')
    const startRace = () => store.dispatch('startRace')

    return {
      generateProgram,
      startRace,
    }
  },
}
</script>

<style>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #285078;
}
button {
  background-color: white;
  color: #333; /* Yazı rengi */
  border: 2px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 10px;
}

button:hover {
  background-color: #f2f2f2; /* Hover olunca hafif gri */
  border-color: #999;
}
</style>
