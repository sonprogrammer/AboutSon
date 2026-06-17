import { type JSX } from "react";

export const vcTroubles: JSX.Element[] = [
  <>
    1. 초기에 바이낸스 API를 사용하려 했지만, 코인의 종류가 너무 많아 초보자에게 다소 복잡함을 줄 수 있어
    비교적 코인이 적은 업비트 API를 사용함
  </>,

  <>
    2.<span className="font-bold">문제</span>
    : 클라이언트에서 직접 업비트 WebSocket을 연결하여 데이터를 호출할 때
    <span className="text-red-700 underline decoration-red-500 underline-offset-2 font-semibold">
      CORS 오류</span>가 발생하여 실시간 데이터 수신 불가
  </>,
  <>
    2. <span className="font-bold">원인</span>
    : 업비트 서버가 브라우저 Origin을 허용하지 않아 반복 연결 시
    "Too many request" 제한과 함께 CORS 오류 발생
  </>,
  <>
    2. <span className="font-bold">해결</span>
    : <span className="text-red-700 underline decoration-red-500 underline-offset-2 font-semibold">
      프록시 서버</span>를 구축하여 서버를 통해 업비트 WebSocket 데이터를 가져오도록
    변경하여 안정적인 실시간 데이터 수신 구현
    <>
      3. <span className="font-bold">문제</span>:
      수백 개의 코인 데이터를 웹소켓으로 직접 수신 시 잦은 재렌더링으로 인한 화면 버벅임 및
      <span className="text-red-700 underline decoration-red-500 underline-offset-2 font-semibold">
        초기 로딩 지연</span> 발생
    </>,
    <>
      3. <span className="font-bold">원인</span>:
      빈번한 데이터 갱신이 브라우저 메인 스레드 부하를 유발하여
      TBT(Total Blocking Time) 및 CLS(Cumulative Layout Shift) 지표 저하
    </>,
    <>
      3. <span className="font-bold">해결</span>:
      REST API 우선 렌더링 후 백그라운드 웹소켓 동기화(하이브리드 방식)를 구현하고,
      lodash의 <span className="text-red-700 underline decoration-red-500 underline-offset-2 font-semibold">
        throttle</span>을 적용하여 데이터 갱신 빈도를 최적화함.
      그 결과, Lighthouse 성능 지표인 FCP와 Speed Index를 유의미하게 개선하여
      초기 로딩 속도를 약 80% 단축함
    </>

  </>

];
