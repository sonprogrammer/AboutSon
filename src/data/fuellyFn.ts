export const fuellyFn = [
    {
      title: "React 19 자동 최적화 및 UI",
      items: [
        "React 19의 'React Compiler'를 도입하여 별도의 useMemo/useCallback 없이도 컴포넌트 자동 메모이제이션 및 성능 최적화 구현",
        "Next.js App Router 기반의 서버 컴포넌트 활용으로 초기 로딩 속도 및 SEO 최적화",
        "로딩바를 적용하여 데이터 페칭 중에도 매끄러운 사용자 경험 제공"
      ]
    },
    {
      title: "고도화된 보안 및 인증 아키텍처",
      items: [
        "Next.js 환경에 최적화된 jose 라이브러리를 활용하여 서버 사이드 JWT 검증 및 보안 로직 구현",
        "XSS 공격 방지를 위해 Access Token은 브라우저 메모리에, Refresh Token은 HttpOnly Cookie에 저장하는 보안 구조 설계",
        "Next.js Middleware를 통한 라우트 보호 및 인증 상태 기반의 선제적 리다이렉션 처리"
      ]
    },
    {
      title: "재발급 요청 중복 방지",
      items: [
        "Axios Interceptor를 커스텀하여 다중 API 요청 시 Refresh Token을 통한 Access Token 재발급이 단 한 번만 수행되도록 설계",
        "동시 다발적인 토큰 만료 에러 발생 시, 첫 번째 요청만 서버에 전달하고 나머지 요청은 대기 후 갱신된 토큰으로 일괄 처리하여 서버 자원 낭비 최소화"
      ]
    },
    {
      title: "AI 맞춤형 식단 지능",
      items: [
        "Grok AI를 활용해 사용자의 설문 데이터와 실시간 영양 상태를 분석한 개인 맞춤형 음식 추천 시스템",
        "비정형 AI 응답을 정형화된 JSON 형태로 가공하여 '오늘의 식단' 및 '관심 음식' 데이터베이스와 즉시 연동",
        "사용자 목표(벌크업/다이어트)에 따른 실시간 영양 가이드 제공"
      ]
    },
    {
      title: "데이터 기반 대시보드",
      items: [
        "Recharts로 최근 일주일간의 칼로리·단백질 섭취 추이를 시각화",
        "Zustand를 통한 클라이언트 상태 관리와 React Query의 캐싱 정책을 결합하여 최신 데이터 동기화 최적화"
      ]
    }
  ];