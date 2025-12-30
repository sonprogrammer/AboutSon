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


      <section className="text-center space-y-4 p-2">
        <span className="px-4 py-1.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest">AI & Health Tech</span>
        <h1 className=" md:text-xl mt-2 font-black text-slate-900 leading-tight">개인 맞춤 영양 관리 서비스</h1>
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
          "매번 반복되는 칼로리 계산의 번거로움과 영양 성분 파악의 어려움을 해결하고<br />
          <span className="font-bold text-emerald-600"> AI 기반 데이터 분석</span>을 통해 사용자 개인의 신체 정보와 활동량에 최적화된 식단 가이드를 시각화하여 제공."
        </p>
      </motion.div>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Full-Stack Implementation" icon="📱" />


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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            { title: "로그인/설문", items: ["카카오/이메일 로그인 지원", "신체 정보 설문", "권장 섭취량 자동 산출"] },
            { title: "홈페이지", items: ["AI 일별 응원 메시지", "실시간 영양 프로세스 바", "목표 즉시 수정 카드"] },
            { title: "식단 관리 페이지(1)", items: ["음식 즉시 추가/삭제", "실시간 영양소 차감", "커스텀 음식 라이브러리"] },
            { title: "식단 관리 페이지(2)", items: ["남은 영양소 기반 메뉴 추천", "AI 추천 즉시 저장 기능", "JSON 데이터 실시간 연동"] },
            { title: "AI 검색 & 좋아요 페이지", items: ["AI 영양 성분 상세 검색", "대체 메뉴 추천 제공", "관심 식단 즉시 반영"] },
            { title: "분석 및 통계 페이지", items: ["Recharts 주간 섭취 추이", "7/30일 히스토리 타임라인", "섭취 패턴 시각화 분석"] }
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
       
        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />

        <div className="relative z-10 flex flex-col gap-10 mt-8">


          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 01</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">React 19: useEffect 내 동기적 상태 업데이트 경고</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3 relative">
              <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">React 19의 엄격해진 렌더링 규칙에 따라 렌더링 도중 발생하는 동기적 상태 변경을 감지함</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">useEffect 내부에서 로컬 스토리지 데이터 로드 시 <span className="text-red-300">렌더링 사이클 위반 경고</span> 발생</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                </div>
                <p className="text-[14px] text-emerald-100 font-medium"><code>Promise.resolve()</code>를 통해 마이크로태스크 큐로 위임하여 렌더링 완료 후 상태가 변경되도록 비동기 처리</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 02</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">AI 모델 최적화 및 보안 아키텍처 설계</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3 relative">
              <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Selection</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">비용 효율성과 최신 추론 성능을 고려하여 GPT-4 대비 경쟁력 있는 <span className="text-white">Grok AI</span>를 대체 모델로 채택</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Security</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">클라이언트 단의 프롬프트 작성 로직은 <span className="text-red-300">인젝션 및 API 키 노출</span>의 취약점이 존재함</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                </div>
                <p className="text-[14px] text-emerald-100 font-medium">모든 프롬프트 로직을 <b>Server-Side</b>에서 처리하도록 설계하여 보안 아키텍처 강화 및 API 키 은닉</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 03</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">TanStack Query v5: 인터페이스 변화 및 규격 대응</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-3 relative">
              <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  TanStack Query가 v5로 업데이트되며 명확성을 위해 <span className="text-white">API 인터페이스와 속성명</span>이 대거 변경됨
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
                </div>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  기존 v4 방식의 속성 사용 시 타입 에러 발생 및 폐기된 옵션으로 인한 <span className="text-red-300">캐싱 전략</span> 오작동
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                </div>
                <p className="text-[14px] text-emerald-100 font-medium">
                  <p>v5부터 기존 <code>isLoading</code>이 <code>isPending</code>으로 변경됨에 따라 상태 기반 UI 로직을 최신 라이브러리 규격에 맞춰 마이그레이션 진행.</p>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.section>



      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-emerald-50/50 rounded-3xl p-8 md:p-12 text-center "
      >
        <SectionTitle title="Insights" icon="❗" />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
            <p className="text-[16px] md:text-lg text-slate-600 leading-relaxed font-medium italic">

              "이번 프로젝트를 통해 <strong className="text-slate-900 underline decoration-emerald-300 underline-offset-4">처음으로 AI 모델을 실제 서비스에 접목</strong>해 보는 뜻깊은 경험을 했습니다.
              단순한 데이터 조회를 넘어 AI가 사용자 요구사항을 분석하고 응답을 생성하는 과정을 구현하며,
              앞으로 제가 만들어갈 프로젝트들의 <strong className="text-slate-900 italic">확장성과 가능성이 무궁무진함</strong>을 느꼈습니다."
            </p>
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