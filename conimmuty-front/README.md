# 🤯 커니뮤티 : 프론트엔드 - 프로젝트 폴더

커니뮤티에 대한 설명은 아래 주소(레포지토리 루트)의 README를 확인해주세요.
https://github.com/strong-trash/conimmuty-frontend

### 설치 방법
```
git clone https://github.com/strong-trash/conimmuty-frontend.git
cd conimmuty-frontend/conimmuty-front
npm i
code ./
```

### 프론트엔드 사용 기술

* Vue 3 + Vite + vue-router + eslint + prettier
* axios
* bootstrap (input component)
* gh-pages

### 프로젝트 src 디렉토리 구조

src 디렉토리는 아래와 같은 하위 구조를 가집니다.

```
[assets]
└─ [apis] : 반복적으로 사용하는 스크립트의 모음입니다.
    └─ request.js : 백엔드로 자원을 요청하는 스크립트
    └─ yameStorage.js : 작성중인 글을 '헌 글'로 임시저장하는 스크립트

[components]
└─ [atoms] : 하위컴포넌트가 없는 최소단위 컴포넌트들이 있습니다. (버튼, 게시글, 댓글)
└─ [layouts] : 큼직한 레이아웃 컴포넌트들이 있습니다. (헤더, 뷰)

[views] : (View Router에 의해 보여질 View컴포넌트들이 있습니다.)

main.js : 뷰를 구동하는 진입점입니다.
App.vue : 루트 컴포넌트입니다.
router.js : vue-router 작동을 위한 설정을 기술한 파일입니다.
```

### 컴포넌트 계층

아래와 같이 컴포넌트가 구성되어 있습니다.
```
APP
└─ TheHeader
└─ TheView
    └─ (RouterView)
```

RouterView는 아래 다섯 가지의 View컴포넌트를 표시합니다.
```
MainView : 메인화면입니다. 모든 게시글을 보여줍니다.
DetailView : 특정 게시글의 전체 내용과 댓글을 보여줍니다.
NewPostView : 백지 상태에서 또는 헌 글을 바탕으로 게시글을 작성할 수 있는 뷰입니다.
OldPostView : 헌 글의 목록을 보여줍니다. 
              특정 항목을 선택해 헌 글을 바탕으로 게시글을 작성하는 NewPostView로 이동합니다.
NotFoundView : 404코드를 받으면 보여주는 화면입니다.
```
