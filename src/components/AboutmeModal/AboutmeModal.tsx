import { motion, type Variants } from "framer-motion"

interface AboutmeModalProps{
    handleClose: () => void
}

const AboutmeModal = ({handleClose}: AboutmeModalProps) => {
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.7, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } },
        exit: { opacity: 0, scale: 0.7, y: 50, transition: { duration: 0.3, ease: "easeOut" } }
      }
    
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
                <h1 className="text-4xl font-bold text-center">hi</h1>

            </motion.div>
    </div>
  )
}

export default AboutmeModal
