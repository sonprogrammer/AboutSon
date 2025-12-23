import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import { fuellySkills } from '../../data/fuellySkills'
import { fuellyFn } from '../../data/fuellyFn' 

const NutriAIModal = () => {
  const skills = fuellySkills
  const functions = fuellyFn 

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
        <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest">AI & Health Tech</span>
        <h1 className="text-3xl md:text-4xl mt-2 font-black text-slate-900 leading-tight">Nutri-AI : 개인 맞춤 영양 관리 서비스</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic">GitHub</span>
            <a href='https://github.com/sonprogrammer/fuelly' target='_blank' rel='noreferrer' className="text-emerald-600 hover:underline">Link</a>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            <span className="font-bold text-slate-900 underline italic">Live Demo</span>
            <a href='https://fuelly.onrender.com/' target='_blank' rel='noreferrer' className="text-emerald-600 hover:underline">Visit Site</a>
          </div>
        </div>
      </section>

      <div className="h-px bg-slate-100" />

   
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-emerald-50/50 rounded-[2.5rem] p-8 md:p-12 border border-emerald-100"
      >
        <SectionTitle title="Core Concept" icon="❓" />
        <p className="text-[15px] md:text-lg leading-relaxed text-slate-600 text-center max-w-3xl mx-auto">
          "매번 반복되는 칼로리 계산의 번거로움과 영양 성분 파악의 어려움을 해결하고자 했습니다.
          <span className="font-bold text-emerald-600"> AI 기반 데이터 분석</span>을 통해 사용자 개인의 신체 정보와 활동량에 최적화된 식단 가이드를 시각화하여 제공합니다."
        </p>
      </motion.div>

     
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Core Engineering" icon="🛠️" />

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((f, i) => (
            <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-white hover:border-emerald-200 transition-all hover:shadow-md group">
              <h4 className="font-bold text-emerald-700 mb-4 flex items-center gap-2 underline decoration-emerald-100 underline-offset-4 group-hover:decoration-emerald-400 transition-colors">
                {f.title}
              </h4>
              <ul className="space-y-3 text-[13px] text-slate-600 leading-relaxed">
                {f.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
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
      >
        <SectionTitle title="Key Features" icon="📱" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {[
            { title: "로그인/설문", items: ["카카오/이메일 로그인 지원", "신체 정보 설문", "권장 섭취량 자동 산출"] },
            { title: "메인 대시보드", items: ["AI 일별 응원 메시지", "실시간 영양 프로세스 바", "목표 즉시 수정 카드"] },
            { title: "스마트 식단 관리", items: ["음식 즉시 추가/삭제", "실시간 영양소 차감", "커스텀 음식 라이브러리"] },
            { title: "AI 추천 시스템", items: ["남은 영양소 기반 메뉴 추천", "AI 추천 즉시 저장 기능", "JSON 데이터 실시간 연동"] },
            { title: "AI 검색 & 좋아요", items: ["AI 영양 성분 상세 검색", "대체 메뉴 추천 제공", "관심 식단 즉시 반영"] },
            { title: "분석 및 통계", items: ["Recharts 주간 섭취 추이", "7/30일 히스토리 타임라인", "섭취 패턴 시각화 분석"] }
          ].map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
              <h5 className="font-bold text-emerald-600 text-sm mb-3 uppercase tracking-tight flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-400" /> {f.title}
              </h5>
              <ul className="space-y-1.5 text-[12px] text-slate-500">
                {f.items.map((item, j) => <li key={j}>• {item}</li>)}
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
        <div className="absolute top-0 right-0 p-10 opacity-5 font-black text-7xl italic select-none">DEBUGGING</div>
        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />
        <div className="relative z-10 grid gap-6">


          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> React 19: useEffect 내 동기적 setState 경고
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><b>Issue:</b> 로컬 스토리지에 저장된 메시지를 불러올 때, <code>useEffect</code> 내부에서 조건에 따라 즉시 <code>setState</code>를 호출하자 React 19에서 렌더링 사이클 위반 경고 발생.</p>
              <p><b>Solution:</b> <code>Promise.resolve().then()</code>을 활용해 상태 업데이트를 마이크로태스크 큐로 위임. 렌더링이 완료된 후 상태가 변경되도록 비동기 처리하여 React 19의 엄격한 렌더링 규칙 준수.</p>
            </div>
          </div>


          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Next.js App Router: API 핸들러 명명 규칙
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><b>Issue:</b> Pages Router의 <code>export default</code> 방식에 익숙하여 App Router에서 핸들러 인지 오류 발생.</p>
              <p><b>Solution:</b> App Router의 <code>route.ts</code>는 HTTP 메서드(GET, POST 등)를 명시적으로 <code>export</code> 해야 함을 파악. Named Export와 Default Export의 차이를 이해하고 모듈 시스템에 맞게 리팩토링 수행.</p>
            </div>
          </div>


          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> AI 모델 최적화 및 보안 아키텍처
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <p><b>Selection:</b> 비용 효율성과 성능을 고려하여 GPT-4 API 대신 무료 고성능 추론이 가능한 <b>Grok (Groq) AI</b>로 대체 선정.</p>
              <p><b>Security:</b> 프롬프트 인젝션 방지 및 API 키 노출 차단을 위해 프롬프트 작성 로직을 클라이언트가 아닌 <b>서버(Next.js Server Side)</b>에서 처리하도록 설계하여 보안성 강화.</p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> TanStack Query v5: 인터페이스 변화 대응
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p><b>Change:</b> v5부터 기존 <code>isLoading</code>이 <code>isPending</code>으로 변경됨에 따라 상태 기반 UI 로직을 최신 라이브러리 규격에 맞춰 마이그레이션 진행.</p>
            </div>
          </div>
        </div>

      </motion.section>


      <div className='w-full border-t border-slate-100 pt-10 overflow-hidden'>
        <div className="flex justify-center mb-6 font-bold text-xs text-slate-300 tracking-widest uppercase">Tech Stacks Used</div>
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
          {skills.map((skill, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }}>
              <img src={skill} alt="skill" className="h-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all transform hover:scale-110" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default NutriAIModal;