import { type JSX } from "react";

export const vcTroubles: JSX.Element[] = [
  <>
    1. 초기에 바이낸스 API를 사용하려 했지만, 코인의 종류가 너무 많아 초보자에게 다소 복잡함을 줄 수 있어
    비교적 코인이 적은 업비트 API를 사용함
  </>,
  <>
    2. <span className="font-bold">문제</span> : 배포 후 쿠키 기반 인증이 제대로 작동하지 않아 액세스 토큰이 갱신되지 않고
    <span className="underline text-red-700 decoration-red-500 underline-offset-2 font-semibold">401 에러</span>로 API 요청이 실패함
  </>,
  <>
    2. <span className="font-bold">해결</span> : 프론트엔드와 백엔드 도메인이 달라 쿠키 전송이 차단되었음. 이를 해결하기 위해 {' '}
    <span className="underline text-red-700 decoration-red-500 underline-offset-2 font-semibold">cookie 설정의 domain 값을 서버 도메인으로 명확히 지정</span>하고,
    <span className="underline text-red-700 decoration-red-500 underline-offset-2 font-semibold">sameSite를 'none', secure를 true</span>로 설정하여 교차 도메인에서도 쿠키가 안전하게 전달되도록 조정함.
    또한 <span className="underline text-red-700 decoration-red-500 underline-offset-2 font-semibold">axios의 withCredentials 설정</span>을 통해 브라우저가 쿠키를 포함하도록 하고,
    <span className="underline text-red-700 decoration-red-500 underline-offset-2 font-semibold">axios 인터셉터</span>를 활용해 액세스 토큰을 자동 갱신하는 로직을 구현함
  </>,
];
