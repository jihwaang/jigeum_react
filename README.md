## 개발환경 통합하기

### extenstions

- `auto import` 삭제하기
- `.env` 파일 만들어서 관리하기(깃에 올리면 안되는 kakao api key 등 관리)
- `esLint`, `prettier` 받기

```
The Prettier extension will use 'node_modules/prettier/index.js' for validation, which is installed locally in folder 'front'. Do you allow the execution of this Prettier version including all plugins and configuration files it will load on your behalf?
```

위와같은 문구가 나타나면 allow all 해서 설정들을 local node_modules에 종속하도록 한다.

### vsCode

- `comand` or `ctrl` + `,` -> `Search settings`에 `Emmet: Include Languages` 검색 후

```
item        value
javascript  javascriptreact
```

설정

- 참고:https://velog.io/@cookncoding/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0

### 새로운 절대경로 설정할 때 주의할 점

- craco.config.js 의 webpack->alias에 설정한다.
- jsconfig.json에서 paths를 craco의 alias와 동일하게 설정한다.
