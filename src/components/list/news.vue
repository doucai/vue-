<template>
  <div>
      <list></list>
      <p>{{$store.state.num}}</p>
      <button @click="$store.commit('add')">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>

<script>
import list from "./list";
import store from "../../../store/store";
export default {
    components: {
        list
    },
    store
}
</script>

<style scoped>
p{
    font-size: 0.5rem;
}
button{
    font-size: 0.5rem;
    padding: 0.5rem
}
</style>
