https://movie-sable-nine.vercel.app/#/

### Start Project
```
$ npm i
$ npm run vercel
```


## Vercel Hosting
`node-fetch` -Version 2 

```
$ npm i -D vercel dotenv
$ npm i node-fetch@2
```


### Website Build (Developer)
```
$ npm run dev
```


### Vercel 개발 서버 실행
After configuring Vercel, run `npm run vercel`, Not `npm run dev`

```
$ npm run vercel
```


### Reset.css
reset-css cdn  JSDELIVR

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

### Google Fonts
[Oswald](https://fonts.google.com/specimen/Oswald?query=oswa)
[Roboto](https://fonts.google.com/specimen/Roboto?query=robo) 



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


## Vercel Serverless Functions
Create a `/api` folder in the project root path,
Write a serverless function so as not to expose the API Key

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
Specify environment variables to be used on the local development server in the `.env` file.

__/.env__

```dotenv
APIKEY=<MY_OMDb_API_KEY>
```
Specify environment variables to be used on the product server (Vercel service)
 __'Settings / Environment Variables'__ 
