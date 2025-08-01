import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Box } from "../../CommonStyle"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";

const CareerSection = () => {

  const ref = useRef(null)

  const inView = useInView(ref, { margin: '-50px' })

  const ViewBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    borderRadius: '100px',
    padding: '10px 20px',
    backgroundColor: purple[500],
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
        <h1 className="text-[100px]">
          Career
        </h1>
      </motion.div>

      <div className="간단 박스형태 grid grid-cols-2 text-center gap-3">
        <div className={`${Box} flex flex-col items-center gap-5 shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(92,63,208,0.6)]`}>
          <img src="/elice.svg" alt="brandLogo" className="w-[150px]" />
          <p>
            코테, 인터뷰로 선발
          </p>
          <p>
            프론트엔드에 대한 전반적인 이해 및 공부
          </p>
        </div>
        <div className={`${Box} shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(128,128,128,0.4)] !rounded-xl !border-purple-300 !border-2`}>
          <h1>
            협업 경험
          </h1>

          <p>
            프로젝트 일정을 효율적으로 관리
            "팀 내 역할을 명확히 하고 원활한 협업으로 프로젝트 완성도를 높였습니다."

            "백엔드와의 긴밀한 협업을 통해 원활한 API 연동을 주도했습니다."

            "UI/UX 의견을 적극적으로 공유하며 사용자 친화적인 화면을 구현했습니다."

            "문제 발생 시 팀원과 즉시 소통하여 신속하게 해결책을 도출했습니다."
          </p>
        </div>
        <div className={`${Box} rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(128,128,128,0.4)] !border-purple-300 !border-2`}>
          <h1>
            프론트, 백엔드 투 파트 모두 경험
          </h1>
          <p>
            각 파트에서 어떻게 상호작용하는지 파악
          </p>
        </div>
        <div className={`${Box} shadow-[0_10px_10px_rgba(0,0,0,0.3),inset_0_0_25px_rgba(92,63,208,0.6)]`}>
          <h1>
            오픈 api사용
          </h1>
          <p>
            문서의 이해도 및 활용 능력을 키움
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

        >
          View Project
        </MotionViewBtn>
      </div>


    </div>
  )
}

export default CareerSection
