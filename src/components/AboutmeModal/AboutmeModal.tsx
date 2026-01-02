import { motion, type Variants } from "framer-motion"
import { ContentsStyle } from "../../CommonStyle";
import CloseIcon from '@mui/icons-material/Close';

interface AboutmeModalProps { handleClose: () => void }

const AboutmeModal = ({ handleClose }: AboutmeModalProps) => {

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], when: "beforeChildren", staggerChildren: 0.1 } 
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
  }

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex justify-center items-center w-full bg-slate-900/70 backdrop-blur-md p-4 md:p-10"
      onClick={handleClose}
    >
      <motion.div
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className="relative w-full max-w-5xl h-[90vh] rounded-[2.5rem] flex flex-col bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
     
        <div className="flex justify-between items-center px-10 py-7 border-b border-slate-50 bg-white/80 backdrop-blur-sm z-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Who I am</h1>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400 hover:text-slate-900"
          >
            <CloseIcon fontSize="large" />
          </button>
        </div>

       
        <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-20 custom-scrollbar">
          
       
          <motion.section variants={sectionVariants} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">🙋‍♂️ 지원동기</h2>
            </div>
            <h3 className="text-xl font-bold text-purple-600">[사용자 관점에서 고민하는 개발자가 되기까지]</h3>
            <div className="h-px w-full bg-slate-100" />
            <div className="text-slate-700 leading-relaxed md:text-lg space-y-6">
              <p>
                프론트엔드 개발에 흥미를 느낀 건 단순히 <span className={ContentsStyle}>보이는 것</span>을 만든다는 흥미를 넘어, {' '}
                <span className={ContentsStyle}>사용자에게 실제로 영향을 주는 지점</span>이라는 인식을 하게 되면서였습니다.
                처음 코딩을 접했을 땐 마냥 신기했지만 프로젝트를 진행하며 사용자의 반응을 바로 볼 수 있다는 점에서 보람을 느꼈고, 이 감정은 제가 개발자로 진로를
                결정하는 데 결정적인 역할을 했습니다.
              </p>
              <p>
                뉴질랜드 워킹홀리데이 당시 모든 게 낯설고 불편했지만 그 안에서 배운 건 <span className={ContentsStyle}>나와 다른 시선을 이해하는 법</span>이었습니다.
                다양한 국적의 사람들과 함께 일하면서 {' '}
                <span className={ContentsStyle}>무언가를 전달하는 방식은 사람마다 다르게 받아들여질 수 있다</span>는 점을 체감했고, 이러한 경험이 UI/UX에 대한 관심으로 이어졌습니다. 이후 소프트웨어공학을
                전공하며 설계, 알고리즘, 네트워크 등 컴퓨터공학의 기초를 쌓았고, 본격적으로 프론트엔드에 집중하면서 제 관심사와 적성이 자연스럽게 맞닿아 있음을
                느꼈습니다.
              </p>
              <p>
                프론트엔드는 기능과 시각, 흐름과 구조, 기술과 감각이 유기적으로 연결되는 분야라고 생각합니다. 단순히 보기 좋은 UI가 아닌, 사용자가 자연스럽게
                행동하게 만드는 경험을 설계하는 것이 핵심이며, 저는 이 <span className={ContentsStyle}>경험</span>을 설계하고 구현하는 과정에 가장 큰 매력을 느낍니다.
                <br />
                앞으로는 사용자에게 더 나은 경험을 제공하는 서비스를 만들고 일상에 <span className={ContentsStyle}>긍정적인 변화</span>를 주는 개발자가 되고 싶습니다.
              </p>
            </div>
          </motion.section>

          
          <motion.section variants={sectionVariants} className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">✨ 주요성과</h2>
            <h3 className="text-xl font-bold text-purple-600">[사용자 니즈를 기능으로 연결한 실질적 개선 경험]</h3>
            <div className="h-px w-full bg-slate-100" />
            <div className="text-slate-700 leading-relaxed md:text-lg space-y-6">
              <p>
                엘리스 웹개발자 과정에서 협업 프로젝트로 진행한 <span className={`${ContentsStyle} text-purple-600 font-bold`}>밍글(Mingle)</span>은 플레이리스트 기반의 음악 SNS 서비스로 팀원들과 함께 사용자 흐름을 설계하고
                마이페이지·추천·좋아요 기능 등을 구현했습니다. 기능 하나를 설계할 때도 <span className={ContentsStyle}>유저가 이걸 왜 필요로 할까?</span> 부터 고민했고 이 과정을 통해 단순히 코드를
                짜는 개발자가 아닌 문제를 정의하고 해결책을 기능으로 풀어낼 수 있는 개발자로 한 걸음 나아갈 수 있었습니다. 제가 개발한 요소들이 유저의 흐름을
                방해하지 않고 자연스럽게 이어지도록 설계되었을 때 기술 그 자체보다도 사람에게 어떤 경험을 전달했는지가 더 중요하다는 걸 다시금 깨달았습니다.
              </p>
              <p>
              이러한 사용자 중심 사고는 개인 프로젝트로 이어졌습니다.
              </p>
              <p>
                 실제로 트레이너로 근무하며 느꼈던 <strong className={`${ContentsStyle}text-slate-900 font-semibold`} >수업 횟수 관리의 불투명성과 회원들의 개인정보에 대한 문제</strong>를 해결하기 위해
                 <span className={`${ContentsStyle} text-red-800! font-bold`}> BNTY</span>라는 프로젝트를 기획했습니다.
                현장에서 문제를 파악하고 이를 서비스로 기획으로 연결하는 과정을 통해 개발자는 단순히 코드를 짜는 사람이 아니라 '문제를 해결하는 사람'임을 
                깨달았습니다. <br/>
                또한 일상 속 영양 관리의 피로도를 낮추기 위해 AI를 연동한 식단 분석 서비스 <span className={`${ContentsStyle} text-emerald-500! font-bold`}>Fuelly</span>
                를 개발하며 유저의 실질적 불편함을 해소하는 데 집중했습니다.
                현장의 니즈를 파악하는 감각은 기술적 한계를 돌파하는 원동력이 되었습니다.<br />
                <span className={`${ContentsStyle} text-red-500 font-bold`}>VC(Virtual Coin)</span> 프로젝트 당시 수백 개의
                코인 데이터를 수신하는 과정에서 발생하는 초기 로딩 지연 문제를 UX의 치명적 결함으로 정의했습니다.
                이를 해결하기위해 
                이를 해결하기 위해 <strong className={`${ContentsStyle}text-slate-900 font-semibold`}>REST API와 WebSocket을 병행하는 하이브리드 방식</strong>을 설계했습니다. 
                페이지 진입 즉시 REST API로 현재가를 우선
                 렌더링하고 백그라운드에서 WebSocket을 연결해 실시간성을 확보함으로써 초기 로딩속도를 약 80% 개선했습니다.
                <br />
                더불어 JWT기반의 인증 시스템을 구축하고 브라우저 보안 정책에 따른 트러블 슈팅을 거치며
                기술적 안정성까지 확보했습니다. <br />
                저는 앞으로도 비즈니스 로직과 기술적 최적화 사이의 접점을 찾아내며 <span className={ContentsStyle}>사용자의 일상에 실질적인 가치를 더하는 개발자</span>가 되겠습니다.
              </p>
            </div>
          </motion.section>

         
          <motion.section variants={sectionVariants} className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">💪🏻 직무역량</h2>
            <h3 className="text-xl font-bold text-purple-600">[기술보다 앞서야 하는 건 소통과 구조 이해]</h3>
            <div className="h-px w-full bg-slate-100" />
            <div className="text-slate-700 leading-relaxed md:text-lg space-y-6">
              <p>
                개발자에게 필요한 역량은 단순한 기술 스택의 나열이 아니라 협업 상황에서 문제를 파악하고 구조적으로 해결할 수 있는 역량이라고 생각합니다.{' '}
                <span className={`${ContentsStyle} text-purple-600 font-bold`}>Mingle</span> 프로젝트는 음악 취향을 공유할 수 있는 SNS 플랫폼으로 저는 프론트엔드 전반을 담당했습니다.
                이 프로젝트는 기능이 많았고 마이페이지·곡 좋아요·팔로우·플레이리스트 등 다양한 기능이 엮여 있어 개별 기능 단위 설계뿐만 아니라 기능 간 데이터의 흐름을
                파악하고 이를 중심으로 구조를 잡는 것이 프로젝트 안정성과 확장성 측면에서 더 중요했습니다.
              </p>
              <p>
                예를 들어 팔로우한 유저의 음악 피드는 여러 페이지에서 활용되었기 때문에 데이터를 중앙에서 관리하고, 각 컴포넌트에서는
                해당 상태만 구독하는 구조로 개선했습니다. 이를 위해 Recoil로 전역 상태를 관리하고, 요청 단계에서 {' '}
                <span className={ContentsStyle}>Refresh Token</span>을 이용해 <span className={ContentsStyle}>Access Token</span>
                을 자동 재발급한 뒤 헤더에 반영하도록 Axios 인터셉터를 재구성하여 백엔드 변경 사항에도 유연하게 대응했습니다.
                또한 프로젝트 중간에는 날씨 API 호출 중 CORS 문제가 발생했는데 해당 공공 API가 토큰을 헤더에 포함할 수 없는
                구조임을 확인하고 문서를 재검토한 뒤 문제를 해결했습니다.
              </p>
              <p>
                이 프로젝트의 핵심은 팀원들과의 협업이었습니다. 디자이너 없이 기획과 디자인을 팀원들과 함께 논의하며 진행했고 화면 흐름이나 UI 수정은 의견을
                모아 유연하게 조율했습니다. 또한 API 응답 형식이 변경될 때는 백엔드 팀원과 긴밀히 소통하며 연동 문제를 빠르게 해결했습니다. 혼자 잘하는 개발자보다
                함께 잘하는 개발자가 되겠다는 자세로 임한 결과 어떤 환경에서도 유연하게 협업하고 구조적으로 사고하는 힘을 키울 수 있었습니다.
              </p>
            </div>
          </motion.section>

          
          <motion.section variants={sectionVariants} className="flex flex-col gap-5 pb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">🫡 입사 후 포부</h2>
            <h3 className="text-xl font-bold text-purple-600">[신뢰받는 동료, 성장하는 프론트엔드 개발자]</h3>
            <div className="h-px w-full bg-slate-100" />
            <div className="text-slate-700 leading-relaxed md:text-lg space-y-6">
              <p>
                입사 초기에는 귀사의 개발 환경과 협업 문화에 빠르게 적응하여 주어진 역할을 정확하게 수행하는 개발자가 되겠습니다. 이전 프로젝트들에서 팀원들과
                긴밀하게 협업하며 얻은 경험을 바탕으로 빠르게 팀의 일원으로 녹아들 수 있다고 생각합니다. 어떤 기능이 왜 필요한지 유저의 니즈는 무엇인지 질문하고
                이해하는 습관을 바탕으로 단순 구현에 그치지 않고 서비스 전체의 맥락을 고려하는 태도를 유지하겠습니다.
              </p>
              <p>
                또한 단기적인 개발 효율뿐 아니라 장기적인 유지보수성과 사용자 경험을 함께 고려한 코드를 작성하겠습니다.
                기획이 미흡하거나 요구사항이 자주 바뀌는 상황에서도 유연하게 대응할 수 있는 구조를 고민하고 사용자에게는 불편함 없이 자연스러운 경험을
                제공하는 데 집중하겠습니다.
              </p>
              <p>
                중장기적으로는 프론트엔드 아키텍처에 대한 깊이 있는 이해를 바탕으로 기술적 중심 역할을 맡을 수 있는 개발자로 성장하고자 합니다. 더불어 다양한 직무의
                동료들과 소통하며 더 나은 결과를 함께 만들어가는 팀 중심의 개발자 즉 <span className={ContentsStyle}>신뢰받는 동료</span>로 자리 잡는
                것이 제 목표입니다.
              </p>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </div>
  )
}

export default AboutmeModal