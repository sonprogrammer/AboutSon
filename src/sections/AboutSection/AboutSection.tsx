import { AnimatePresence, motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, styled, type ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { AboutmeContents, AboutmeModal } from "../../components";

const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

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

  const handleMoreClick = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }


  return (
    <div className="font-semibold">

      <div className='flex flex-col gap-10 items-center relative p-10 rounded-3xl  md:p-12 mt-5 border border-stone-200 bg-stone-50 shadow-lg'>

        <div className="flex flex-col lg:flex-row md:gap-5 items-center">

          <div className='w-[150px] md:w-[200px] flex justify-center md:justify-start'>
            <img src="/photo.png" alt="내사진" className='rounded-2xl border-3 border-white shadow-lg hover:scale-105 transition-transform duration-300' />
          </div>

          <div className="flex-1 grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-2 mt-10 md:text-lg text-sm p-5 rounded-2xl">

            <p>Name : </p> <p> 손 영 진</p>

            <span>Graduated : </span>
            <span> 한서대학교(항공소프트웨어공학과)</span>


            <span>GitHub : </span>
            <span>
              <a href="https://github.com/sonprogrammer" target="_blank"
                className="hover:text-purple-500 transition duration-300 hover:ease-in-out"
              >
                https://github.com/sonprogrammer
              </a>
            </span>

            <span>Resume : </span>
            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-purple-500 transition duration-300 hover:ease-in-out"
              rel="noopener noreferrer"
            >이력서 보러가기</a>

            <span>Certificates :</span>
            <ul className="list-disc pl-5">
              <li>정보처리기사</li>
              <li>GTQ 1급</li>
              <li>토익 835점</li>
            </ul>
          </div>
          <div className="border w-full border-stone-200 lg:hidden"></div>

        </div>

        <div className='flex flex-col justify-center flex-1'>
          <h1 className='font-bold text-lg md:text-2xl'>Who I am</h1>
          <AboutmeContents />
        </div>

      </div>


      <div className="mt-10 flex justify-center">
        <MotionViewBtn
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
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
