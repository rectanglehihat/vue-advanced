import axios from 'axios';

// 1. http request & response 관련 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. api 함수들 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

async function fetchJobsList() {
  try {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchItem(item) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${item}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
};
