<template></template>




1

2

3

4

0

KB IT's Your Life 6기














전공반-16회차




36




메시지

캔버스 추가

파일

고정

캔버스리스트책갈피 폴더
내역 로드 중...

손영호_전공 16회차
 님에 의해 고정됨


손영호_전공 16회차
  오후 1:01
<오늘 회식 참석 여부>
회식 참석 여부 조사를 실시합니다~
회식 예약 인원이 20명이었는데, 지금 세보니 좀 더 많은 것 같아서요..!
참석 : :o:
불참 : :x:
투표 부탁드립니다~
?????????? (편집됨) 
:o:
28
:x:
1
:everythings_fine_parrot:
2
:cuteq:
2
:3045-cattomg:
2
:침_흘리는_얼굴:
2
:siuuu:
1
:둘:
1
:여덟:
1



2개의 댓글
오늘 마지막 댓글이 달린 시간: 오후 1:06스레드 보기

전공 16회차_최유라 강사
 님에 의해 고정됨


전공 16회차_최유라 강사
  오후 1:04
https://www.notion.so/02-Vue-js-1b3abd06af5380c697edf2e32bdbc948
image.png
 
image.png




2개의 댓글
오늘 마지막 댓글이 달린 시간: 오후 2:15스레드 보기


전공 16회차_최유라 강사
  오후 1:07
Q1. vue-router를 사용하여 SPA를 구성할 때 사용하는 객체가 아닌 것은?
createApp
createRouter
createWebHistory
ReactDOM.render
routes
:넷:
23

1:07
Q2. vue-router에서 경로와 컴포넌트를 연결하는 속성은?
link
map
route
path
uri
:셋:
1
:넷:
23

1:08
Q3. 다음 중 <RouterLink> 태그의 올바른 예시는?
<router-link href="/">Home</router-link>
<router-link path="/">Home</router-link>
<router-link to="/">Home</router-link>
<router-link go="/">Home</router-link>
<router-link src="/">Home</router-link>
:셋:
24

1:08
Q4. 다음 중 동적으로 import되는 컴포넌트를 사용하는 방식으로 옳은 것은?
component: import('../views/AboutView.vue')
component: () => import('../views/AboutView.vue')
component: new AboutView()
component: async AboutView()
component: () => require('../views/AboutView.vue')
:둘:
23

1:08
Q5. vue 프로젝트에서 router 객체를 앱에 등록하는 올바른 방법은?
app.router(router)
app.add(router)
router.use(app)
app.use(router)
router.mount(app)
:넷:
24

1:09
Q6. <router-view>의 역할은 무엇인가요?
라우팅 정보를 보여준다
현재 경로에 해당하는 컴포넌트를 렌더링한다
링크를 생성한다
상태관리를 한다
API 요청을 보낸다
:둘:
23

1:09
Q7. vue-router를 사용할 때 라우터 설정 파일의 일반적인 위치는?
src/routes/index.js
src/pages/index.js
src/views/router.js
src/router/index.js
public/router.js
:넷:
24

1:09
Q8. 동적 라우트를 올바르게 표현한 것은?
/members/id
/members&:id
/members-:id
/members/:id
/members?id=1
:넷:
23

1:10
Q9. useRoute()를 통해 접근할 수 없는 속성은?
path
params
name
component
query
:넷:
24

1:10
Q10. 다음 중 <router-view name="left">에 컴포넌트를 연결하는 올바른 방법은?
component: LeftComponent
left: LeftComponent
components: { left: LeftComponent }
views: { left: LeftComponent }
components.left = LeftComponent
:셋:
24

1:11
Q11. 명명된 라우트(Named Route)의 장점은?
경로를 자동으로 생성해준다
페이지가 자동으로 새로고침된다
하드코딩 없이 이동이 가능하다
모든 컴포넌트를 props로 넘긴다
데이터를 저장하는 용도로 사용된다
:셋:
24

