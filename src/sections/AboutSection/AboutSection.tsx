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
    <div>
    <div className='flex flex-col gap-10 relative bg-gray-100 p-10 rounded-3xl md:flex-row'>
      <div className='w-[300px] flex justify-center md:justify-start lg:justify-center'>
        <img src="/photo.png" alt="내사진" className='rounded-xl' />
      </div>
      <div className='flex flex-col justify-center flex-1'>
        <h1 className='font-bold text-4xl'>Who I am</h1>
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
          whileHover={{}}
          onClick={handleMoreClick}
        >
          more About
        </MotionViewBtn>
      </div>

      <AnimatePresence>
        {modalOpen && <AboutmeModal handleClose={handleClose}/>}
      </AnimatePresence>

      </div>
  )
}

export default AboutSection
