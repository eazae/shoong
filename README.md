# 슝

<h3> 블록체인 간편 송금 서비스 </h3>

> 어렵게만 느껴졌던 블록체인
> 이제는 간편하게 클릭 몇번으로 송금할 수 있습니다!
> 쉽고 빠른 송금 서비스 슝!

## 📎  프로젝트 목차

---

- [슝](#슝)<br/>
- [프로젝트 목차](#프로젝트-목차)
  - [1️⃣ 프로젝트 소개](#1️⃣-프로젝트-소개)
    - [기술 스택](#기술-스택)
  - [2️⃣ 프로젝트 파일 구조](#2️⃣-프로젝트-파일-구조)
  - [3️⃣ 프로젝트 산출물](#3️⃣-프로젝트-산출물)
  - [4️⃣ 프로젝트 빌드](#4️⃣-프로젝트-빌드)

## 1️⃣ 프로젝트 소개

---

1. 일정 : 22.04.11 - 22.05.20 (총 6주)
   - [세부 일정](https://important-leopon-e7f.notion.site/8e8d35b0b4d94b5ca450f576b2507a5c?v=ee14149371de443fb485835be69bcda4)
2. 인원 (총 6인)
   - 김승현 : Front-end, 팀장
   - 박세진 : Back-end
   - 박종선 : Smart-Contract
   - 백승윤 : Front-end
   - 신지우 : Front-end
   - 오재우 : Back-end

### 기술 스택

1. 이슈관리 : Jira
2. 형상관리 : Gitlab
3. 커뮤니케이션 : Mattermost, Notion
4. 개발환경
   - OS : Windows 10, Mac
   - IDE
     - Visual Studio Code
     - IntelliJ
   - Frontend
     - React-Native
   - Backend
     - Spring
     - Kotlin
   - Database : Mongo DB
   - CI/CD
     - Jenkins
     - aws ec2
     - Docker

## 2️⃣ 프로젝트 폴더 구조


- Back
```

C:.
├─gradle
│  └─wrapper
└─src
    ├─main
    ├─kotlin
    │  └─com
    │      └─ssafy     
    │          └─a103
    │              └shoong
    │                  ├─config
    │                  ├─controller
    │                  ├─model
    │                  ├─repository
    │                  ├─requestBody
    │                  ├─responseBody
    │                  ├─scheduler
    │                  └─service
    └─resources
```
- Front

```
C:.
├─.expo
├─android
│  ├─app
│  │  └─src
│  │      └─main
│  │          ├─java
│  │          │  └─com
│  │          │      └─shoong
│  │          └─res
│  │              ├─drawable
│  │              ├─mipmap-anydpi-v26
│  │              ├─mipmap-hdpi
│  │              ├─mipmap-mdpi
│  │              ├─mipmap-xhdpi
│  │              ├─mipmap-xxhdpi
│  │              ├─mipmap-xxxhdpi
│  │              └─values
│  ├─build
│  │  └─kotlin
│  │      └─sessions
│  └─gradle
│      └─wrapper
├─app
│  ├─atoms
│  ├─components	// 컴포넌트
│  ├─config	// 설정파일
│  ├─containers	// 컴포넌트를 바탕으로 구성하는 컨테이너
│  ├─screens	// 컨테이너를 바탕으로 구성하는 스크린
│  ├─services	
│  │  ├─api	// api 관련
│  │  ├─notifications
│  │  ├─sens	
│  │  └─web3
│  ├─theme	// 테마관련(컬러, 폰트, ...)
│  └─utils	// 외부 라이브러리
├─assets	// 활용 이미지 및 폰트파일 등
├─ios
│  ├─Shoong
│  │  ├─Images.xcassets
│  │  │  ├─AppIcon.appiconset
│  │  │  ├─SplashScreen.imageset
│  │  │  └─SplashScreenBackground.imageset
│  │  └─Supporting
│  ├─Shoong.xcodeproj
│  │  └─xcshareddata
│  │      └─xcschemes
│  └─Shoong.xcworkspace
│      └─xcshareddata
│          └─swiftpm
├─storybook
│  └─stories
│      ├─Button
│      ├─CenterView
│      └─Welcome
```
## 3️⃣ 프로젝트 산출물

---

- 프로젝트 관리 : [Notion](https://important-leopon-e7f.notion.site/TEAM-SHOONG-6671e3cd539c4146b273fed54ccfa520)
- 외부 서비스 : [외부 서비스](https://lab.ssafy.com/s06-final/S06P31A103/-/blob/develop/exec/2.%20%EC%99%B8%EB%B6%80%20%EC%84%9C%EB%B9%84%EC%8A%A4.pdf)
- 시연 시나리오 : [시연 시나리오](https://lab.ssafy.com/s06-final/S06P31A103/-/blob/develop/exec/4.%20%EC%8B%9C%EC%97%B0%20%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4.pdf)

## 4️⃣ 프로젝트 빌드

---

- [포팅 메뉴얼](https://lab.ssafy.com/s06-final/S06P31A103/-/blob/develop/exec/1.%20%ED%8F%AC%ED%8C%85%20%EB%A7%A4%EB%89%B4%EC%96%BC.pdf)
