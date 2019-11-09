import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import createListView from '../views/CreateListView'
import bus from "@/utils/bus";
import store from '../store'
import DetailPage from "@/components/DetailPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',   // 이게 없으면 전부 url이 /#/ 이렇게 들어옴
  routes:[
    // path : url 주소가 담긴다.
    // component : url주소가 갔을 때 표시될 컴포넌트 / 주로 페이지로 간주한다.
    {
      path: '/',
      redirect: "/news"
    },
    {
      path: '/today',
      name: 'today',
      component: createListView('TodayView'),
      // 라우터 네비게이션 가드
      beforeEnter: (to, from, next) => {
        // to : 이동할 url의 라우팅 정보
        // from : 현재 url의 라우팅 정보
        // 이 객체 마지막에 next();를 호출해줘야지만 to 라우팅으로 넘어간다.

        bus.$emit('start:spinner');  // 여기서 start:spinner이벤트를 방출하면 App.vue에서 bus.$on으로 받는다.
        store.dispatch('FETCH_LIST', to.name)  // 접근하려는 url라우팅의 정보인 name
            .then(()=>{
              // 스피너 끄는 걸 여기다가 하면 news페이지 가서도 잠깐은 스피너가 보임
              // 고로 이 코드를 컴포넌트 mouted라이플 싸이클 훅으로 옮기자
              // bus.$emit('end:spinner');
              next();  // 이걸 써야 /news페이지가 잘 로딩됨.
            })
            .catch(err=>{
              console.log(err)
            });
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage,
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      // 라우터 네비게이션 가드
      beforeEnter: (to, from, next) => {
        // to : 이동할 url의 라우팅 정보
        // from : 현재 url의 라우팅 정보
        // 이 객체 마지막에 next();를 호출해줘야지만 to 라우팅으로 넘어간다.

        bus.$emit('start:spinner');  // 여기서 start:spinner이벤트를 방출하면 App.vue에서 bus.$on으로 받는다.
        store.dispatch('FETCH_LIST', to.name)  // 접근하려는 url라우팅의 정보인 name
            .then(()=>{
              // 스피너 끄는 걸 여기다가 하면 news페이지 가서도 잠깐은 스피너가 보임
              // 고로 이 코드를 컴포넌트 mouted라이플 싸이클 훅으로 옮기자
              // bus.$emit('end:spinner');
              next();  // 이걸 써야 /news페이지가 잘 로딩됨.
            })
            .catch(err=>{
              console.log(err)
            });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(()=>{
              next();
            })
            .catch(err=>{
              console.log(err)
            });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
            .then(()=>{
              next();
            })
            .catch(err=>{
              console.log(err)
            });
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    },
  ]
});