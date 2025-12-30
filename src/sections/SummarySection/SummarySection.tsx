import { motion } from "framer-motion";

const SummarySection = () => {
    return (
        <motion.section
            className="relative overflow-hidden bg-white rounded-[2.5rem] p-8 md:p-14 mt-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-50 rounded-full blur-[80px] opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-60" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="w-1.5 h-7 bg-purple-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Summary</h2>
                </motion.div>

                <div className="space-y-6 text-slate-600 leading-[1.8] text-base md:text-lg">
                    <p>
                        해외 경험을 통해 다양한 환경 속에서도 빠르게 적응하고, 새로운 경험을 두려워하지 않는 태도를 갖게 되었습니다.
                    </p>
                    <p>
                        그 과정에서 <span className="font-bold text-slate-900 border-b-2 border-purple-200">자기계발에 대한 열정</span>이 커지며
                        도전과 경험을 중시하게 되었고, 늘 긍정적인 자세로 성장해왔습니다.
                    </p>
                    <p>
                        디자인에 대한 관심으로 <span className="font-bold text-slate-900">GTQ 자격증</span>을 취득하였으며,
                        해외 경험을 바탕으로 꾸준히 영어를 공부하며 자기계발을 이어왔습니다.
                        부족한 부분을 채우기 위해 부트캠프를 수료하며 웹 개발 전반의 지식과 협업 능력을 키웠고, 
                        전문성을 높이기 위해 <span className="font-bold  border-b-2 border-purple-200 text-purple-700">정보처리기사</span> 자격증을 취득하며 개발자로서의 역량을 체계적으로 쌓아왔습니다.
                    </p>
                    <p>
                        이제 일상 속 불편함을 스스로 해결하고자 프로젝트를 진행하며,
                        작은 아이디어를 실제 서비스로 구현해 나가는 과정에서 진정한 즐거움을 느끼고 있습니다.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-12">
                    {[
                        "🌍 해외 경험",
                        "💪 꾸준한 자기계발",
                        "⚡ 도전을 중시",
                        "✨ 경험을 중시",
                        "🌟 긍정적인 태도",
                        "💡 세상을 바꾸는 작은 아이디어",
                    ].map((tag, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                backgroundColor: "white",
                                borderColor: "#A855F7",
                                color: "#A855F7"
                            }}
                            className={`bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-full
                             text-slate-600 font-bold text-sm md:text-base shadow-sm cursor-default transition-all`}
                        >
                            {tag}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SummarySection;