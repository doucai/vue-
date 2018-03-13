import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const state = {
    num:1
};
const mutations= {
    add(state,n){
        state.num+=n
    },
    reduce(state){
        state.num--
    }
}
const getters= {
    num:function(state){
        return state.num+=50
    }
}
const actions= {
    addAc(context){
        context.commit('add',1)
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})