import { AboutSection, CareerSection, SkillSection } from "../../sections"


const MainPage = () => {
  return (
    <div className="p-10 h-full mt-15">
      <div className="">
        <AboutSection />
      </div>
      <div className="mt-30">
        <SkillSection />
      </div>
      <div>
        <CareerSection />
      </div>
    </div>
  )
}

export default MainPage