1:11
Q12. 명명된 라우트를 사용해 멤버 상세 페이지로 이동하는 올바른 방식은?
:to="'/members/' + id"
:href="'/members/' + id"
:to="{ id: id }"
:to="{ name: 'members/id', params: { id: id } }"
:link="{ path: '/members', id: id }"
:넷:
24

1:12
Q13. 중첩 라우트에서 자식 컴포넌트를 출력하기 위한 태그는?
<NestedView />
<router-outlet />
<router-child />
<router-view />
<child-router />
:셋:
2
:넷:
23

1:12
Q14. 명명된 뷰(Named View)는 어떤 기능을 제공하는가?
하나의 컴포넌트만 렌더링할 수 있다
라우트 변경 시 전체 페이지 새로고침
다수의 router-view에 이름을 붙여 여러 컴포넌트 렌더링
라우트 간 데이터 전송 기능
라우트 이동 시 트랜지션 효과
:셋:
24

1:13
Q15. 명명된 뷰에서 기본 출력 영역에 사용되는 키는?
main
base
default
view
primary
:셋:
24

1:13
Q16. vue-router에서 params를 통해 전달되는 값의 특징은?
항상 문자열이다
props로 전달되면 숫자로 바뀐다
query와 동일한 방식이다
페이지를 새로고침하면 사라진다
URL에 표시되지 않는다
:일:
24

1:13
Q17. 다음 중 JSON 파일을 import 하는 올바른 방법은?
fetch('data.json')
import members from '@/members.json'
load('members.json')
require('members.json')
include 'members.json'
:둘:
24

1:14
Q18. 라우트 설정 시 사용할 수 없는 속성은?
path
component
name
children
style
:다섯:
24

1:14
Q19. <router-link>에 스타일을 적용하는 일반적인 방법은?
route 설정에서 style 속성 지정
v-bind:style 직접 지정
CSS 클래스 사용
라우트 객체에 스타일 속성 추가
<a> 태그로 바꿔 사용
:셋:
23

1:15
Q20. router.push() 메서드의 주된 목적은?
라우터 객체를 리셋한다
페이지를 새로고침한다
새로운 경로로 이동한다
현재 경로를 콘솔에 출력한다
라우터 설정을 업데이트한다
:셋:
24

새 항목


전공 16회차_최유라 강사
  오후 2:02
:흰색_확인_표시: 1단계 과제 – vue-router 기초 라우팅 + Header 컴포넌트
:아이폰: 앱 이름: MiniMall (미니몰)
간단한 쇼핑몰 SPA를 만드는 프로젝트입니다.
:압정: 문제 1: 기본 라우팅 + 메뉴 구성
:다트: 과제 목표
MiniMall 프로젝트의 기본 라우팅 구조를 만들고,
화면 상단에 메뉴를 구성하는 Header 컴포넌트를 제작하세요.
:메모: 요구사항
1. 라우팅 구조 설정
/: Home 페이지
/products: 상품 목록 페이지
/cart: 장바구니 페이지
2. 각 경로에 대응하는 컴포넌트 생성
Home.vue, Products.vue, Cart.vue (모두 pages/ 폴더에 생성)
3. Header.vue 컴포넌트 구현
상단 메뉴 구성: 홈 | 상품목록 | 장바구니
각 메뉴는 <router-link>로 연결
메뉴 클릭 시 해당 페이지로 이동
4. 레이아웃 구성
App.vue에 Header 컴포넌트를 상단에 배치
본문 영역에는 <router-view />를 통해 페이지가 렌더링
:파일_폴더: 폴더 구조 예시
src/
├── components/
│   └── Header.vue
├── pages/
│   ├── Home.vue
│   ├── Products.vue
│   └── Cart.vue
├── router/
│   └── index.js
├── App.vue
└── main.js
3개 파일
 
image.png


image.png


image.png













전공반-16회차에 메시지 보내기









Shift + Enter 키를 눌러 새 행을 추가합니다



<script>
export defaualt {
name : "Navbar"
}
</script>
