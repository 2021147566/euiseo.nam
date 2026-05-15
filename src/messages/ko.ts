export const ko = {
  nav: {
    about: "About Me",
    experienceProjects: "Experience & Projects",
    rewardsLeadership: "Rewards & Leadership",
    education: "Education & Certifications",
    skills: "Skills & Tools",
    contact: "Contact",
  },
  hero: {
    email: "이메일",
    linkedin: "링크드인",
    github: "깃허브",
    educationBs: "연세대 컴퓨터과학 학사 졸업",
    educationMs: "연세대 인공지능학과 석박통합과정",
  },
  about: {
    heading: "About",
    paragraphs: [
      "Sports Analytics, Clinical LLM/VLM, Edge AI를 아우르는 연구·산업 경험을 바탕으로 문제를 데이터 중심으로 해결합니다.",
      "모델 실험에서 멈추지 않고 데이터 파이프라인, 제품 기획, 서비스 구현까지 연결해 실제 활용 가능한 결과를 만듭니다.",
      "연구 수행과 PM/리더십 경험을 함께 쌓아 기술과 실행을 동시에 주도하는 방식으로 일합니다.",
    ],
  },
  experience: {
    heading: "Experience & Projects",
    viewDetails: "상세 보기",
    hideDetails: "접기",
    andFilter: "AND 조건 — 선택된 태그를 모두 포함한 카드만 표시",
    noResults: "선택한 조건에 해당하는 카드가 없습니다.",
    resetAll: "전체 보기",
    reset: "초기화",
  },
  education: {
    heading: "Education & Certifications",
    educationLabel: "학력",
    certifications: "자격증",
    coursework: "주요 수강 과목",
    gpaLabel: "GPA",
  },
  contact: {
    heading: "Contact",
    description: "연구 협업, 채용, 프로젝트 제안은 아래 채널로 연락 주세요.",
  },
  skills: {
    heading: "Skills & Tools",
    languages: "Languages",
    mlData: "ML / Data Science",
    llmAi: "LLM / AI",
    frontend: "Frontend",
    infra: "Infra / DevOps",
    tools: "Tools",
  },
  cardType: {
    Experience: "경력",
    Project: "프로젝트",
    Leadership: "리더십",
    Award: "수상",
  },
  filter: {
    all: "전체",
    reset: "✕ 초기화",
  },
  footer: "Built with Next.js + Tailwind.",
};

export type Messages = typeof ko;
