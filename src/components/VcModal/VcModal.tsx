import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { vcFn } from "../../data/vcFn";
import { vcSkills } from "../../data/vcskills";


const VcModal = () => {
  const functions = vcFn
  const skills = vcSkills

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
      

      <section className="text-center space-y-4 p-2">
        <span className="px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest">Full-Stack Project</span>
        <h1 className="text-xl mt-2 font-black text-slate-900 leading-tight">모의 투자 플랫폼</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-rose-200">GitHub</span>
            <a href='https://github.com/sonprogrammer/VirtualCoin' target="_blank" rel="noreferrer" className="text-rose-600 hover:underline">Link</a>
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
          복잡한 코인 시장을 처음 접하는 입문자들을 위한 학습 환경을 제공.<br />
          <span className="font-bold text-slate-900"> 업비트 API 기반의 실시간 데이터</span>를 활용해 실제 시장과 동일한 투자 환경을 직접 설계하고 구현.
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


  <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />

  <div className="flex flex-col gap-10 relative z-10 mt-8">

    <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <span className="w-fit px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white bg-rose-500">
          ISSUE 01
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          사용자 타겟에 따른 API 선정 및 UX 최적화
        </h3>
      </div>

      <div className="grid gap-8 md:grid-cols-3 relative">
        <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
        <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
            바이낸스 API는 다양한 종목을 지원하지만, <span className="text-white font-medium underline underline-offset-4 decoration-rose-500/50">방대한 코인 수</span>는 투자를 처음 접하는 입문자에게 과도한 피로감을 줄 수 있음
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
            초기 기획 의도인 <span className="text-white font-medium">'초보자를 위한 가상 투자 공간'</span> 구축에 있어 복잡한 인터페이스는 진입 장벽이 됨
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-emerald-100 leading-relaxed font-medium">
            비교적 코인 종류가 적고 국내 사용자에게 직관적인 <span className="bg-rose-500/20 px-1 rounded text-rose-300">업비트 API</span>로 선회하여 핵심 기능 중심의 깔끔한 학습 환경 구현
          </p>
        </div>
      </div>
    </div>


    <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <span className="w-fit px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white bg-red-500">
          ISSUE 02
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          업비트 WebSocket 실시간 데이터 수신 오류
        </h3>
      </div>

      <div className="grid gap-8 md:grid-cols-3 relative">
        <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
        <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
            업비트 서버 정책상 브라우저(Origin)에서 직접적인 WebSocket 연결을 허용하지 않으며 보안 강화 조치가 적용되어 있음
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
            클라이언트 단에서 직접 연동 시 <span className="text-red-300 font-medium">CORS 에러</span> 및 "Too many request" 제한이 발생하여 실시간 시세 업데이트 불가
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-emerald-100 leading-relaxed font-medium">
            중계 역할을 하는 <span className="underline underline-offset-4 decoration-emerald-500/50">백엔드 프록시 서버</span>를 구축하여 서버 간 통신으로 WebSocket 데이터를 수신 및 클라이언트에 전달하여 안정적 수신 성공
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <span className="w-fit px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-white bg-red-500">
          ISSUE 03
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          대량의 실시간 데이터 수신 시 초기 로딩 지연
        </h3>
      </div>

      <div className="grid gap-8 md:grid-cols-3 relative">
        <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
        <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
            수백 개의 코인 데이터를 웹소켓 스트림으로만 수신할 경우 모든 코인의 실시간 데이터가 수신될 때까지 
            <span className="text-white font-medium italic"> 로딩 상태</span>가 지속됨
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
          페이지 진입 시 실시간 데이터를 확인하기까지 <span className="text-red-300 font-medium">
          시간이 지체되어 부정적인 첫인상 발생 가능성</span> 확인
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
          </div>
          <p className="text-[14px] md:text-[15px] text-emerald-100 leading-relaxed font-medium">
            <span className="bg-amber-500/20 px-1 rounded text-amber-300">REST API
            </span>로 현재 시세를 즉시 불러와 화면을 먼저 렌더링한 후 백그라운드에서 웹소켓을 연결하는 하이브리드 방식으로 전환하여 
            <span className="underline underline-offset-4 decoration-emerald-500/50"> 초기 로딩 속도를 80% 이상 개선</span>
          </p>
        </div>
      </div>
    </div>
    
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