import { type JSX } from "react";

export const troubleS: JSX.Element[] = [
  <>
    React Router v6부터{" "}
    <span className="underline underline-offset-3 decoration-yellow-500">useHistory</span>
    가 제거되고{" "}
    <span className="text-blue-500 font-semibold">useNavigate</span> 훅이 도입됨에
    따라 기존 라우팅 코드가 작동하지 않음. 이를 해결하기 위해{" "}
    <span className="text-blue-500 font-semibold">useNavigate</span>로 코드를
    수정하여 라우터 기능을 구현함
  </>,
  <>
    <span className="text-blue-500 font-bold">app.use(express.json)</span> 
    미들웨어의 위치가 잘못되어 JSON 요청 데이터를 제대로 파싱하지 못하는 문제가
    발생함. 이 미들웨어가 라우터 뒤에 배치되어 있었음. 그래서 이 라우터 선언
    이전으로 위치시켜 문제를 해결함
  </>,
  <>
    인증 요청 시{" "}
    <span className="underline underline-offset-3 decoration-yellow-500 decoration-2">req.user</span> 값을 읽을 수
    없었음. 이는 클라이언트에서 요청을 보낼 때{" "}
    <span className="text-blue-500 font-semibold">withCredentials: true</span>를
    추가하지 않아 쿠키가 포함되지 않았기 때문이었고, 이를 해결하기 위해
    클라이언트 요청에{" "}
    <span className="bg-yellow-200 px-1 rounded">withCredentials: true</span>를
    추가하여 인증 상태를 확인할 수 있도록 수정함. 또한, 서버에서 미들웨어
    순서를{" "}
    <span className="text-blue-500 font-semibold">
      cors → passport.initialize() → express-session → passport.session()
    </span>{" "}
    순으로 변경하여 인증 흐름을 올바르게 처리함
  </>
];