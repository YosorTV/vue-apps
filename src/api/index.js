import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex, Axios);

const url = 'https://jsonplaceholder.typicode.com'

export default Axios.create({
  baseURL:url
})