import { AnimatePresence, motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BtnyModal, MingleModal, ProjectModal, VcModal, FuellyModal } from "../../components";
import { projectData } from "../../data/project";

interface ProjectSectionProps {
  selectedProject: string | null;
  setSelectedProject: (project: string | null) => void
}

const ProjectSection = ({ selectedProject, setSelectedProject }: ProjectSectionProps) => {
  const projects = projectData;

  return (
    <div className='flex flex-col gap-10'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 ml-2"
      >
        <div className="w-1.5 h-7 bg-purple-500 rounded-full" />
        <h2 className='text-3xl font-bold text-slate-900 tracking-tight'>Featured Projects</h2>
      </motion.div>

      <div className='grid grid-cols-1 gap-6 sm:gap-10'>
        {projects.map((a, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-[2.5rem] border border-slate-100 bg-white p-6 md:p-8 
                         flex flex-col md:flex-row items-center justify-between gap-6
                         shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] 
                         transition-all duration-500 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center shrink-0
                                w-full md:w-[320px] lg:w-[400px] h-[180px] md:h-[220px]">
                  <img 
                    src={`/${a.img}`} 
                    alt={a.title}
                    className="w-[70%] h-[70%] object-contain translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 ease-[0.34,1.56,0.64,1]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                     <span className="text-slate-300 font-black text-2xl lg:text-4xl italic opacity-20 uppercase">{a.title}</span>
                  </div>
                </div>

                <div className="space-y-3 flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl">
                    {a.desc}
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative z-10 px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-bold 
                           flex items-center gap-2 hover:bg-purple-600 transition-colors shrink-0
                           mt-4 md:mt-0 md:ml-6"
                onClick={() => setSelectedProject(a.title)}
              >
                View Project
                <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} handleCloseModal={() => setSelectedProject(null)}>
            {selectedProject === 'Mingle' && <MingleModal />}
            {selectedProject === 'BNTY (Be Next To You)' && <BtnyModal />}
            {selectedProject === 'VC (Virtual Coin)' && <VcModal />}
            {selectedProject === 'Fuelly' && <FuellyModal />}
          </ProjectModal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectSection