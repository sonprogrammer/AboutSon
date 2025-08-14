import { motion, type Variants } from "framer-motion"

interface AboutmeModalProps {
  handleClose: () => void
}

const AboutmeModal = ({ handleClose }: AboutmeModalProps) => {

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn", when: "afterChildren", staggerChildren: 0.5 } },
    exit: { opacity: 0, scale: 0.7, y: 100, transition: { duration: 0.3, ease: "easeOut" } }
  }


  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.5 } },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="fixed inset-0 z-100 flex justify-center items-center w-full bg-black/20 backdrop-filter backdrop-blur-md"
      onClick={handleClose}
    >
      <motion.div
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className="modal-content relative w-[90%] xl:w-[70%] h-[85%] rounded-2xl flex flex-col p-8 px-14 bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 p-4 border rounded-full w-[24px] h-[24px] cursor-pointer flex justify-center items-center bg-black text-white"
        >X</button>
        <h1 className="text-4xl font-bold text-center ">Who I am</h1>

        <div className="밑에 내용들 flex flex-col gap-10 mt-10">
          <motion.section
            className="mb-8 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            // variants={{
            //   hidden: {},
            //   visible: { 
            //     transition: { staggerChildren: 0.3 } 
            //   }
            // }}
          >
            <h2 className="text-2xl font-bold">🙋‍♂️ 지원동기</h2>
            <h3 className="font-semibold mb-1 text-gray-700">[사용자 관점에서 고민하는 개발자가 되기까지]</h3>
            <div className="border border-gray-200"></div>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              개발자에게 필요한 역량은 단순한 기술 스택의 나열이 아니라 협업 상황에서 문제를 파악하고 구조적으로 해결할 수 있는 역량이라고 생각합니다.
              ‘Mingle’ 프로젝트는 음악 취향을 공유할 수 있는 SNS 플랫폼으로 저는 프론트엔드 전반을 담당했습니다. 이 프로젝트는 기능이
              많았고 마이페이지·곡 좋아요·팔로우·플레이리스트 등 다양한 기능이 엮여 있었기에 기능 단위보다 데이터 흐름 단위로 설계하는 것이 중요했습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              예를 들어 팔로우한 유저의 음악 피드를 가져오는 기능은 여러 페이지에서 활용되었기 때문에 데이터를 하나의 중심 상태로 관리하면서 컴포넌트에서는
              그 상태만 구독하는 구조로 개선했습니다. 상태 관리에는 Recoil을 사용했으며 백엔드 변경 사항에 따라 API 요청을 동적으로 처리해야 했기 때문에
              Axios 설정도 커스터마이징해 사용했습니다. 프로젝트 중간에는 날씨 API 호출 중 CORS 문제가 발생했고 토큰을 헤더에 실으면 안 된다는 공공 API
              특성 때문에 직접 문서를 다시 읽고 로직을 수정한 경험도 있습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              이 프로젝트의 핵심은 팀원들과의 협업이었습니다. 디자이너 없이 기획과 디자인을 팀원들과 함께 논의하며 진행했고 화면 흐름이나 UI 수정은 의견을 모아
              유연하게 조율했습니다. 또한 API 응답 형식이 변경될 때는 백엔드 팀원과 긴밀히 소통하며 연동 문제를 빠르게 해결했습니다. 혼자 잘하는 개발자보다
              함께 잘하는 개발자가 되겠다는 자세로 임한 결과 어떤 환경에서도 유연하게 협업하고 구조적으로 사고하는 힘을 키울 수 있었습니다.
            </motion.p>
          </motion.section>

          {/* 주요 성과 */}
          <motion.section
            className="mb-8 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold mb-3">✨ 주요성과</h2>
            <h3 className="font-semibold mb-1 text-gray-700">[사용자 니즈를 기능으로 연결한 실질적 개선 경험]</h3>
            <div className="border border-gray-200"></div>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              엘리스 웹개발자 과정에서 협업 프로젝트로 진행한 ‘밍글(Mingle)’은 플레이리스트 기반의 음악 SNS 서비스로 팀원들과 함께 사용자 흐름을 설계하고
              마이페이지·추천·좋아요 기능 등을 구현했습니다. 기능 하나를 설계할 때도 ‘유저가 이걸 왜 필요로 할까?’부터 고민했고 이 과정을 통해 단순히 코드를
              짜는 개발자가 아닌 문제를 정의하고 해결책을 기능으로 풀어낼 수 있는 개발자로 한 걸음 나아갈 수 있었습니다. 제가 개발한 요소들이 유저의 흐름을
              방해하지 않고 자연스럽게 이어지도록 설계되었을 때 기술 그 자체보다도 사람에게 어떤 경험을 전달했는지가 더 중요하다는 걸 다시금 깨달았습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              이런 고민은 프로젝트를 마친 이후에도 계속되었고 저는 일상에서 느낀 불편함을 개발로 해결해보고자 다양한 개인 프로젝트를 꾸준히 진행해 왔습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              그중 하나인 ‘VC(Virtual Coin)’ 프로젝트는 코인 투자 흐름을 가볍게 체험할 수 있는 웹 서비스로 기획부터 개발까지 전 과정을 혼자 진행한
              개인 프로젝트입니다. 로그인, 자산, 거래, 랭킹, 검색 등 다양한 기능을 포함했으며 특히 게스트 로그인 기능을 추가해 진입 장벽을 낮췄고 각 페이지는
              반응형 UI로 구성하여 모바일 환경에서도 원활한 사용이 가능하도록 했습니다. 자산 페이지에서는 보유 코인의 손익을 실시간으로 확인할 수 있도록 했고
              수익률 기반의 랭킹 시스템을 통해 자연스러운 경쟁을 유도했습니다. 개발 과정에서는 쿠키 인증 오류를 해결하기 위해 서버-클라이언트 간 도메인,
              SameSite, Secure 설정을 조정하고 Axios 인터셉터로 자동 인증 갱신 로직을 구현해 문제를 안정적으로 해결했습니다.
            </motion.p>
          </motion.section>

          {/* 섹션 3 - 직무역량 */}
          <motion.section
            className="mb-8 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold mb-3">💪🏻 직무역량</h2>
            <h3 className="font-semibold mb-1 text-gray-700">[기술보다 앞서야 하는 건 소통과 구조 이해]</h3>
            <div className="border border-gray-200"></div>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              개발자에게 필요한 역량은 단순한 기술 스택의 나열이 아니라 협업 상황에서 문제를 파악하고 구조적으로 해결할 수 있는 역량이라고 생각합니다.
              ‘Mingle’ 프로젝트는 음악 취향을 공유할 수 있는 SNS 플랫폼으로 저는 프론트엔드 전반을 담당했습니다. 이 프로젝트는 기능이 많았고 마이페이지·곡
              좋아요·팔로우·플레이리스트 등 다양한 기능이 엮여 있었기에 기능 단위보다 데이터 흐름 단위로 설계하는 것이 중요했습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              예를 들어 팔로우한 유저의 음악 피드를 가져오는 기능은 여러 페이지에서 활용되었기 때문에 데이터를 하나의 중심 상태로 관리하면서 컴포넌트에서는
              그 상태만 구독하는 구조로 개선했습니다. 상태 관리에는 Recoil을 사용했으며 백엔드 변경 사항에 따라 API 요청을 동적으로 처리해야 했기 때문에
              Axios 설정도 커스터마이징해 사용했습니다. 프로젝트 중간에는 날씨 API 호출 중 CORS 문제가 발생했고 토큰을 헤더에 실으면 안 된다는 공공 API
              특성 때문에 직접 문서를 다시 읽고 로직을 수정한 경험도 있습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              이 프로젝트의 핵심은 팀원들과의 협업이었습니다. 디자이너 없이 기획과 디자인을 팀원들과 함께 논의하며 진행했고 화면 흐름이나 UI 수정은 의견을
              모아 유연하게 조율했습니다. 또한 API 응답 형식이 변경될 때는 백엔드 팀원과 긴밀히 소통하며 연동 문제를 빠르게 해결했습니다. 혼자 잘하는 개발자보다
              함께 잘하는 개발자가 되겠다는 자세로 임한 결과 어떤 환경에서도 유연하게 협업하고 구조적으로 사고하는 힘을 키울 수 있었습니다.
            </motion.p>
          </motion.section>

          {/* 섹션 4 - 입사 후 포부 */}
          <motion.section
            className="mb-8 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold mb-3">🫡 입사 후 포부</h2>
            <h3 className="font-semibold mb-1 text-gray-700">[신뢰받는 동료, 성장하는 프론트엔드 개발자]</h3>
            <div className="border border-gray-200"></div>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              입사 초기에는 귀사의 개발 환경과 협업 문화에 빠르게 적응하여 주어진 역할을 정확하게 수행하는 개발자가 되겠습니다. 이전 프로젝트들에서 팀원들과
              긴밀하게 협업하며 얻은 경험을 바탕으로 빠르게 팀의 일원으로 녹아들 수 있다고 생각합니다. 어떤 기능이 왜 필요한지 유저의 니즈는 무엇인지 질문하고
              이해하는 습관을 바탕으로 단순 구현에 그치지 않고 서비스 전체의 맥락을 고려하는 태도를 유지하겠습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              또한 단기적인 개발 효율뿐 아니라 장기적인 유지보수성과 사용자 경험을 함께 고려한 코드를 작성하겠습니다. 코드를 짤 때마다 ‘나중에 이걸 보는 사람이
              나보다 더 잘 이해할 수 있도록’이라는 생각으로 컴포넌트 구조를 설계할 계획입니다. 기획이 미흡하거나 요구사항이 자주 바뀌는 상황에서도 유연하게 대응할
              수 있는 구조를 고민하고 사용자에게는 불편함 없이 자연스러운 경험을 제공하는 데 집중하겠습니다. 여기에 다양한 테스트 시나리오와 예외 처리까지 반영하여
              사용자 신뢰를 높일 수 있는 안정적인 화면을 구현하겠습니다.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
              중장기적으로는 프론트엔드 아키텍처에 대한 깊이 있는 이해를 바탕으로 기술적 중심 역할을 맡을 수 있는 개발자로 성장하고자 합니다. 더불어 다양한 직무의
              동료들과 소통하며 더 나은 결과를 함께 만들어가는 팀 중심의 개발자 즉 ‘신뢰받는 동료’로 자리 잡는 것이 제 목표입니다. 기술을 향한 집요함과 사람을
              향한 배려 그 사이에서 균형 잡힌 개발자가 되고 싶습니다.
            </motion.p>
          </motion.section>

        </div>
      </motion.div>
    </div>
  )
}

export default AboutmeModal
