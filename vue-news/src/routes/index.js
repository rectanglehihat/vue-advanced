import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import CreateListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url의 # 제거
  routes: [
    {
      path: '/', // 페이지 접속하자마자
      redirect: './news', // news로 리다이렉트 되도록 함
    },
    {
      path: '/news', // url 주소
      name: 'news',
      component: NewsView, // url 주소로 갔을때 표시될 컴포넌트
      // component: CreateListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            // console.log(5);
            // console.log('fetched');
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: CreateListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            // 스피너가 돌고 데이터 다 받아오면 바로 스피너 꺼지도록하기위해 해당 페이지에 mounted로 넣어줌
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: CreateListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
