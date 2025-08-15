import { useRef, useState } from "react"
import { AboutSection, LastSection, CareerSection, FeatureSection, ProjectSection, SkillSection, AppealSection } from "../../sections"
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
      <div>
        <AppealSection />
      </div>
      <div className="">
        <LastSection />
      </div>
    </div>
  )
}

export default MainPage

