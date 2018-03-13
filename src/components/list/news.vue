<template>
  <div>
      <list></list>
      <p>{{num}}</p>
      <button @click="$store.commit('add',10)">add</button>
      <button @click="reduce">reduce</button>
      <button @click="addAc">addAc</button>
  </div>
</template>

<script>
import list from "./list";
import store from "../../../store/store";
import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
export default {
    components: {
        list
    },
    store,
    computed:{
        ...mapState(['num']),
    },
    methods: {
        ...mapMutations(['add','reduce']),
        ...mapGetters(['num']),
        ...mapActions(['addAc'])
    }
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
