<template>
   <div>   
       
        <div class="wrapper" ref="wrapper">
            
            <ul class="contents">
                 <div class="top-tip">
                    <span class="refresh-hook">下拉刷新</span>
                </div>
                <li v-for="info in apple" >
                <router-link :to=info.url>
                    <span>{{info.title}}</span>
                    <img :src=info.imageUrls alt="图片没加载出来">
                </router-link>
                </li>
            </ul>  
        </div>
        <p class="next" @click="next">
            <span data-index="1">1</span>
            <span data-index="2">2</span>
            <span data-index="3">3</span>
            <span data-index="4">4</span>
            <span data-index="5">5</span>
            
        </p>
       
   </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    data () {
        return {
        apple: [],
        imgurl:[],
        num:1,
        bottomStatus:'',
        bottomAllLoaded:false
        }
    },
    created () {
      
         this.loadData(this.num) 
    },
    
    methods: {
        next(e){
            if (e.target.nodeName.toLowerCase() === 'span') {
            const index = parseInt(e.target.dataset.index)
            // 获得引索后，只需要修改data数据就能改变UI了
            this.loadData(index)
          }
        },
        loadData(num) {
         var dataurl="api/news/qihoo?kw=%E7%99%BD&site=qq.com&pageToken="+num+"&apikey=wrZMRq19dzqk4nsQppW8DFjq9NE5FabrEHpEVMUIHWUUtCWgWItMNY7Zto6Cecpm";
            this.$http.get(dataurl).then((res)=>{
            if(res.status){
                //console.log(res.data.data)
                this.apple=res.data.data;
                //console.log(this.apple);
                this.$nextTick(() => {
                    if(!this.scroll){
                        this.scroll = new BScroll(this.$refs.wrapper, {
                            click:true
                        });
                        this.scroll.on('touchend',(pos)=>{
                            //下拉
                            if(pos.y>30){
                              alert(1)  
                            this.num++
                            this.loadData(this.num)
                            }
                        })
                    }else{
                        this.scroll.refresh
                    }
                });
            }else{
                console.log("网络错误"+"500")
            }
            }).catch((req)=>{
                console.log("网络错误"+req)
            })
        },
       
    }
}
</script>

<style scoped>
.contents{
  margin: 0.1rem 0;
}
.contents li{
  width: 10rem;
  overflow: hidden;
  margin: 1rem 0 0;
}

.contents li a img{
  width: 9.8rem;
  border: 0;
}
.contents li a span{
  display: block;
  text-align: center;
  color: #000;
  font-size: 0.4rem;
  width: 9rem;
  margin: 0 auto 0.3rem;
  font-size: 0.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrapper{
    height: 8.5rem;
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0.1rem;
}
.next{
    margin: 0.3rem 0;
}
.next span{
    display: inline-block;
    padding:0.1rem 0.5rem;
    border: 1px solid skyblue;
}
.top-tip{
    position: absolute;
    top: -1.5rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: #555;
    font-size: 0.5rem;
} 
</style>
