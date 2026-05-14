import { motion } from "framer-motion";
import { mungpassSkills } from "../../data/mungpassSkills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { mungpassFn } from "../../data/mungpassFn";

const SectionTitle = ({ title, icon, isDark = false }: { title: string; icon?: string; isDark?: boolean }) => (
    <div className="flex items-center gap-2 mb-6 justify-center">
        <span className="text-xl">{icon}</span>
        <h2 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
        </h2>
    </div>
)

export default function MungpassModal() {
    return (
        <div className='flex flex-col gap-12 text-slate-700 pb-10'>

            <section className="text-center space-y-4 p-2">
                <div className="flex justify-center items-center gap-2">
                    <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest">
                        PetCafe - O2O Service
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase border border-green-100 animate-pulse">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Service Enhancing
                    </span>
                </div>
                <h1 className="md:text-xl mt-2 font-black text-slate-900 leading-tight">애견 카페 간편 입장 및 통합 관리 플랫폼 '멍패스'</h1>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 italic">GitHub</span>
                        <a href='https://github.com/sonprogrammer/Mungpass' target='_blank' rel='noreferrer' className="text-orange-600 hover:underline">Link</a>
                    </div>
                    <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                        <span className="font-bold text-slate-900 underline italic">LandingPage</span>
                        <a href="https://mungpass-landing.vercel.app/" target="_blank" className="text-orange-600 hover:underline">Visit site</a>
                    </div>
                </div>
            </section>

            <div className="h-px bg-slate-100" />


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-orange-50/50 rounded-[2.5rem] p-8 md:p-12 border border-orange-100"
            >
                <SectionTitle title="Core Concept" icon="🐾" />
                <p className="text-[15px] md:text-lg leading-relaxed text-slate-600 text-center max-w-3xl mx-auto">
                    "번거로운 수기 명부 대신 <span className="font-bold text-orange-600">QR 스캔 한 번으로 1초 만에 입장</span>하고,<br />
                    견주에게는 이용 내역을, 사장님에게는 실시간 매출 통계와 고객 관리를 제공하는 올인원 솔루션."
                </p>
            </motion.div>


            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <SectionTitle title="Platform Architecture" icon="🏗️" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mungpassFn.map((f, i) => (
                        <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-white hover:border-orange-200 transition-all hover:shadow-md group">
                            <h4 className="font-bold text-xl text-orange-700 mb-4 flex items-center gap-2 underline decoration-orange-100 underline-offset-4 group-hover:decoration-orange-400 transition-colors">
                                {f.title}
                            </h4>
                            <ul className="space-y-3 text-[13px] text-slate-600 leading-relaxed">
                                {f.items.map((item, j) => (
                                    <li key={j} className="flex gap-2">
                                        <span className="text-orange-400 font-bold">•</span>
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
                className="bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden"
            >
                <SectionTitle title="Trouble Shooting" icon="🔫" isDark={true} />

                <div className="relative z-10 flex flex-col gap-10 mt-8">
                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 01</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">Next.js SSR 환경에서의 Ant Design 스타일 깨짐(FOUC) 대응</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 relative">
                            <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">초기 렌더링 시 CSS가 적용되지 않은 생 HTML이 노출되었다가 뒤늦게 스타일이 입혀지는 <span className="text-red-300 font-bold">FOUC 현상</span> 발생</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">Antd v5의 <span className="text-white">CSS-in-JS</span> 방식은 런타임에 스타일을 계산하므로, 서버에서 생성된 HTML에 스타일 시트가 즉시 포함되지 않음</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>
                                <p className="text-[14px] text-emerald-100 font-medium"><code>@ant-design/nextjs-registry</code>를 도입하여 서버 사이드에서 스타일을 추출해 HTML에 미리 주입함으로써 레이아웃 붕괴 문제 해결</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 02</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">컴포넌트 재사용 시 발생하는 데이터 캐시 잔상 및 렌더링 엇박자</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 relative">
                            <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">지도 API와 BottomSheet를 여러 페이지에서 재사용 시, <span className="text-white">이전 가게의 데이터</span>가 잠시 남아있거나 렌더링 타이밍이 어긋남</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">컴포넌트가 언마운트 되지 않고 Props만 바뀔 때 내부 Hook들이 <span className="text-red-300 font-bold">이전 캐시 상태</span>를 유지하여 발생하는 데이터 엇박자</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>
                                <p className="text-[14px] text-emerald-100 font-medium">컴포넌트에 <span className="text-white underline underline-offset-4">고유한 Key 값</span>을 부여하여, 상위 ID가 변경될 때마다 하위 컴포넌트와 훅을 강제로 초기화 및 재렌더링 시켜 정합성 확보</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 03</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">useSearchParams 사용 시 Prerender Build Error 발생</h3>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3 relative">
                            <div className="hidden md:block absolute top-1/2 left-1/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="hidden md:block absolute top-1/2 left-2/3 w-px h-12 bg-white/10 -translate-y-1/2" />
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <p className="text-xs font-black text-red-400 uppercase tracking-tighter">Problem</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">Vercel 배포 빌드 과정에서 <code>useSearchParams</code>를 사용하는 페이지가 사전 렌더링(Prerender)되며, <span className="text-red-300 font-bold">Suspense Boundary</span> 가 없다는 오류와 함께 빌드가 중단됨</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>
                                <p className="text-[14px] text-slate-300 leading-relaxed">Next.js App Router의 useSearchParams는 런타임 기반의 <span className="text-white">Client Hook으로 동작하며, CSR Bailout이 발생하는 훅</span>이기 때문에 반드시 Suspense Boundary 내부에서 실행되어야 함</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>
                                <p className="text-[14px] text-emerald-100 font-medium">useSearchParams를 사용하는 로직을 별도 <code>Client Component로 분리</code> 하고, 상위 페이지에서 <span className="text-white">Suspense</span> 로 감싸 CSR 전환 시점을 명확히 분리하여 빌드 오류 해결</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="inline-flex items-center whitespace-nowrap shrink-0 bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 04</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Refine 내부 QueryClient 분리로 인한 React Query 캐시 불일치 문제
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

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    매장 검색 시 네트워크 요청은 정상적으로 발생했지만
                                    <span className="text-red-300 font-bold"> React Query Devtools에 쿼리가 표시되지 않거나</span>,
                                    특정 상황에서 캐시 데이터와 실제 UI 상태가 어긋나는 현상 발생
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    Refine 내부에서 별도의 <span className="text-white">QueryClient</span>를 생성하면서,
                                    최상단 Provider의 QueryClient와 캐시 저장소가 분리됨.
                                    이로 인해 훅과 Devtools가 서로 다른 캐시를 바라보며 데이터 정합성 문제 발생
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>

                                <p className="text-[14px] text-emerald-100 font-medium">
                                    상위 <code>QueryClient</code> 인스턴스를 Refine 설정에 명시적으로 주입하여
                                    모든 훅이 <span className="text-white underline underline-offset-4">하나의 캐시 저장소(shared instance)</span>를
                                    공유하도록 구조 개선
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="inline-flex items-center whitespace-nowrap shrink-0 bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">
                                ISSUE 05
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Supabase Singleton 구조에서 발생한 인증 세션 및 연결 불안정 문제
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

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    특정 상황에서 인증 상태가 즉시 반영되지 않거나,
                                    네트워크 요청이 무한 대기 상태에 빠지는 현상 발생
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    Supabase Client를 전역 변수(singleton)로 고정 생성하면서,
                                    초기 인증 상태와 연결 정보를 지속적으로 재사용하게 되었고
                                    세션 변경 및 연결 종료 상황에 유연하게 대응하지 못함
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-xs font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>

                                <p className="text-[14px] text-emerald-100 font-medium">
                                    Supabase Client를 함수형 팩토리 구조로 변경하여
                                    요청 시점마다 최신 인증 상태를 반영하도록 개선하고,
                                    <span className="text-white">SSR Hydration 및 연결 안정성 문제</span> 해결
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                            <span className="w-fit bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest">ISSUE 06</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Zustand Persist 사용 시 SSR Hydration 타이밍 불일치 문제
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

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    새로고침 직후 persisted 상태가 아직 복구되지 않아,
                                    초기 렌더링 시점에 데이터가 비어있는 상태로 처리되는 문제 발생
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p className="text-xs font-black text-blue-400 uppercase tracking-tighter">Reason</p>
                                </div>

                                <p className="text-[14px] text-slate-300 leading-relaxed">
                                    Next.js SSR 환경에서는 브라우저 저장소(localStorage)가
                                    클라이언트에서만 접근 가능하기 때문에,
                                    상태 복구(Rehydration) 이전과 이후의 렌더링 타이밍 차이 발생
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    <p className="text-[14px] font-black text-green-400 uppercase tracking-tighter">Solution</p>
                                </div>

                                <p className="text-[14px] text-emerald-100 font-medium">
                                    Zustand Persist의 <code>onRehydrateStorage</code>를 활용하여
                                    Hydration 완료 상태를 명시적으로 관리하고,
                                    <span className="text-white underline underline-offset-4">클라이언트 상태 복구 이후에만 UI를 렌더링</span>하도록 개선
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
                className="bg-orange-50/50 rounded-3xl p-8 md:p-12 text-center"
            >
                <SectionTitle title="Insights" icon="💡" />
                <div className="max-w-4xl mx-auto space-y-8">

                    <div className="space-y-4">
                        <p className="text-[15px] md:text-base text-slate-600 leading-relaxed">
                            실무적인 O2O 비즈니스 모델 구현을 목표로 기획부터 배포까지 진행 중인 프로젝트입니다.
                            단순한 기능 구현에 그치지 않고, <strong className="text-slate-900">확장 가능한 FSD 아키텍처</strong>와
                            <strong className="text-slate-900">데이터 무결성을 보장하는 Supabase Trigger</strong>를 도입하여
                            실제 서비스 운영이 가능한 수준의 견고한 시스템을 구축하는 데 집중하고 있습니다.
                        </p>
                        <div className="flex justify-center gap-2 pt-2">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[12px] font-bold">#진행중</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[12px] font-bold">#비즈니스모델_고도화</span>
                            <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-[12px] font-bold">#실제운영지향</span>
                        </div>
                    </div>

                    <div className="border-t border-orange-200/50 w-24 mx-auto my-6" />

                    <p className="text-[16px] md:text-lg text-slate-600 leading-relaxed font-medium italic">
                        "B2B와 B2C를 통합하는 <strong className="text-slate-900 underline decoration-orange-300 underline-offset-4">O2O 플랫폼</strong>을 개발하며 데이터 시각화와 효율적인 상태 관리를 경험했습니다.
                        특히 <strong className="text-slate-900 italic">FSD 아키텍처 도입과 실시간 데이터 동기화</strong> 과정에서 마주한 기술적 변수들을 정면으로 해결하며,
                        확장 가능한 서비스 설계의 중요성을 체감한 소중한 자산이 되었습니다."
                    </p>
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
                    className="overflow-visible!"
                    style={{ height: '100px' }}
                >
                    {mungpassSkills.map((skill, i) => (
                        <SwiperSlide key={i} style={{ width: 'auto' }}>
                            <img src={skill} alt="skill" className="h-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all transform hover:scale-110" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}