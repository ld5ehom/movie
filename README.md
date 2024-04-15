
### Start Project
```
$ npm i
$ npm run vercel
```

### Website Build (Developer)
```
$ npm run dev
```

### Reset.css
reset-css cdn  JSDELIVR

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

### Google Fonts
[Oswald](https://fonts.google.com/specimen/Oswald?query=oswa)
[Roboto](https://fonts.google.com/specimen/Roboto?query=robo) 


## Vercel Hosting
`node-fetch` 패키지는 꼭 2버전으로 설치

```
$ npm i -D vercel dotenv
$ npm i node-fetch@2
```

__/vercel.json__

```json
{
  "devCommand": "npm run dev",
  "buildCommand": "npm run build"
}
```

__/package.json__

```json
{
  "scripts": {
    "vercel": "vercel dev"
  }
}
```

### Vercel 개발 서버 실행

Vercel 구성 이후에는 `npm run dev`가 아닌 `npm run vercel`로 개발 서버를 실행

```
$ npm run vercel
```

## Vercel Serverless Functions

프로젝트 루트 경로에 `/api` 폴더를 생성하고,   
API Key 를 노출하지 않도록 서버리스 함수를 작성

__/api/movie.js__

```js
import fetch from 'node-fetch'

const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200)
    .json(json)
}
```

### 환경변수

로컬의 개발용 서버에서 사용할 환경변수를 `.env` 파일에 지정

__/.env__

```dotenv
APIKEY=<MY_OMDb_API_KEY>
```

제품 서버(Vercel 서비스)에서 사용할 환경변수를 지정
Vercel 서비스의 프로젝트 __'Settings / Environment Variables'__ 옵션에서 다음과 같이 환경변수를 지정

