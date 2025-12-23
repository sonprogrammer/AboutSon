import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";

interface CareerSectionProps {
  toProject: () => void
}

const CareerSection = ({ toProject }: CareerSectionProps) => {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })

  const ViewBtn = styled(Button)<ButtonProps>(() => ({
    color: '#fff',
    borderRadius: '100px',
    padding: '12px 30px',
    backgroundColor: purple[500],
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: purple[700],
      boxShadow: '0 10px 20px -5px rgba(168, 85, 247, 0.4)',
    }
  }))

  const MotionViewBtn = motion(ViewBtn)

  const cardStyle = "bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center items-center text-center";

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 mb-10 ml-2"
      >
        <div className="w-1.5 h-7 bg-purple-500 rounded-full" />
        <h2 className='text-3xl font-bold text-slate-900 tracking-tight'>Education & Experience</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <motion.div 
          whileHover={{ y: -5 }}
          className={`${cardStyle} md:col-span-1`}
        >
          <img src="/elice.svg" alt="elice" className="w-32 mb-6" />
          <h3 className="font-bold text-xl text-slate-800 mb-3">코테, 인터뷰로 선발</h3>
          <p className="text-slate-500 leading-relaxed">
            체계적인 커리큘럼을 통해 <br className="hidden md:block"/> 프론트엔드 전반의 이해도를 높였습니다.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className={`${cardStyle} md:row-span-2 !items-start !text-left bg-slate-50/50 border-dashed border-2 border-purple-100`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <img src="/teamwork.svg" alt="협업" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-slate-800">협업 및 프로세스</h3>
          </div>

          <ul className="space-y-5 text-sm md:text-[15px] text-slate-600">
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>
                <strong className="text-slate-900 font-semibold">Git Flow 전략:</strong> 이슈별 브랜치 관리와 코드 리뷰를 통한 안정적인 배포 프로세스를 경험했습니다.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>
                <strong className="text-slate-900 font-semibold">코딩 컨벤션:</strong> 일관된 스타일 유지를 통해 팀 생산성과 유지보수성을 극대화했습니다.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 font-bold">•</span>
              <p>
                <strong className="text-slate-900 font-semibold">애자일 프로세스:</strong> 데일리 미팅과 회고를 통해 팀 내 소통을 효율화했습니다.
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className={cardStyle}
        >
          <h3 className="font-bold text-xl text-slate-800 mb-3">Full-stack Experience</h3>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            UI 구현부터 서버 API 개발까지 <br/> <strong className="text-purple-600 font-semibold">웹 서비스의 라이프사이클</strong>을 직접 경험했습니다.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className={`${cardStyle} md:col-span-2 mt-2 bg-gradient-to-r from-purple-50 to-indigo-50 border-none`}
        >
          <h3 className="font-bold text-xl text-slate-800 mb-2">지속적인 성장과 도전</h3>
          <p className="text-slate-600 max-w-2xl">
            부트캠프의 경험을 발판 삼아, 실무에 필요한 역량을 갖추기 위해 <br className="hidden md:block"/>
            <strong className="text-slate-900">새로운 기술 트렌드</strong>에 끊임없이 도전하며 성장하고 있습니다.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <MotionViewBtn
          variant='contained'
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: '14px !important' }} />}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={toProject}
        >
          View Projects
        </MotionViewBtn>
      </div>
    </div>
  )
}

export default CareerSection