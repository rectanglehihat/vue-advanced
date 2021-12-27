import {
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from '../api/index.js';

export default {
  // FETCH_NEWS(context) {
  //   // context는 mutations에 접근할 수 있는 인자
  //   return fetchNewsList()
  //     .then((response) => {
  //       // console.log(response);
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // FETCH_ASKS({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       // console.log(response);
  //       // console.log(context);
  //       commit('SET_ASKS', data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       // console.log(response);
  //       commit('SET_JOBS', data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, item) {
    return fetchItem(item)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        // console.log(4);
        commit('SET_LIST', data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
