# 🛡️ 학교폭력 대응 가이드

> **"가장 위급한 순간, 텍스트 입력 없이 터치만으로 찾는 내 손안의 변호사"**

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Deployment](https://img.shields.io/badge/Deployment-Google%20Cloud%20Run-blue)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20TypeScript%20%7C%20TailwindCSS-61DAFB)

## 🔗 서비스 접속하기
👉 **[서비스 바로가기 (Live Demo)](https://hakpok.net/)**

---

## 📝 프로젝트 소개 (Overview)

**'학교폭력 대응 가이드'**는 학교폭력 발생 직후, 심리적 공황 상태(Panic)에 빠진 피해 학생과 보호자가 **가장 빠르고 정확하게 올바른 대응 절차**를 찾을 수 있도록 돕는 웹 애플리케이션입니다.

기존의 방대한 매뉴얼(PDF)이나 복잡한 검색 과정을 없애고, **키보드 입력이 필요 없는(No-Typing) 터치 인터페이스**를 통해 누구나 10초 안에 자신의 상황에 맞는 법적/행정적 행동 요령을 확인할 수 있습니다.

---

## 💡 주요 특징 (Key Features)

### 1. 👆 No-Typing 터치 인터페이스
* 텍스트 입력 과정을 전면 배제하여 심리적 부담 제거
* **[대상] → [입장] → [유형] → [상황]**의 4단계 선택 구조(Decision Tree)

### 2. 📚 2025년 개정 법령 완벽 반영
* **교육부 「2025학년도 학교폭력 사안처리 가이드북」** 데이터 탑재
* **학교폭력 전담 조사관** 제도 및 **학교장 자체해결 요건** 체크리스트 제공
* **교사 전용 모드:** 긴급 조치(피해학생 분리) 및 보호자 통보 절차 안내

### 3. 🤖 AI 협업 개발 (Vibe Coding)
* **1인 개발의 혁신:** 기획부터 배포까지 **생성형 AI(Google Gemini)**와 협업
* **Agile Process:** 자연어 기획 → AI 코드 생성 → 검증 및 최적화

---

## 🛠️ 기술 스택 (Tech Stack)

| 분류 | 기술 | 설명 |
| :--- | :--- | :--- |
| **Framework** | React + TypeScript | 확장성과 안정성을 고려한 모던 웹 구조 |
| **Styling** | Tailwind CSS | 빠르고 직관적인 반응형 디자인 구현 |
| **Infra** | Google Cloud Run | 서버 관리 없는 Serverless 배포 |

---

## 📂 프로젝트 구조 (File Structure)

```bash
📦 school-violence-guide
 ┣ 📂 components     # UI 컴포넌트 (버튼, 결과창 등)
 ┣ 📂 services       # 가이드 데이터 로직
 ┣ 📜 App.tsx        # 메인 로직
 ┣ 📜 index.html     # 진입 페이지
 ┗ 📜 README.md      # 프로젝트 설명서
