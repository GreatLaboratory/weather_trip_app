// 이 파일이 바로 하이 오더 컴포넌트
// 하이 오더 컴포넌트란? 컴포넌트 로직을 재사용하는 고오급 기술이다.
// 여기선 news, ask, jobs 전부 같은 형식의 script코드가 있었기에 간소화시키기 위함이다.
import ListView from './ListView'
import bus from "@/utils/bus";

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // news, jobs, ask뷰에서 공용화시켜서 재활용된 코드들
        name : name,

        // 아래 코드는 라우팅 네비게이션 가드 시점으로 빼서 컴포넌트 생성 시점이 아닌 라우터 요청시점으로 데이터를 패치할 수 있다.
        // created() {
        //     bus.$emit('start:spinner');
        //     this.$store.dispatch('FETCH_LIST', this.$route.name)
        //         .then(()=>{
        //             bus.$emit('end:spinner');
        //         })
        //         .catch(err=>{
        //             console.log(err)
        //         });
        // },

        // 라우터 네비게이션 가드에서 데이터 패치 시점이 아닌 컴포넌트 생성 시점에서 불러와야 ux깔끔
        mounted() {
            bus.$emit('end:spinner');
        },

        // 이 후 .vue파일인 껍데기 컴포넌트에다가 위 내용을 들고 가서 NewsView or JobsView or AskView로 변신
        // 코에 걸면 코걸이, 귀에 걸면 귀걸이 느낌
        render(createElement) {
            return createElement(ListView)
        }
    }
}