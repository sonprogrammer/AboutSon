import { AnimatePresence, motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { AboutmeContents, AboutmeModal } from "../../components";

const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const ViewBtn = styled(Button)<ButtonProps>(() => ({
    color: '#fff',
    borderRadius: '100px',
    padding: '10px 24px',
    backgroundColor: purple[500],
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: purple[700],
      boxShadow: '0 8px 20px -10px rgba(168, 85, 247, 0.5)',
    }
  }))

  const MotionViewBtn = motion(ViewBtn)

  const handleMoreClick = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  return (
    <div className="w-full">
      <div className='bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-14'>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-16">
          
          <div className='flex-shrink-0 w-[160px] md:w-[220px]'>
            <img 
              src="/photo.png" 
              alt="프로필" 
              className='rounded-2xl w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500 shadow-sm' 
            />
          </div>

          <div className="flex-1 w-full text-slate-700">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">손영진</h2>
              <p className="text-purple-600 font-medium">Frontend Developer</p>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex flex-col sm:flex-row sm:gap-6 border-b border-slate-50 pb-3">
                <span className="w-24 text-slate-400 font-semibold shrink-0">Education</span>
                <span>한서대학교 항공소프트웨어공학</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:gap-6 border-b border-slate-50 pb-3">
                <span className="w-24 text-slate-400 font-semibold shrink-0">GitHub</span>
                <a href="https://github.com/sonprogrammer" target="_blank" className="text-blue-500 hover:text-purple-600 break-all transition-colors">
                  github.com/sonprogrammer
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-6 border-b border-slate-50 pb-4">
                <span className="w-24 text-slate-400 font-semibold shrink-0">Licenses</span>
                <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                  {['정보처리기사', 'GTQ 1급', '토익 835점'].map((cert) => (
                    <span key={cert} className="bg-slate-100 px-3 py-0.5 rounded-full text-xs md:text-sm text-slate-600 font-medium border border-slate-200/50">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-6 pt-1">
                <span className="w-24 text-slate-400 font-semibold shrink-0">Resume</span>
                <a href="/resume.pdf"  target="_blank" className="font-bold text-purple-600 hover:underline">
                  PDF 이력서 열기
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-10 border-t border-slate-50'>
          <h3 className='font-bold text-xl text-slate-900 mb-6'>Who I am</h3>
          <div className="text-slate-600 leading-[1.8] font-normal">
            <AboutmeContents />
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <MotionViewBtn
          variant='contained'
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: '14px !important' }} />}
          whileHover={{ y: -2 }}
          onClick={handleMoreClick}
        >
          More About Me
        </MotionViewBtn>
      </div>

      <AnimatePresence>
        {modalOpen && <AboutmeModal handleClose={handleClose} />}
      </AnimatePresence>
    </div>
  )
}

export default AboutSection