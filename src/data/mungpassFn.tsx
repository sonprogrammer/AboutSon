export const mungpassFn = [
  {
    title: "QR 기반 초고속 입장 시스템",
    items: [
      <>수기 명부의 번거로움을 해결하기 위해 유저별 고유 QR 코드를 생성하고, 카메라 스캔 즉시 입장 절차가 완료되는 <span className="font-bold text-slate-900 underline decoration-orange-300 underline-offset-4">O2O 프로세스 구현</span></>,
      <><strong>Supabase Realtime</strong>을 활용하여 별도의 새로고침 없이 사장님 대시보드의 입장 명단이 <span className="text-orange-600 font-semibold">실시간으로 동기화</span>되도록 설계</>,
      "입장과 동시에 해당 유저의 이용 내역(날짜, 시간, 상품 등)이 DB에 즉시 기록되는 자동화 아키텍처"
    ]
  },
  {
    title: "Ant Design & Refine 기반 B2B 대시보드",
    items: [
      <><strong>Refine 프레임워크</strong>와 Ant Design을 도입하여 대규모 데이터 처리가 필요한 관리자 UI를 <span className="text-orange-600 font-semibold">표준화된 로직으로 효율적으로 구축</span></>,
      "일별/월별 방문자 수 및 누적 매출액 시각화 통계 기능 제공",
      <>매장 상태 및 상품 정보를 실시간으로 제어하는 <span className="font-bold text-slate-800">복잡한 CRUD 로직 최적화</span></>
    ]
  },
  {
    title: "FSD 아키텍처 적용",
    items: [
      <>프로젝트 유지보수성을 위해 <span className="bg-orange-50 px-1 text-orange-700 font-bold">FSD(Feature-Sliced Design)</span> 아키텍처를 도입하여 관심사 분리</>,
      <>Shared, Entities, Features 등 레이어 설계를 통해 컴포넌트 간의 <span className="text-orange-600 font-semibold">의존성을 낮추고 재사용성 극대화</span></>,
      "비즈니스 로직과 UI 로직을 엄격히 분리하여 기능 수정 시 영향 범위를 최소화한 견고한 설계"
    ]
  },
  {
    title: "상태 관리 및 서버 데이터 최적화",
    items: [
      "Zustand를 활용하여 유저의 입장 상태 및 전역 UI 상태를 가볍고 빠르게 관리",
      <><strong>TanStack Query</strong>를 사용하여 서버 데이터 캐싱 및 <span className="text-orange-600 font-semibold">Optimistic Update(낙관적 업데이트)</span>를 통한 매끄러운 UX 구현</>,
      "전역 상태 기반 유저 정보 관리를 통해 불필요한 API 호출 방지 및 데이터 무결성 유지"
    ]
  },
  {
    title: "Supabase 백엔드 인프라 구축",
    items: [
      <>PostgreSQL 기반의 실시간 DB 아키텍처 설계 및 <span className="font-bold text-slate-800">DB 트리거(Supabase Trigger)</span>를 통한 자동 프로필 생성 로직 구현</>,
      <><strong>Row Level Security(RLS)</strong> 정책을 설정하여 클라이언트 단의 <span className="text-orange-600 font-semibold">데이터 접근 권한 보안 강화</span></>,
      "서버리스 환경에서의 효율적인 데이터 관계 설계 및 인덱스 최적화 고려"
    ]
  },
  {
    title: "Gemini AI 기반 매출 인사이트 분석 시스템",
    items: [
      <>사장님 로그인 시 매출, 방문 수, 객단가 등의 통계 데이터를 기반으로 <span className="font-bold text-slate-900 underline decoration-orange-300 underline-offset-4">Gemini AI 인사이트 분석 기능</span>을 제공하여 운영 방향성과 매출 흐름을 직관적으로 파악할 수 있도록 구현</>,

      <><strong>Google Gemini API</strong>를 활용하여 월별 매출 추이, 방문 패턴, 공휴일·주말 데이터를 종합 분석하고 <span className="text-orange-600 font-semibold">2~3문장 형태의 경영 리포트 자동 생성</span></>,

      <>생성된 AI 분석 결과를 <span className="font-bold text-slate-800">Supabase DB</span>에 저장하여 중복 API 호출을 방지하고, 무료/유료 회원 정책에 따른 <span className="text-orange-600 font-semibold">비용 최적화 및 데이터 관리 구조 설계</span></>,
      <>Gemini API Key를 <span className="font-bold text-slate-800">서버 전용 환경변수(Server Environment Variable)</span>로 분리 관리하여, 클라이언트 번들 노출 없이 <span className="text-orange-600 font-semibold">보안성을 고려한 AI API 아키텍처 구성</span></>


    ]
  },
]