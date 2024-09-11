# MBTI TEST

## 배포 링크

[MBTI TEST](https://mbti-test-sooty-three.vercel.app/)

## 프로젝트 구조

<details>
<summary>접었다 펴기</summary>

```
mbtitest
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ apiInstance.js
│  │  ├─ auth.js
│  │  ├─ questions.js
│  │  └─ testResult.js
│  ├─ components
│  │  └─ AuthForm.jsx
│  ├─ context
│  │  └─ AuthContext.jsx
│  ├─ hooks
│  │  ├─ queries
│  │  │  ├─ auth
│  │  │  │
│  │  │  │
│  │  │  │
│  │  │  └─ result
│  │  │     ├─ useDeleteResultQuery.js
│  │  │     ├─ useResultQuery.js
│  │  │     └─ useUpdateVisibilityQuery.js
│  │  └─ useAuth.js
│  ├─ layout
│  │  ├─ Header.jsx
│  │  └─ Layout.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Home
│  │  │  ├─ components
│  │  │  │  └─ HomeBox.jsx
│  │  │  └─ Home.jsx
│  │  ├─ Login
│  │  │  └─ Login.jsx
│  │  ├─ MyPage
│  │  │  └─ MyPage.jsx
│  │  ├─ Result
│  │  │  ├─ components
│  │  │  │  ├─ ResultItem.jsx
│  │  │  │  └─ ResultList.jsx
│  │  │  └─ Result.jsx
│  │  ├─ SignUp
│  │  │  └─ SignUp.jsx
│  │  └─ Test
│  │     ├─ components
│  │     │  ├─ TestForm.jsx
│  │     │  └─ TestResult.jsx
│  │     └─ Test.jsx
│  ├─ reset.css
│  ├─ shared
│  │  └─ Router.jsx
│  ├─ store
│  │  └─ useTestStore.js
│  └─ utils
│     ├─ mbtiCalculator.js
│     └─ mbtiInfo.js
├─ tailwind.config.js
├─ vercel.json
├─ vite.config.js
└─ yarn.lock

```

</details>

## 개발 환경

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 개발 기간

24.09.05 ~ 24.09.10

## 주요 기능

### 로그인/ 회원가입

회원가입 및 로그인이 가능한 페이지입니다.

### 마이페이지

닉네임을 변경할 수 있는 마이페이지입니다.

### 테스트

20가지 문항에 대해서 답을 한 후 제출 시 본인의 MBTI 결과를 확인 할 수 있고,  
다시 테스트하기를 통해 다시 테스트하기 가능

결과보기를 통해 테스트 결과 페이지로 이동

### 테스트 결과

json-server를 사용한 서버를 glitch에 배포 후 해당 서버에 결과물을 저장하고 출력합니다. 본인의 결과 검사는 공개여부를 설정할 수 있으며 삭제가 가능합니다.

### 트러블 슈팅

[useMutation을 사용하며 발생한 문제](https://velog.io/@leekee0905/TIL-MBTI-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)
