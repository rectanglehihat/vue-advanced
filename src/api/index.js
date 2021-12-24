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

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };
