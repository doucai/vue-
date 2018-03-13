<template>
  <div id="app">
    <headers></headers> 
    <div class="clearfix"></div>
    <transition name="fade">
      <router-view/>
    </transition>

    <footers></footers>
  </div>
</template>
<script>
import headers from './components/head/head'
import footers from './components/foot/footer'
export default {
  name: 'App',
  components: {
    headers,
    footers
  }
 
}
</script>

<style>
@import url(./assets/c_public.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.clearfix{
  height: 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
