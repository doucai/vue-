<template>
  <div>
      <router-link to="/">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/info">信息</router-link>
      <router-link to="/me">我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background:skyblue;
    position: fixed;
    left: 0;
    bottom: 0;
}
div a{
    padding: 0.2rem 0.7rem;
    font-size: 0.5rem;
    color: #fff;
}
</style>
