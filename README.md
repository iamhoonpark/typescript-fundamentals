


# 타입스크립트

<details>
<summary>1. 개발환경 설정</summary>
<div markdown="1">

## 1. 일반 웹개발 프로젝트 타입스크립트 사용방법

#### 01) 플러그인

| Plugin | URL |
| ------ | ------ |
| VS Code | https://code.visualstudio.com/download |kevin-smets/8568070 |
| NodeJS | https://nodejs.org/en/ |
| 컴파일러옵션 | https://www.typescriptlang.org/tsconfig |

#### 02) 타입스크립트 컴파일러 설치
- 컴퓨터마다 한 번만 실행하면 됨

```sh
npm install -g typescript
```

#### 03) 설정파일
- tsconfig.json 생성 후 하기 코드 입력
- ts → js 파일로 컴파일시 옵션을 보통 기입

```sh
{
    "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS"
    }
}
```

#### 04) 파일변환
- 웹브라우저에서는 ts파일을 인식하지 못하여 js파일로 변환 필요
- 터미널에서 해당 커맨드를 입력 후 터미널을 종료하지 않을 경우 변환 작업이 실시간으로 실행

```sh
tsc -w
```

```sh
<script src="변환된파일.js"></script>
```

####  * React 프로젝트
1) 기존 React프로젝트에 설치할 경우
- 해당 작업 폴더경로에서 터미널 오픈 후 커맨드 입력
- js파일을 ts파일로 바꾸기

```sh
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

2) 새로운 React프로젝트
```sh
npx create-react-app my-app --template typescript
```

#### ** Vue 프로젝트
- 작업폴더 경로에서 터미널 오픈 후 커맨드 입력
```sh
vue add typescript
```
- vue 파일에서 타입스크립트를 쓰기 위해 lang 옵션을 켜두고 사용
- vue 프로젝트 내에서도 tsconfig.json 파일을 만들어서 설정
```sh
<script lang="ts">
  
</script>
```
</div>
</details>

<details>
<summary>2. TypeScript 컴파일시 세부설정</summary>
<div markdown="1">

> 타입스크립트 ts파일들은 js파일로 변환할 때 옵션에 대해 세부설정 가능
```sh
{
    "compilerOptions": {
        "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
        "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
        "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
        "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
        "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
        "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
        "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
        "outDir": "./", //js파일 아웃풋 경로바꾸기
        "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
        "removeComments": true, //컴파일시 주석제거 

        "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
        "noImplicitAny": true, //any타입 금지 여부
        "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
        "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
        "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
        "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
        "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

        "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
        "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
        "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
        "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
    }
}
```
</div>
</details>