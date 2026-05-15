import { CardType, TagLabel } from "@/tokens/design-tokens";

export interface DetailItem {
  label: string;    // e.g. "배경/문제", "역할", "기술", "성과"
  content: string;
}

export interface CardItem {
  id: string;
  type: CardType;
  // ── Compact (항상 표시) ─────────────────────────
  compactTitle: string;     // 짧고 스캔 가능한 제목
  subtitle: string;
  period: string;
  achievement: string;      // 한 줄 성과 ≤90자
  tags: TagLabel[];
  // ── Expanded (상세보기) ─────────────────────────
  formalTitle?: string;     // 정식 제목 (compact와 다를 때만)
  details: DetailItem[];    // 배경/역할/기술/성과 섹션
  link?: string;
  linkLabel?: string;
}

// ─── All cards (newest-first) ───────────────────────────────────────────────
export const allCards: CardItem[] = [

  // ── EXPERIENCE ──────────────────────────────────────────────────────────
  {
    id: "langagi",
    type: "Experience",
    compactTitle: "Clinical Reasoning Agent (LangAGI)",
    subtitle: "Research Intern | Clinical Reasoning · Yonsei University",
    period: "Jun 2025 – Jan 2026",
    achievement: "VLM/LLM CoT 의료 진단 에이전트 개발 · Embedding 기반 음성 명령 최저 지연 달성",
    tags: ["LLM", "Clinical", "Computer Vision"],
    details: [
      { label: "배경/문제", content: "의료 진단 AI의 rationale-diagnosis 일관성 부족 문제 및 의료기기 인터페이스 접근성 개선 필요" },
      { label: "역할", content: "VLM/LLM 기반 Chain-of-Thought 임상 추론 에이전트 연구 (OCT 데이터, label-noise 감소, rationale-diagnosis 일관성 유지), 의료기기 음성→명령 매핑 파이프라인 구축" },
      { label: "기술", content: "VLM/LLM (CoT), OCT 의료 데이터, Embedding 벡터, STT(Speech-to-Text), KV Cache, 추론 최적화 비교 실험" },
      { label: "성과", content: "Embedding 기반 검색이 KV Cache 등 대비 최저 지연 달성. 의료기기 음성 명령 매핑 파이프라인 구현 완료" },
    ],
    link: "https://langlab.yonsei.ac.kr/",
    linkLabel: "Lab Website",
  },
  {
    id: "medirama",
    type: "Experience",
    compactTitle: "LLM Clinical Scientist (Medirama)",
    subtitle: "LLM Clinical Scientist",
    period: "Jan 2025 – Dec 2025",
    achievement: "GPT-3.5/4o-mini 임상 데이터 파인튜닝 · 임상 문서화 자동화 파이프라인 배포",
    tags: ["LLM", "Clinical", "Data Science"],
    details: [
      { label: "배경/문제", content: "임상시험 문서 작성의 비효율성 — 대량의 프로토콜·시험 데이터를 구조화된 임상 문서로 자동 변환 필요" },
      { label: "역할", content: "GPT-3.5/4o-mini 파인튜닝 총괄, 구조화 출력 설계(JSON/MD), 역할 기반 컨텍스트 엔지니어링(assistant/consultant), zero/few-shot 일관성 확보" },
      { label: "기술", content: "GPT-3.5/4o-mini (fine-tuning), clinicaltrials.gov API, Protocol JSONL, Prompt Engineering, Domain-specific NLP" },
      { label: "성과", content: "임상 문서화 자동화 텍스트 생성 파이프라인 구축 및 배포. 구조화 출력 일관성 확보" },
    ],
    link: "https://www.medirama.co.kr/en/",
    linkLabel: "Company",
  },
  {
    id: "ysal-research",
    type: "Experience",
    compactTitle: "삼성 썬더스 스포츠 AI 분석",
    subtitle: "Industry Research Intern · Samsung Thunders × YSAL",
    period: "Aug 2024 – Dec 2025",
    achievement: "KBL GMM·RF 모델링 + OpenCV 비디오 처리 + React+TS 대시보드 구현 및 GCP 배포",
    tags: ["Sports", "Data Science", "Computer Vision"],
    details: [
      { label: "배경/문제", content: "프로 농구 전략 수립을 위한 데이터 기반 분석 시스템 부재. KBL 통계·비디오 데이터 활용 미흡" },
      { label: "역할", content: "GMM 포지션 재분류, RF 슛 성공·기대 점수 모델링, 상대팀 벤치마킹, OpenCV 비디오 처리·플레이 패턴 추출, React+TS 대시보드 단독 구현" },
      { label: "기술", content: "GMM, Random Forest, Clustering, OpenCV (비디오 처리), React, TypeScript, Firebase, GCP, Synergy/크롤링" },
      { label: "성과", content: "KBL 통계 ~500×200 기반 전술 분석 시스템 구축. 내부 보고용 대시보드 GCP 배포 완료. 뉴스 보도" },
    ],
    link: "https://v.daum.net/v/WP9vTjqy3H?f=p",
    linkLabel: "뉴스 보도",
  },
  {
    id: "edgeai",
    type: "Experience",
    compactTitle: "Vision-Language 프롬프트 러닝 (Edge AI)",
    subtitle: "Research Intern · Yonsei Edge AI Lab",
    period: "Aug 2024 – Dec 2024",
    achievement: "PromptSRC 실험 및 base-to-novel 일반화 성능 분석 완료",
    tags: ["Computer Vision", "Data Science"],
    details: [
      { label: "배경/문제", content: "Vision-Language 모델의 downstream task 전이 성능 향상을 위한 프롬프트 러닝 기법 연구" },
      { label: "역할", content: "VL 프롬프트 러닝 문헌 서베이, PromptSRC 가중치 분포·손실 비율 실험 설계 및 수행, 결과 분석" },
      { label: "기술", content: "PromptSRC, Vision-Language Model, Prompt Learning, base-to-novel generalization 분석" },
      { label: "성과", content: "Base-to-novel 일반화 성능 체계적 분석 완료. 재현 가능한 ML 실험 파이프라인 구축" },
    ],
  },

  // ── PROJECT ─────────────────────────────────────────────────────────────
  {
    id: "ysal-dashboard",
    type: "Project",
    compactTitle: "YSAL 내부 분석 대시보드",
    subtitle: "Frontend Engineer — React + TypeScript",
    period: "2024 – 2025",
    achievement: "삼성 썬더스 분석 결과 보고용 React+TS 대시보드 단독 구현, Firebase-GCP 배포",
    tags: ["Sports", "UI/UX", "Data Science"],
    details: [
      { label: "배경/문제", content: "산학협력 분석 결과를 구단에 효과적으로 보고하기 위한 인터랙티브 대시보드 필요" },
      { label: "역할", content: "프론트엔드 단독 설계·구현·배포. GMM·RF 모델 시각화, 팀 전술 클러스터링 결과 인터랙티브 표현" },
      { label: "기술", content: "React, TypeScript, Firebase, GCP (배포)" },
      { label: "성과", content: "내부 보고용 대시보드 완성 및 GCP 배포. 팀 내 데이터 커뮤니케이션 효율화" },
    ],
  },
  {
    id: "unimade",
    type: "Project",
    compactTitle: "Uni-Made PM",
    subtitle: "Product Manager",
    period: "—",
    achievement: "ML·프론트엔드 통합 제품 기획 및 GitHub Organization 프로젝트·로드맵 관리",
    tags: ["PM/Product", "Service"],
    details: [
      { label: "역할", content: "Product Manager로 ML·프론트엔드 통합 제품 기획 및 기능 조율, GitHub Organization 내 프로젝트 구조·로드맵 관리" },
      { label: "기술", content: "제품 기획, GitHub Organization 관리" },
    ],
    link: "https://github.com/Uni-Made",
    linkLabel: "GitHub Org",
  },
  {
    id: "umc-msmg",
    type: "Project",
    compactTitle: "UMC-MSMG FE · PM",
    subtitle: "Frontend Engineer · PM",
    period: "—",
    achievement: "UMC 연계 서비스 프론트엔드 개발 및 제품 관리 겸임",
    tags: ["PM/Product", "Service", "UI/UX"],
    details: [
      { label: "역할", content: "Frontend 개발 및 PM 겸임. UMC 연계 서비스 프론트엔드 구현 및 제품 방향 조율" },
      { label: "기술", content: "React, TypeScript" },
    ],
    link: "https://github.com/UMC-MSMG",
    linkLabel: "GitHub Org",
  },
  {
    id: "workstation",
    type: "Project",
    compactTitle: "연酒 서비스 PM & Frontend",
    subtitle: 'Service PM · Frontend Engineer · Workstation "연酒"',
    period: "Aug – Dec 2022",
    achievement: "주류 커뮤니티 서비스 기획 PM + React·JS 프론트엔드 구현 (연세 창업지원단)",
    tags: ["PM/Product", "Service", "UI/UX"],
    details: [
      { label: "배경/문제", content: "주류 정보·커뮤니티 결합 서비스 부재. 연세대 창업지원단 지원을 통한 실제 서비스 개발 기회" },
      { label: "역할", content: "서비스 기획 PM 및 React·JavaScript 프론트엔드 구현 총괄. 기획~배포까지 주도적 수행" },
      { label: "기술", content: "React, JavaScript, 서비스 기획" },
      { label: "성과", content: "서비스 기획~배포까지 완전 수행 완료" },
    ],
  },
  {
    id: "lgaimers",
    type: "Project",
    compactTitle: "난임 환자 임신 예측 (LG Aimers)",
    subtitle: "참가자 · LG Aimers Data Intelligence",
    period: "Jan – Feb 2025",
    achievement: "의료 데이터 ~70×256k rows 기반 난임 환자 임신 성공 여부 예측 모델 개발",
    tags: ["Data Science", "Clinical"],
    details: [
      { label: "배경/문제", content: "난임 환자의 임신 성공 여부 예측으로 치료 방향 개선 지원 (의료 AI 해커톤)" },
      { label: "역할", content: "데이터 분석, 전처리, 예측 모델링" },
      { label: "기술", content: "Scikit-learn, pandas, Medical Data (~70×256k rows)" },
      { label: "성과", content: "의료 해커톤 참가 완료. 대용량 의료 데이터 기반 예측 모델 실습" },
    ],
  },

  // ── LEADERSHIP ───────────────────────────────────────────────────────────
  {
    id: "ysal-president",
    type: "Leadership",
    compactTitle: "YSAL 학회장 · 삼성 썬더스 농구팀장",
    subtitle: "President · 삼성 썬더스 Basketball Team Leader",
    period: "Aug 2024 – Dec 2025",
    achievement: "학회 운영·신입 온보딩 총괄 + 삼성 썬더스 산학협력 데이터팀 리드",
    tags: ["PM/Product", "Sports"],
    details: [
      { label: "역할", content: "학회장(President)으로 YSAL 운영·프로젝트 조율·신입 온보딩 총괄. 삼성 썬더스 산학협력 농구팀 데이터 수집·모델링·보고 리드" },
      { label: "성과", content: "YSAL × 삼성 썬더스 산학협력 뉴스 보도" },
    ],
    link: "https://v.daum.net/v/WP9vTjqy3H?f=p",
    linkLabel: "뉴스 보도",
  },
  {
    id: "umc",
    type: "Leadership",
    compactTitle: "UMC 7기 서울서부 지부장",
    subtitle: "7th · 서울서부 지부장 / 연세대 회장 / PM 파트장",
    period: "Mar 2024 – Aug 2024",
    achievement: "서울서부 지부 총괄·연세대 챕터 회장·PM 파트장 겸임, Server-Spring 수료",
    tags: ["PM/Product", "Service"],
    details: [
      { label: "역할", content: "서울서부 지부 총괄 및 연세대 챕터 회장 겸임. PM 파트장으로 파트 운영 및 커리큘럼 설계 담당" },
      { label: "성과", content: "UMC 7기 활동 완료. Server-Spring 파트 수료" },
    ],
    link: "https://umc.makeus.in/",
    linkLabel: "UMC",
  },
  {
    id: "and1",
    type: "Leadership",
    compactTitle: "AND1 회장 (연세대 농구 동아리)",
    subtitle: "회장 · AND1 연세대 농구 직관 동아리",
    period: "Jan 2024 – Jan 2025",
    achievement: "연세대 농구 직관 동아리 AND1 회장, 동아리 운영 및 정기 행사 기획·진행",
    tags: ["PM/Product", "Sports"],
    details: [
      { label: "역할", content: "동아리 운영 및 정기 행사 기획·진행 총괄" },
    ],
  },
  {
    id: "cscouncil",
    type: "Leadership",
    compactTitle: "연세대 CS 집행위 기획부장",
    subtitle: "기획부장 · 연세대 컴퓨터과학과 집행위원회",
    period: "Mar 2021 – Mar 2023",
    achievement: "학과 행사·프로그램 기획 총괄 (2021–2023, 2년)",
    tags: ["PM/Product", "Service"],
    details: [
      { label: "역할", content: "학생회 기획부장으로 학과 행사·프로그램 기획·운영 총괄" },
    ],
  },

  // ── AWARD ────────────────────────────────────────────────────────────────
  {
    id: "sojong",
    type: "Award",
    compactTitle: "Edge Distributed Inference (소종 우수상)",
    formalTitle: "Distributed Inference in Heterogeneous Edge Devices",
    subtitle: "우수상 · 연세대 소프트웨어종합설계 (24-2) · 팀 분산기계",
    period: "2024-2",
    achievement: "Kubernetes + ResNet50 분산 추론 파이프라인 · Input Channel Pruning 통신 오버헤드 42% 감소",
    tags: ["Computer Vision", "Data Science"],
    details: [
      { label: "배경/문제", content: "단일 서버에서 대규모 AI 모델 운용 한계 → Kubernetes 클러스터로 이기종 Edge 디바이스 간 분산 추론 구현. Input Channel Pruning으로 노드 간 전송 오버헤드 최소화" },
      { label: "역할", content: "팀 분산기계 (4인: 정현기·성현준·남의서·윤관, 지도: 한승재 교수). PyTorch ResNet50 레이어 분할 파이프라이닝, Kubernetes EC2 클러스터 구축(t3.small×1 + t3.medium×4), TCP 소켓 통신 구현, Input Channel Pruning 실험" },
      { label: "기술", content: "PyTorch (ResNet50 Convolution Layer 병렬화), Kubernetes (EC2, VPC/subnet), TCP 소켓, Input Channel Pruning (L1 norm 기반 structured pruning), AWS EC2" },
      { label: "성과", content: "100% pruning 시 통신 오버헤드 기존 대비 약 42% 감소(58% 수준). 직렬/병렬 실행 시간 측정 완료. 소프트웨어종합설계 우수상 수상 (2024-2, 연세대)" },
    ],
  },
  {
    id: "skt",
    type: "Award",
    compactTitle: "SKT DEVOCEAN 배포 자동화 프로젝트 (수료)",
    formalTitle: "배포 자동화 프로젝트 — All in One",
    subtitle: "팀장 수료 · SKT DEVOCEAN YOUNG 2기",
    period: "Jan – Nov 2023",
    achievement: "GitHub Actions CI + Docker + Kubernetes(minikube) + Helm Chart 통합 배포 자동화 구현",
    tags: ["Service", "PM/Product"],
    details: [
      { label: "배경/문제", content: "개발 이후 배포 프로세스의 비효율성 해소 및 전체 CI/CD 배포 자동화 파이프라인 구축 목표" },
      { label: "역할", content: "팀장으로 DEVOCEAN YOUNG 2기 참여 및 수료. 배포 자동화 아키텍처 설계, 팀 과제 조율" },
      { label: "기술", content: "GitHub Actions (Flutter CI, build.yml), Docker (컨테이너 이미지, arm64), Kubernetes (minikube, Helm Chart, LoadBalancer, Replica Sets), Spring+Tomcat, mySQL, AWS S3, Fastlane" },
      { label: "성과", content: "git push → CI → 빌드(appbundle) → Google Play/App Store 연결 + k8s 배포까지 완전 자동화 파이프라인 구현. 2023.11.17 수료 (SK텔레콤 대표이사 수료증)" },
    ],
    link: "https://devocean.sk.com/community/detail.do?ID=165460&boardType=DEVOCEAN_YOUNG&page=1",
    linkLabel: "DEVOCEAN 포스트",
  },
  {
    id: "sonol",
    type: "Award",
    compactTitle: "네이버 소놀 AI 교육봉사 (전국 대상)",
    subtitle: "대상 · 팀장 · Naver Connect Foundation",
    period: "Dec 2022",
    achievement: "AI 교육봉사 팀 리드, Naver Connect Foundation 전국 대상 수상",
    tags: ["Service", "PM/Product"],
    details: [
      { label: "역할", content: "AI 교육봉사 팀장으로 프로그램 기획 및 운영 총괄. Naver \"소프트웨어야 놀자\" 봉사 활동 수행" },
      { label: "성과", content: "전국 대상(Grand Prize) 수상 — Naver Connect Foundation" },
    ],
  },
  {
    id: "finsec",
    type: "Award",
    compactTitle: "마이데이터 거래 플랫폼 (금융보안 최우수)",
    formalTitle: "DiD, 영지식 증명을 활용한 정보주체 권리보장 마이데이터 거래 플랫폼",
    subtitle: "최우수상 · 2022 대학생 금융보안캠프 아이디어 경연 · 3조",
    period: "Jul – Aug 2022",
    achievement: "DID + 영지식 증명(ZKP) 활용 마이데이터 거래 플랫폼 제안 · 아이디어 경연 최우수상",
    tags: ["Security", "Service"],
    details: [
      { label: "배경/문제", content: "국내 마이데이터 사업의 한계 분석 — 개인정보 전송요구권 행사 시 정보주체의 명시적 동의·익명성 보장 미흡. GDPR·신용정보법·데이터3법 대비 법적 공백" },
      { label: "역할", content: "3조 (4인: 송정우·이우진·박혜정·남의서). 플랫폼 아이디어 기획 및 설계 참여. 금융보안원·금융보안포럼·금융정보보호협의회 공동 주최 캠프 이수 (2022.7.4~8.12, 연세대학교 소속)" },
      { label: "기술", content: "DID (명시적 동의 기반), 영지식 증명 — ZKRP(범위 증명)·ZKSM(집합 원소 증명), Blockchain Smart Contract (계약 불변성), t-근접성 모델 (익명 처리), Lagrange's four-square theorem" },
      { label: "성과", content: "정보주체 동의 여부에 따라 DID 또는 영지식 증명 선택적 활용하는 마이데이터 거래 플랫폼 제안. 2022 대학생 금융보안캠프 아이디어 경연 최우수상 (제22-2002호, 금융보안원 원장 수여)" },
    ],
    link: "https://boannews.com/media/view.asp?idx=109108&page=326&kind=2",
    linkLabel: "금융보안캠프 보도",
  },
];

