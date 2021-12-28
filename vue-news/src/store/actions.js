import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from '../api/index.js';

export default {
  // Promise
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
  // async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

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
  async FETCH_ASKS({ commit }) {
    try {
      const response = await fetchAskList();
      commit('SET_ASKS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

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
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
    commit('SET_JOBS', response.data);
    return response;
  },

  // FETCH_USER({ commit }, username) {
  //   return fetchUserInfo(username)
  //     .then(({ data }) => {
  //       commit('SET_USER', data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_USER({ commit }, username) {
    const response = await fetchUserInfo(username);
    commit('SET_USER', response.data);
    return response;
  },

  // FETCH_ITEM({ commit }, item) {
  //   return fetchItem(item)
  //     .then(({ data }) => {
  //       commit('SET_ITEM', data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async FETCH_ITEM({ commit }, item) {
    const response = await fetchItem(item);
    commit('SET_ITEM', response.data);
    return response;
  },

  //   FETCH_LIST({ commit }, pageName) {
  //     return fetchList(pageName)
  //       .then(({ data }) => {
  //         // console.log(4);
  //         commit('SET_LIST', data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // };
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
};
