import { motion, type Variants } from "framer-motion"

interface ProjectModalProps {
    project: string
    handleCloseModal: () => void
    children: React.ReactNode
}

const ProjectModal = ({ project, handleCloseModal, children }: ProjectModalProps) => {
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.7, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } },
        exit: { opacity: 0, scale: 0.7, y: 50, transition: { duration: 0.3, ease: "easeOut" } }
    }


    const projectColors: Record<string, { bg: string; hover: string, text: string, shadow:string }> = {
        Mingle: { bg: 'bg-purple-500', hover: 'hover:bg-gray-500', text: 'text-purple-500',shadow:'shadow-purple-100' },
        'CAN (Check Again Note)' : { bg: 'bg-yellow-300', hover: 'hover:bg-blue-500', text: 'text-blue-500',shadow:'shadow-blue-100'   },
        'BNTY (Be Next To You)' : { bg: 'bg-red-700', hover:  'hover:bg-gray-600', text: 'text-red-700',shadow:'shadow-red-950'  },
        'VC (Virtual Coin)' : { bg: 'bg-red-500', hover: 'hover:bg-stone-400', text: 'text-red-500',shadow:'shadow-red-100'   }
    }

    const color = projectColors[project] || { bg: 'bg-black', hover: 'bg-black/80' }

    return (
        <div className="fixed inset-0 z-100 w-full flex justify-center items-center bg-black/20 backdrop-filter backdrop-blur-md"
            onClick={handleCloseModal}
        >
            <motion.div
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className={`modal-content relative w-[90%] xl:w-[70%] h-[85%] rounded-2xl flex flex-col p-8 px-3 sm:px-5 md:px-14 bg-white overflow-y-auto shadow-2xl ${color.shadow}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleCloseModal}
                    className={`absolute right-5 top-5 p-4 border rounded-full w-[24px] h-[24px]
                     cursor-pointer flex justify-center items-center ${color.bg} ${color.hover} text-white `}
                >X</button>
                <h1 className={`text-lg sm:text-4xl font-bold text-center ${color.text}`}>{project}</h1>
               
                {children}

                
            </motion.div>
        </div>
    )
}

export default ProjectModal
