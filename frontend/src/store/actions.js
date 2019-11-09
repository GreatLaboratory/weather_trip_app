import {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
} from '../api'

export default {
    // 액션함수는 항상 mutation에 접근할 수 있게 인자로 context가 제공된다.
    // 하지만 매번 context.commit을 하기 귀찮으니 { commit }으로 한번에 받아와서 바로 써버리쟛
    async FETCH_USER({ commit }, userName) {
        try {
            const res = await fetchUserInfo(userName);
            commit('SET_USER', res.data);
            return res;
        } catch (err) {
            console.log(err)
        }
    },
    async FETCH_ITEM({ commit }, itemId) {
        try {
            const res = await fetchItemInfo(itemId);
            commit('SET_Item', res.data);
            return res;
        } catch (err) {
            console.log(err)
        }
    },
    async FETCH_LIST({ commit }, pageName) {
        try {
            const res = await fetchList(pageName);
            commit('SET_LIST', res.data);
            return res;
        } catch (err) {
            console.log(err)
        }
    },
}