import { motion, type Variants } from "framer-motion"

interface ProjectModalProps{
    project: string | null
    handleCloseModal: () => void
    children: React.ReactNode
}

const ProjectModal = ({project, handleCloseModal, children}: ProjectModalProps) => {
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } },
        exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3, ease: "easeOut" } }
      }
    
    return (
        <div className="fixed inset-0 z-100 w-full flex justify-center items-center bg-black/20 "
            onClick={handleCloseModal}
        >
            <motion.div 
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className="modal-content relative w-[90%] xl:w-[70%] h-[85%] border rounded-xl flex flex-col p-8 px-14 bg-white shadow-2xl
                 shadow-purple-300 overflow-y-auto"
                 onClick={(e) => e.stopPropagation()}
                 >
                <p
                  onClick={handleCloseModal}
                  className="absolute right-5"
                >X</p>
                <h1 className="text-4xl font-bold text-center">{project}</h1>
               {children}
            </motion.div>
        </div>
    )
}

export default ProjectModal
