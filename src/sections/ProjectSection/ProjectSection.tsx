import { AnimatePresence, motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ProjectModal } from "../../components";
import { projectDatas } from "../../data/projectData";
import type { ProjectTypes } from "../../types/projectType";


interface ProjectSectionProps{
  selectedProject: ProjectTypes | null
  setSelectedProject: (project: ProjectTypes | null) => void
}


const ProjectSection = ({ selectedProject, setSelectedProject }: ProjectSectionProps) => {

  const projects = projectDatas

  const handleClick = (project: ProjectTypes) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }
  console.log('sele', selectedProject)
  
  
  return (
    <div className='flex flex-col gap-10 px-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h1 className="text-[100px] font-semibold">
          Projects
        </h1>
      </motion.div>
      <div className='grid grid-cols-2 gap-10 px-6'>
      {projects.map((a, i) => (
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.6, delay: i * 0.2, type:'spring', stiffness: 300, damping: 15}}
          viewport={{once:true}}
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
            onClick={() => handleClick(a)}
          >
            View Project
            <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
          </motion.button>
        </motion.div>
      ))}
      </div>

      {/* //* 모달 */}
      <AnimatePresence>
      { selectedProject &&
        <ProjectModal project={selectedProject} handleCloseModal={handleCloseModal} />
      }
      </AnimatePresence>
      
    </div>
  )
}

export default ProjectSection
