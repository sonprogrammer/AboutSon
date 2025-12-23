import { useRef, useState } from "react"
import { AboutSection, CareerSection, MobileSection, ProjectSection, SkillSection, SummarySection } from "../../sections"
import { projectData } from "../../data/project";

const MainPage = () => {
  const projectRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleScrollToProjects = () => {
    if (projectRef.current) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  const handleOpenFirstModal = () => {
    handleScrollToProjects()
    if(projectData.length > 0){
      setSelectedProject(projectData[0]?.title || 'Mingle')
    }
  }
  
  return (
    <div className="w-full bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      
      <div className="max-w-[1100px] mx-auto">

        <section className="md:px-10 px-6 py-8 md:py-10">
          <AboutSection />
        </section>

        <div className="space-y-32 md:space-y-52 px-6 md:px-10">
          
          <section className="transition-all duration-1000">
            <SkillSection />
          </section>

          <section>
            <CareerSection toProject={handleOpenFirstModal}/>
          </section>

          <section ref={projectRef} className="scroll-mt-28">
            <ProjectSection 
              selectedProject={selectedProject} 
              setSelectedProject={setSelectedProject}
            />
          </section>

          <section className="pb-32">
            <SummarySection />
          </section>
        </div>

        <div className="sm:hidden border-t border-slate-50 pt-10 px-6">
          <MobileSection />
        </div>
      </div>
    </div>
  )
}

export default MainPage