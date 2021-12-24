import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

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
      component: NewsView, // url 주소로 갔을때 표시될 컴포넌트
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
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
