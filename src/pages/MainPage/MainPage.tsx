import { useRef, useState } from "react"
import { AboutSection, CareerSection, ProjectSection, SkillSection, SummarySection } from "../../sections"
import { projectData } from "../../data/project";




const MainPage = () => {
  const projectRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  

  const handleScrollToProjects = () => {
    projectRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }


  const handleOpenFirstModal = () => {
    handleScrollToProjects()

    if(projectData.length > 0){
      setSelectedProject('Mingle')
    }
  }
  
  
  return (
    <div className="h-full w-full">
      <div className="px-3 md:px-10">

        <div className="md:px-10">
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
        <div>
          <SummarySection />
        </div>
      </div>
      
    </div>
  )
}

export default MainPage

