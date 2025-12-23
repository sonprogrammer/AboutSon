import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { vcFn } from "../../data/vcFn";
import { vcSkills } from "../../data/vcskills";
import { vcTroubles } from "../../data/vcTroubles";

const VcModal = () => {
  const functions = vcFn
  const skills = vcSkills
  const troubles = vcTroubles

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
        <span className="px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest">Full-Stack Project</span>
        <h1 className="text-3xl md:text-4xl mt-2 font-black text-slate-900 leading-tight">Virtual Coin : 모의 투자 플랫폼</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-rose-200">GitHub</span>
            <a href='https://github.com/sonprogrammer/VirtualCoin' target="_blank" rel="noreferrer" className="text-rose-600 hover:underline">Repository</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-rose-200">Live Demo</span>
            <a href='https://virtualcoinn.onrender.com/' target="_blank" rel="noreferrer" className="text-rose-600 hover:underline">Visit Site</a>
          </div>
        </div>
      </section>

      <div className="h-px bg-slate-100" />


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-rose-50/50 rounded-[2.5rem] p-8 md:p-12 border border-rose-100 text-center"
      >
        <SectionTitle title="Core Concept" icon="❓" />
        <h3 className="text-xl font-bold text-rose-600 mb-4">실제 코인 거래를 안전하게 경험하는 가상 체험 공간</h3>
        <p className="text-[15px] md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          복잡한 코인 시장을 처음 접하는 입문자들을 위한 학습 환경을 제공합니다. 
          <span className="font-bold text-slate-900"> 업비트 API 기반의 실시간 데이터</span>를 활용해 실제 시장과 동일한 투자 환경을 직접 설계하고 구현했습니다.
        </p>
      </motion.div>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Full-Stack Implementation" icon="📱" />
        
        <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-[15px] leading-relaxed">
            <div className="space-y-4">
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>실시간 시세 처리:</b> 업비트 WebSocket 연동 및 데이터 동기화</p></div>
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>자동 체결 시스템:</b> 사용자 지정 가격 도달 시 자동 주문 로직 구현</p></div>
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>최적화된 상태 관리:</b> React Query 도입으로 서버 데이터 캐싱</p></div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>보안 강화 인증:</b> Access/Refresh Token 기반 로그인 유지 시스템</p></div>
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>반응형 경험:</b> PWA 및 반응형 UI를 통한 최적의 크로스 플랫폼 지원</p></div>
              <div className="flex gap-3"><span className="text-rose-500 font-bold">✓</span><p><b>아키텍처 설계:</b> MVC 패턴 기반의 확장 가능한 백엔드 구축</p></div>
            </div>
          </div>
        </div>


        <div className="bg-slate-900 text-white rounded-3xl p-8 mb-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-6 opacity-10 font-black text-4xl italic uppercase">Performance</div>
           <h4 className="text-rose-400 font-bold mb-4 flex items-center gap-2 italic tracking-widest uppercase text-sm">Optimization Update</h4>
           <ul className="grid md:grid-cols-3 gap-6 text-sm">
             <li className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-rose-300 font-bold mb-1">성능 개선</span>
                중복 통신 제거 및 렌더링 최적화
             </li>
             <li className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-rose-300 font-bold mb-1">토큰 자동 관리</span>
                Refresh Token 만료 시 자동 처리
             </li>
             <li className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-rose-300 font-bold mb-1">사용자 경험</span>
                Skeleton UI 및 로딩 시스템 도입
             </li>
           </ul>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functions.map((f, i) => (
            <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-white hover:border-rose-200 transition-colors">
              <h4 className="font-bold text-rose-600 mb-3 flex items-center gap-2 uppercase tracking-tight">
                {f.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {f.items.map((item, j) => <li key={j} className="flex gap-2"><span>•</span>{item}</li>)}
              </ul>
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
        <div className="absolute top-0 right-0 p-10 opacity-5 font-black text-7xl italic select-none">RESOLVED</div>
        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />
        
        <div className="flex flex-col gap-4 relative z-10">
          {troubles.map((t, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{t}</p>
            </div>
          ))}
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

export default VcModal;