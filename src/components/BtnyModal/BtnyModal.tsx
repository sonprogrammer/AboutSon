import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { bntySkills } from "../../data/bntyskills";
import { bntyFn } from "../../data/bntyFn";
import { bntyR } from "../../data/bntyLast.tsx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

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


      <section className="text-center space-y-4 p-2">
        <span className="px-4 py-1.5  bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest">Personal Project</span>
        <h1 className="text-xl mt-2 font-black text-slate-900 leading-tight">트레이너용 소통 플랫폼</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-red-200">GitHub</span>
            <a href='https://github.com/sonprogrammer/BNTYpt' target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Link</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 italic underline decoration-red-200">WebSite</span>
            <a href='https://bnty.netlify.app/' target="_blank" rel="noreferrer" className="text-red-600 hover:underline">Visit Site</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-xl mt-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <p className="text-[12px] text-amber-700 font-medium">
            무료 호스팅 특성상 초기 접속 시 서버 기동을 위해 <span className="font-bold underline">약 1~2분</span> 정도 소요될 수 있습니다.
          </p>
        </motion.div>
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
            개인정보 유출과 사생활 침해 문제를 해결하기 위해 기획되었습니다. 개인 연락처 노출 없는
            <span className="font-bold text-red-600"> 독립된 소통 시스템</span>을 구축하고,
            실무 경험을 바탕으로 현장의 불편함을 개선<br /> 특히,
            <span className="font-bold text-red-600"> 수업 횟수의 실시간 공유 및 관리</span> 기능을 통해
            운영의 투명성을 확보하고 트레이너와 회원 간의 탄탄한 신뢰를 구축
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
            기존 오류 개선 및 QR코드 연결 성능 최적화, <br />
            <span className="text-red-600 font-bold">PWA 도입</span>을 통해 모바일 웹 환경에서 네이티브 앱에 준하는 사용자 경험(UI/UX) 제공
          </p>
        </motion.div>
      </div>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <SectionTitle title="System Architecture & Flow" icon="🏗️" />

        <div className="bg-slate-50 border border-slate-200 rounded-4xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3 bg-white rounded-2xl border border-slate-100 shadow-inner overflow-hidden group relative">
              <div className="absolute top-3 right-3 z-10 bg-slate-800/60 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              이미지를 클릭하여 확대/이동 가능합니다
              </div>

              <TransformWrapper>
                <TransformComponent wrapperClass="w-full! h-full!">
                  <img
                    src="/Bntyflow.png"
                    alt="Flowchart"
                    className="w-full h-auto cursor-zoom-in"
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>

            <div className="w-full md:w-1/3 space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  핵심 설계 및 아키텍처
                </h4>
                <ul className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <li>
                    <strong className="text-slate-800">1. 유연한 역할 기반 서비스 플로우:</strong><br />
                    로그인 후 트레이너와 회원의 역할을 명확히 분리하고, QR 코드를 통한 즉시 매칭 시스템으로 진입 장벽을 최소화하도록 설계했습니다.
                  </li>
                  <li>
                    <strong className="text-slate-800">2. 계층화된 시스템 아키텍처:</strong><br />
                    React 기반 UI 레이어부터 Node.js 서버 레이어까지 MVC 패턴을 준수하여 설계했습니다.
                  </li>
                  <li>
                    <strong className="text-slate-800">3. 하이브리드 상태 관리 전략:</strong><br />
                    Recoil을 통한 전역 UI 상태 관리와 React-Query를 통한 서버 데이터 캐싱/동기화 전략을 분리하여 프론트엔드 성능과 데이터 정밀도를 높였습니다.
                  </li>
                  <li>
                    <strong className="text-slate-800">4. 양방향 실시간 통신 최적화:</strong><br />
                    HTTP REST API와 Socket.io를 병행 사용하여 일반적인 CRUD 작업과 실시간 채팅/읽음 처리 기능을 목적에 맞게 최적화했습니다.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-100">
                <p className="text-[11px] text-slate-400 italic">
                  * 설계도는 BNTY 서비스의 User Flow부터 Tech Stack까지의 연동 구조를 직접 도식화한 자료입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <SectionTitle title="Full-Stack Implementation" icon="📱" />

        <div className="bg-white border border-slate-100 p-8 rounded-4xl shadow-sm space-y-4">
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
        className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative mt-10"
      >

        <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />

        <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">
              ISSUE 01
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              한글 중복 전송 이슈 (IME)
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
                마지막 글자가 조합 중인 상태에서 Enter를 누르면 <span className="text-red-300 font-medium">조합 완료 이벤트와 전송 이벤트가 중복 발생</span>하여 결과적으로 동일한 데이터가 두 번 전송되는 현상 확인
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
              </div>
              <p className="text-[15px] text-slate-300 leading-relaxed">
                한글은 자음과 모음이 결합되는 <span className="text-white font-medium underline underline-offset-4 decoration-blue-500/50">
                  IME(Input Method Editor)
                </span>
                과정을 거치며, Enter 입력 시 글자 조합이 완료되지 않은 것으로 간주됨
              </p>
            </div>


            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
              </div>
              <p className="text-[15px] text-emerald-100 leading-relaxed font-medium">
                <span className="bg-emerald-500/20 px-1 rounded text-emerald-300 underline underline-offset-4">
                  isComposing</span>체크하여 글자 조합이 완료된 시점에만 이벤트를 실행하도록 분기 처리하여 해결
              </p>
            </div>
          </div>
        </div>
      </motion.section>



      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-red-50/50 rounded-3xl p-8 md:p-12 text-center"
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
          className="overflow-visible!"
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