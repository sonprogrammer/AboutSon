import { useRef, useState } from "react"
import { AboutSection, AppealSection, CareerSection, FeatureSection, ProjectSection, SkillSection } from "../../sections"
import type { ProjectTypes } from "../../types/projectType";
import { projectDatas } from "../../data/projectData";


const MainPage = () => {
  const projectRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(null);

  

  const handleScrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }


  const handleOpenFirstModal = () => {
    handleScrollToProjects()

    if(projectDatas.length > 0){
      setSelectedProject(projectDatas[0])
    }
  }
  
  
  return (
    <div className="h-full mt-15 w-full">
      <div className="p-10">

        <div className="">
          <AboutSection />
        </div>
        <div className="mt-30">
          <SkillSection />
        </div>
        <div className="mt-15">
          <CareerSection toProject={handleOpenFirstModal}/>
        </div>
        <div ref={projectRef} className="mt-30">
          <ProjectSection selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
        </div>
        <div className="mt-30">
          <FeatureSection />
        </div>
      </div>
      <div className="">
        <AppealSection />
      </div>
    </div>
  )
}

export default MainPage

