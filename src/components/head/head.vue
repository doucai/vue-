<template>
  <div>
      {{tit}}
  </div>
</template>

<script>
export default {
    data () {
        return {
            tit:"明天"
        }
    }
}
</script>

<style scoped>
div{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.5rem;
    color: #fff;
    background: skyblue;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
}
</style>
