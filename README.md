# ResuMate Frontend

<img width="3480" height="1402" alt="Image" src="https://github.com/user-attachments/assets/edc06f2b-d0bd-4790-aad4-bfaa32987157" /> <br>

내 기록을 의미 있는 기록으로 <br>
**자기소개서와 이어주는 파트너**

<br>

## 프로젝트 개요

**취업 준비생**들의 어려움을 해소하기 위한 **경험-역량 맵핑 지원** 웹 서비스입니다. <br>
파편화된 경험을 스토리 단위로 기록하고, 기록된 경험을 소프트스킬/핵심 사건 단위로 재료화하여 자기소개서까지 연결하는 플랫폼을 지향합니다.

<br>

## ⚙ 주요 기능

### ✍️ 경험 입력

- STAR 기법(Situation, Task, Action, Result) 기반 고정 질문 항목 제공
- 경험을 표준화된 형식으로 기록하여 체계적 회고 가능

### 🗂️ 경험 관리

- 작성한 경험/회고를 사용자가 지정한 폴더 단위로 관리
- 주제·지원 분야별로 정리해 효율적인 경험 관리 지원

### 🧠 자기소개서 요소 추출

- LLM(Open AI) 활용
- 선택한 회고에서 자기소개서 작성에 활용 가능한 요소 추출
- 불필요한 서술 제거 및 핵심 문장 정리

### 🔐 OAuth2.0 소셜 로그인

- OAuth2.0 기반 소셜 로그인 지원
- 간편하고 안전한 사용자 인증 제공

<br>

## 🛠 기술 스택

- **Language:** TypeScript
- **Library:** React, React Router DOM, Axios
- **Styling:** Tailwind CSS, shadcn/ui
- **State Management:** Zustand
- **Code Quality**: ESLint, Prettier
- **Deployment**: Vercel

<br>

## 🗂️ 폴더 구조

```
src/
 ├─ components/     # 재사용 컴포넌트
 ├─ pages/          # 페이지 단위 컴포넌트
 ├─ hooks/          # 커스텀 훅
 ├─ layouts/        # 페이지 레이아웃
 ├─ services/       # API 호출 함수
 ├─ store/          # Zustand 상태 관리
 ├─ styles/         # 커스텀 스타일 정의
 ├─ types/          # TypeScript 타입 정의
 └─ utils/          # 공통 유틸리티

```

<br>
 ### 컴포넌트

```
src/
 └─ components/
     ├─ common/        # 공통 컴포넌트
     ├─ Home/          # 메인 홈페이지 구성 컴포넌트
     ├─ Login/         # 로그인 관련 컴포넌트
     ├─ Material/      # 자소서 소재 관련 컴포넌트
     ├─ Retrospect/    # 회고 관련 컴포넌트
     └─ Sidebar/       # 사이드바 관련 컴포넌트
```

<br>

# 링크

### 백엔드

[resumate-backend](https://github.com/career-pirates/resumate-backend)

<br>
