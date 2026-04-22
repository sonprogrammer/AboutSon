import { mingleSkills } from "../../data/mingleSkills"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { mingleFn } from "../../data/mingleFn";
import { motion } from 'framer-motion'

const MingleModal = () => {
  const skills = mingleSkills
  const functions = mingleFn


  const SectionTitle = ({ title, icon, isDark = false }: { title: string; icon?: string; isDark?: boolean }) => (
    <div className="flex items-center gap-2 mb-6 justify-center">
      <span className="text-xl">{icon}</span>
      <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  )

  return (
    <div className='flex flex-col gap-12 text-slate-700 pb-10'>
      

      <section className="text-center space-y-4 p-2">
        <span className="px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest">
          Team Project
        </span>
        <h1 className="text-xl mt-2 font-black text-slate-900 leading-tight">취향 공유 플레이리스트 SNS</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic">Description</span>
            <span>음악 취향을 나누는 커뮤니티 플랫폼</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic">GitHub</span>
            <a href='https://github.com/sonprogrammer/mingle' target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">Link</a>
          </div>
        </div>
      </section>

      <div className="h-px bg-slate-100" />


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-50 rounded-4xl p-8 md:p-10 border border-slate-100"
      >
        <SectionTitle title="Core Role" icon="👤" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col items-center justify-center border-r border-slate-200">
             <span className="text-4xl font-black text-purple-600 mb-2 font-mono">Front-End</span>
             
          </div>
          <div className="md:col-span-2 space-y-4 text-[15px] md:text-base leading-relaxed">
            <p className="flex gap-3"><span className="text-purple-500 font-bold">01.</span> 다양한 서비스 기능을 유기적으로 연결하기 위한 컴포넌트 아키텍처 설계 및 백엔드 데이터 바인딩</p>
            <p className="flex gap-3"><span className="text-purple-500 font-bold">02.</span> RESTful API를 활용한 동적 화면 업데이트 및 사용자 인터랙션 중심의 데이터 흐름 구축</p>
            <p className="flex gap-3"><span className="text-purple-500 font-bold">03.</span> 전역 상태 관리 및 효율적인 API 요청 처리를 통한 애플리케이션 최적화</p>
          </div>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Key Features" icon="📱" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functions.map((f, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-purple-200 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-purple-400 rounded-full" /> {f.title}
              </h4>
              <ul className="space-y-2">
                {f.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-500 flex gap-2">
                    <span className="text-purple-300">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative"
      >


        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />
        
        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">
              ISSUE 01
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              날씨 API CORS 정책 위반 이슈
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
            <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
              </div>
              <p className="text-[15px] text-slate-300 leading-relaxed">
                OpenWeather API는 보안 규정상 헤더의 커스텀 토큰을 허용하지 않음. 이로 인해 브라우저 단에서 <span className="text-red-300 font-medium">CORS Preflight 에러</span> 발생
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
              </div>
              <p className="text-[15px] text-slate-300 leading-relaxed">
                공통 Axios 인스턴스의 인터셉터를 통해 모든 요청 헤더에 <span className="text-white font-medium underline underline-offset-4 decoration-purple-500/50">Authorization 토큰이 자동 포함</span>되도록 설계됨
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
              </div>
              <p className="text-[15px] text-emerald-100 leading-relaxed font-medium">
                해당 요청에 한해서만 인터셉터가 없는 <span className="bg-emerald-500/20 px-1 rounded text-emerald-300 underline underline-offset-4">기본 axios 인스턴스</span>를 사용하도록 분리하여 헤더 충돌 해결
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center bg-purple-50/50 rounded-3xl p-8 md:p-12"
      >
        <SectionTitle title="Insights" icon="❗" />
        <p className="max-w-3xl mx-auto leading-relaxed text-slate-600 md:text-lg italic">
          "팀 프로젝트를 통해 <span className="text-purple-600 font-bold">적극적인 소통</span>이 어떻게 결과물의 품질로 이어지는지 체감했습니다. 
          다양한 관점의 피드백을 수용하며 데이터의 정합성을 맞추고, UI의 완성도를 높이는 과정은 혼자서는 얻을 수 없는 값진 성장이었습니다."
        </p>
      </motion.section>


      <div className='w-full mt-10 border-t border-slate-100 pt-10 overflow-hidden'>
  <div className="flex justify-center mb-6">
    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Technologies Used</span>
  </div>
  
  <Swiper

    modules={[Autoplay]}
    spaceBetween={50} 
    slidesPerView={"auto"} 
    loop={true} 
    speed={4000}
    autoplay={{
      delay: 0, 
      disableOnInteraction: false, 
    }}
   
    className="flex items-center overflow-visible!" 
    style={{ height: '100px' }}
  >

    {[...skills, ...skills, ...skills].map((skill, i) => (
      <SwiperSlide key={i} style={{ width: 'auto' }} className="flex items-center">
        <div className="group flex items-center justify-center px-2">
          <img 
            src={skill} 
            alt="skill icon" 
            className="h-10 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  )
}

export default MingleModal;