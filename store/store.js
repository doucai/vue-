import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state = {
    num:1
};
const mutations= {
    add(state){
        state.num="woshivuex"
    },
    reduce(state){
        state.num="我是vuex"
    }
}

export default new Vuex.Store({
    state,
    mutations
})