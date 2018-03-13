<template>
  <div>
      <p>msg</p>
      <p>{{$store.state.num}}</p>
  </div>
</template>

<script>
import store from "@/store/store.js";
export default {
    data () {
        return {
            msg:"hello word"
        }
    },
   store
}
</script>

<style>

</style>