// ─── Education ──────────────────────────────────────────────────────────────
export const education = [
  {
    school: "연세대학교",
    degree: "인공지능학과 석박통합과정",
    period: "2026 –",
    note: "",
  },
  {
    school: "연세대학교",
    degree: "컴퓨터과학 학사 졸업",
    period: "2021 – 2026.02",
    note: "GPA 3.01 / 4.50",
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────
export const skills = {
  languages: ["Python", "SQL", "JavaScript", "TypeScript"],
  mlData:    ["PyTorch", "Scikit-learn", "pandas", "OpenCV", "GMM", "Random Forest", "Clustering", "Transformer NLP"],
  llmAi:     ["LLM Fine-tuning", "Prompt Engineering", "VLM", "Embedding / Vector Retrieval", "KV Cache Optimization"],
  frontend:  ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  infra:     ["Firebase", "GCP", "AWS", "Kubernetes", "Docker", "Linux", "Git"],
  tools:     ["Notion", "Figma", "VS Code"],
  certs:     ["DAsP (데이터아키텍처 준전문가)", "ADsP (데이터분석 준전문가)"],
};

// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  nameEn:     "Nam Euiseo",
  nameKo:     "남의서",
  tagline:    "AI Researcher & PM",
  taglineSub: "Sports Video Analytics · Clinical LLM/VLM",
  email:      "euiseo053103@gmail.com",
  github:     "https://github.com/2021147566",
  linkedin:   "https://linkedin.com/in/euiseo",
};
