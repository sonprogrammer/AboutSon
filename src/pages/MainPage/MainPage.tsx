import { useRef, useState } from "react"
import { AboutSection, CareerSection, MobileSection, ProjectSection, SkillSection, SummarySection } from "../../sections"
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
    <div className="h-screen w-full">
      <div className="md:px-10">

        <div className="md:px-10 px-3">
          <AboutSection />
        </div>
        <div className="mt-30 px-3">
          <SkillSection />
        </div>
        <div className="mt-15 px-3">
          <CareerSection toProject={handleOpenFirstModal}/>
        </div>
        <div ref={projectRef} className="mt-30 px-3">
          <ProjectSection selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
        </div>
        <div className="px-3 sm:pb-10">
          <SummarySection />
        </div>
        <div className="mt-15 sm:hidden ">
          <MobileSection />
        </div>
      </div>
      
    </div>
  )
}

export default MainPage

