import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';
import { fetchAskList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      //mutations에 접근할 수 있는 인자
      fetchNewsList()
        .then((response) => {
          // console.log(response);
          context.commit('SET_NEWS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_ASKS(context) {
      fetchAskList()
        .then((response) => {
          // console.log(response);
          context.commit('SET_ASKS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((response) => {
          // console.log(response);
          context.commit('SET_JOBS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
