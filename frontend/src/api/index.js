import axios from 'axios'

// 1. HTTP Request & Response와 관련된 기본 설정
// baseURL이나 인증토큰 등 HTTP통신에 있어서 환경설정을 담당하는 코드이다.
const config = {
    baseURL: 'https://api.hnpwa.com/v0',
};

// 2. API 함수 정리
// axios.get/put/delete/post()함수는 Promise객체를 반환하기 때문에 .then()과 .catch()로 체이닝이 가능하다. 체이닝 안에선 주로 인자로 함수를 받아 콜백으로 넘긴다.

function fetchList(pageName) {
    return axios.get(`${config.baseURL}/${pageName}/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseURL}/user/${username}.json`)
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.baseURL}/item/${itemId}.json`)
}


export {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
}