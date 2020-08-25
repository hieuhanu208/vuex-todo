import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

//Load Vuex
Vue.use(Vuex);

//Create store 
const store = new Vuex.Store({
    modules: {
        todos
    }
}); 
export default store;