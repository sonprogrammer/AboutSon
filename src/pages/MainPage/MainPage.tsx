import { AboutSection, CareerSection, ProjectSection, SkillSection } from "../../sections"


const MainPage = () => {
  return (
    <div className="p-10 h-full mt-15 w-full">
      <div className="">
        <AboutSection />
      </div>
      <div className="mt-30">
        <SkillSection />
      </div>
      <div>
        <CareerSection />
      </div>
      <div>
        <ProjectSection />
      </div>
    </div>
  )
}

export default MainPage
