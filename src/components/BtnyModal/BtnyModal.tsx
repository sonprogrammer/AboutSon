import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { bntySkills } from "../../data/bntyskills";
import { bntyFn } from "../../data/bntyFn";
import { bntyR } from "../../data/bntyLast.tsx";

const BtnyModal = () => {
  const functions = bntyFn
  const skills = bntySkills
  const reflection = bntyR

  const SectionTitle = ({ title, icon, isDark = false }: { title: string; icon?: string; isDark?: boolean }) => (
    <div className="flex items-center gap-2 mb-6 justify-center">
      <span className="text-xl">{icon}</span>
      <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <div className='flex flex-col gap-12 text-slate-700 pb-10'>
      
   
      <section className="text-center space-y-4">
        <span className="px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest">Personal Project</span>
        <h1 className="text-xl mt-2 font-black text-slate-900 leading-tight">트레이너용 소통 플랫폼</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-red-200">GitHub</span>
            <a href='https://github.com/sonprogrammer/BNTYpt' target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Link</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-red-200">Live Demo</span>
            <a href='https://bnty.netlify.app/' target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Visit Site</a>
          </div>
        </div>
      </section>

      <div className="h-px bg-slate-100" />


      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-red-50/50 rounded-3xl p-8 border border-red-100"
        >
          <SectionTitle title="Core Concept" icon="❓" />
          <p className="text-[15px] leading-relaxed text-slate-600">
            개인정보 유출과 사생활 침해 우려를 해결하기 위해 기획되었습니다. 개인 연락처 노출 없이 <span className="font-bold text-red-600">독립된 시스템을 통한 안전한 소통 공간</span>을 제공하며, 트레이너의 실무 경험을 반영해 불편 사항을 개선했습니다.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
        >
          <SectionTitle title="Major Update" icon="✨" />
          <p className="text-[15px] leading-relaxed text-slate-600 font-medium text-center">
            기존 오류 개선 및 QR코드 연결 성능 최적화, <br/>
            <span className="text-red-600 font-bold">PWA 도입</span>을 통해 모바일 웹 환경에서 네이티브 앱에 준하는 사용자 경험(UI/UX) 제공.
          </p>
        </motion.div>
      </div>

     
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <SectionTitle title="Development & Roles" icon="📱" />
        
        <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm space-y-4">
          <p className="text-center font-bold text-slate-400 text-sm mb-6 uppercase tracking-widest">Full-Stack Implementation</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm leading-relaxed">
            {[
              "MVC 구조 기반의 백엔드 로직 설계 및 데이터 흐름 구조화",
              "사용자 권한 검증 미들웨어를 통한 보안 제어",
              "Access(Local) & Refresh(HttpOnly Cookie) 토큰을 통한 인증 강화",
              "WebSocket 기반의 실시간 채팅 및 읽음 처리 기능 구현",
              "PWA 도입으로 모바일 접근성 및 설치형 경험 제공"
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl">
                <span className="text-red-500 font-bold">✓</span>
                <span className="text-slate-600">{text}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functions.map((f, i) => (
            <div key={i} className="group p-6 rounded-3xl border border-slate-100 bg-white hover:border-red-200 transition-colors">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {f.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {f.items.map((item, j) => <li key={j} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
              {f.update && (
                <div className="mt-4 pt-4 border-t border-red-50">
                  <span className="text-[10px] font-black text-blue-800 bg-blue-50 px-2 py-0.5 rounded">NEW</span>
                  <ul className="mt-2 space-y-1 text-xs text-blue-900/70 italic">
                    {f.update.map((content, t) => <li key={t}>- {content}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 font-black text-7xl italic select-none">DEBUGGING</div>
        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />
        
        <div className="grid gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/> 한글 중복 전송 이슈 (IME)
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Enter 키로 전송 시 한글 조합 과정에서 <span className="text-white font-medium">onKeyDown, onSubmit</span>이 중복 트리거되는 현상 발생.
            </p>
            <div className="bg-white/5 p-3 rounded-lg border-l-4 border-emerald-500">
               <p className="text-sm text-emerald-100 italic font-medium">"isComposing을 체크하여 글자 조합이 완료된 시점에만 이벤트를 실행하도록 분기 처리하여 해결했습니다."</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center"
      >
        <SectionTitle title="Insights" icon="❗" />
        <div className="max-w-3xl mx-auto space-y-4 text-slate-600 italic leading-relaxed md:text-lg">
          {reflection.map((r, i) => <p key={i}>"{r}"</p>)}
        </div>
      </motion.section>

      <div className='w-full border-t border-slate-100 pt-10 overflow-hidden'>

      <div className="flex justify-center mb-6">
    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Technologies Used</span>
  </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={"auto"}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          className="!overflow-visible"
          style={{ height: '100px' }}
        >
          {[...skills, ...skills, ...skills].map((skill, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }}>
              <img src={skill} alt="skill" className="h-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all transform hover:scale-110" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default BtnyModal