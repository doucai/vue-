<template>
  <div class="hello">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <router-link to="">
                <img src="../assets/1.jpg" alt="">
              </router-link>
            </div>
            <div class="swiper-slide">
              <router-link to="">
                <img src="../assets/2.jpg" alt="">
              </router-link></div>
            <div class="swiper-slide">
              <router-link to="">
                <img src="../assets/3.jpg" alt="">
              </router-link></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
     
    </div>
    <!-- 内容区 -->
     <list></list>

  </div>
</template>

<script>
import list from './list/list'
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  // 事件
  methods: {
  },
  components: {
    list
  },
   // 模板加载
  mounted () {
     var mySwiper = new Swiper ('.swiper-container', {
          autoplay:3000,
          loop: true,
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
.swiper-container{
  height: 6rem;
}
.swiper-container a img{
  width: 100%;
  height: 100%;
}

</style>
