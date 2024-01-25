


## 개발환경 설정

### 1. 일반 웹개발 프로젝트 타입스크립트 사용방법

#### 01. 플러그인

| Plugin | URL |
| ------ | ------ |
| VS Code | https://code.visualstudio.com/download |kevin-smets/8568070 |
| NodeJS | https://nodejs.org/en/ |

#### 02. 타입스크립트 컴파일러 설치
- 컴퓨터마다 한 번만 실행하면 됨

```sh
## 사용한 커맨드
npm install -g typescript
```

#### 03. 코드작성
- tsconfig.json 생성 후 하기 코드 입력

```sh
{
    "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS"
    }
}
```

#### 04. ts파일 js파일로 변환
- 웹브라우저에서는 ts파일을 인식하지 못하여 js파일로 변환 필요

```sh
## 사용한 커맨드
tsc -w
```

```sh
<script src="변환된파일.js"></script>
```

### 2. React 프로젝트 타입스크립트 사용방법

### 3. Vue 프로젝트 타입스크립트 사용방법