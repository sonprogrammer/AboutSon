import { AboutSection, CareerSection, FeatureSection, ProjectSection, SkillSection } from "../../sections"


const MainPage = () => {
  return (
    <div className="p-10 h-full mt-15 w-full">
      <div className="">
        <AboutSection />
      </div>
      <div className="mt-30">
        <SkillSection />
      </div>
      <div className="mt-15">
        <CareerSection />
      </div>
      <div className="mt-30">
        <ProjectSection />
      </div>
      <div className="mt-30">
        <FeatureSection />
      </div>
    </div>
  )
}

export default MainPage
