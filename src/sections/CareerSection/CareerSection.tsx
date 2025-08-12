import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Box } from "../../CommonStyle"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";


interface CareerSectionProps{
  toProject: () => void
}


const CareerSection = ({toProject}: CareerSectionProps) => {

  const ref = useRef(null)

  const inView = useInView(ref, { margin: '-50px' })

  const ViewBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    borderRadius: '100px',
    padding: '10px 20px',
    backgroundColor: purple[300],
    '&:hover': {
      backgroundColor: purple[700]
    }
  }))

  const MotionViewBtn = motion(ViewBtn)

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h1 className="text-[100px] font-semibold">
          Career
        </h1>
      </motion.div>

      <div className="간단 박스형태 grid grid-cols-2 text-center gap-3">
        
        <div className={`${Box} flex flex-col items-center gap-5 shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(92,63,208,0.6)]`}>
          <img src="/elice.svg" alt="brandLogo" className="w-[150px] mt-10" />
          <h1 className="font-bold text-2xl">
            코테, 인터뷰로 선발
          </h1>
          <p className="text-gray-600 text-lg">
            프론트엔드에 대한 전반적인 이해를 쌓았습니다.
          </p>
        </div>

        <div className={`${Box} shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(128,128,128,0.4)] !rounded-xl !border-purple-300 !border-2`}>
          <div className="flex items-center justify-center gap-5">
            <img src="/teamwork.svg" alt="협업이미지" className="w-12" />
            <h1 className="font-bold text-2xl">
              협업 경험
            </h1>
          </div>

          <ul className="list-disc text-left px-5 mt-5 text-gray-600 flex flex-col gap-2">
            <li><strong className="text-black underline underline-offset-1">Git Flow 기반 브랜치 전략</strong>과 코드 리뷰 문화를 통해 이슈별 기능 개발부터 주기적 배포, 핫픽스까지 팀 협업과 안정적인 프로덕션 관리를 경험하였습니다.</li>
            <li><strong className="text-black underline underline-offset-1">코딩 컨벤션</strong>을 준수해 코드 스타일 일관성을 유지함으로써 가독성과 유지보수성을 크게 향상 시켰습니다.</li>
            <li><strong className="text-black underline underline-offset-1">애자일 개발 프로세스</strong>에 따라 스프린트 계획, 데일리 미팅, 회고에 참여하며 팀 내 효율적인 소통과 협업을 경험했습니다.</li>

          </ul>
        </div>

        <div className={`${Box} rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(128,128,128,0.4)] !border-purple-300 !border-2`}>
          <h1 className="font-bold text-2xl">
            프론트엔드 & 백엔드 개발 경험
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            두번의 팀프로젝트에서 각각 <strong className="text-black underline underline-offset-2">프론트엔드와 백엔드 역할</strong>을 수행을 하며, UI구현부터 서버 API개발까지 <strong className="text-black underline underline-offset-2">전반적인 웹 서비스 개발</strong> 과정을 경험했습니다.
          </p>
        </div>

        <div className={`${Box} shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(92,63,208,0.6)]`}>
          <h1 className="font-bold text-2xl">
            지속적인 성장과 도전
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            부트캠프에서의 경험을 토대로 실무에 필요한 역량을 갖추었고, 지속해서 <strong className="text-black underline underline-offset-2">새로운 기술과 트렌드</strong>에 적극적으로 도전하며 성장하고 있습니다.
          </p>
        </div>
      </div>

    {/* TODO 링크걸어주기 */}
      <div className="mt-10 flex justify-center">
        <MotionViewBtn
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          whileHover={{}}
          onClick={toProject}
        >
          View Project
        </MotionViewBtn>
      </div>


    </div>
  )
}

export default CareerSection
