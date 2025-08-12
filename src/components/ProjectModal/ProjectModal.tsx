import { motion, type Variants } from "framer-motion"
import type { ProjectTypes } from "../../types/projectType"

interface ProjectModalProps {
    project: ProjectTypes
    handleCloseModal: () => void
}

const ProjectModal = ({ project, handleCloseModal }: ProjectModalProps) => {
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.7, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } },
        exit: { opacity: 0, scale: 0.7, y: 50, transition: { duration: 0.3, ease: "easeOut" } }
    }

    return (
        <div className="fixed inset-0 z-100 w-full flex justify-center items-center bg-black/20 backdrop-filter backdrop-blur-md"
            onClick={handleCloseModal}
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
                    onClick={handleCloseModal}
                    className="absolute right-5 top-5 p-4 border rounded-full w-[24px] h-[24px] cursor-pointer flex justify-center items-center bg-black text-white"
                >X</button>
                <h1 className="text-4xl font-bold text-center">{project.title}</h1>
                {project.team ? <p className="text-center">(팀 프로젝트)</p> : <p className="text-center">(개인 프로젝트)</p>}

                <div className="mt-10 윗부분소개">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '150px 1fr',
                            gap: '10px',
                            alignItems: 'center',
                            borderBottom: '1px solid lightgray',
                            paddingBottom: '16px',
                        }}
                    >
                        <div>프로젝트 소개</div>
                        <h3>{project.desc}</h3>

                        <div>깃허브 주소</div>
                        <div>
                            <a href={project.git} target="_blank" rel="noreferrer"
                                className="hover:text-purple-500 hover:underline"
                            >
                                {project.git}
                            </a>
                        </div>
                    </div>

                    <div className="아랫부분">
                        <div>
                            <h1>역할</h1>
                            <p>{project.role[1]}</p>
                        </div>
                        <div>
                            <h1>기능</h1>
                            {project.func.map((f,i) => {
                                const [category, features] = Object.entries(f)[0] as [string, string[]]; 
                                // console.log('category', features)
                                (
                                    <div>

                                    <h2>{category}</h2>
                                    <ul>
                                        {features.map((feature,i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                        </div>
                            )})}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectModal
