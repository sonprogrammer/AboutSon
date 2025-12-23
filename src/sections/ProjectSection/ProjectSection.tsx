import { AnimatePresence, motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BtnyModal, CanModal, MingleModal, ProjectModal, VcModal } from "../../components";
import { projectData } from "../../data/project";



interface ProjectSectionProps {
  selectedProject: string | null;
  setSelectedProject: (project:string | null) => void
}


const ProjectSection = ({ selectedProject, setSelectedProject }: ProjectSectionProps) => {

  const projects = projectData

  const handleClick = (project: string) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }


  return (
    <div className='flex flex-col sm:gap-10 sm:px-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-[60px] font-semibold pb-5 ml-5">
          Projects
        </h1>
      </motion.div>
      <div className='grid grid-cols-2 gap-3 sm:gap-10 sm:px-6'>
        {projects.map((a, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              boxShadow: '0px 8px 20px rgba(0,0,0,0.2)'
            }}
            className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 
          flex flex-col items-center justify-center gap-4 text-center 
          hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 transition-colors"
          >
            <div className="overflow-hidden h-[100px] rounded-xl mb-4">
              <img src={`/${a.img}`} alt="projectImg"
                className="w-full h-full object-contain translate-y-[60px] transition-all duration-500 ease-out group-hover:translate-y-[0px]"
              />
            </div>

            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-2 inline-flex items-center gap-1 text-indigo-600 font-medium hover:underline cursor-pointer"
              onClick={() => handleClick(a.title)}
            >
              View Project
              <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* //* 모달 */}
      <AnimatePresence>
        {selectedProject &&
          <ProjectModal project={selectedProject} handleCloseModal={handleCloseModal}>
          {selectedProject === 'Mingle' && <MingleModal />}
          {selectedProject === 'CAN (Check Again Note)' && <CanModal />}
          {selectedProject === 'BNTY (Be Next To You)' && <BtnyModal />}
          {selectedProject === 'VC (Virtual Coin)' && <VcModal />}
          {selectedProject === 'Fuelly' && <VcModal />}
        </ProjectModal>
      }
      </AnimatePresence>

    </div>
  )
}
// <ProjectModal project={selectedProject} handleCloseModal={handleCloseModal} />

export default ProjectSection
