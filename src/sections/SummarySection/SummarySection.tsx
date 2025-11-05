// src/components/SummarySection.tsx

import { motion } from "framer-motion";

const SummarySection = () => {

    
    return (
        <motion.section
            className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-stone-100 shadow-lg rounded-3xl p-8 md:p-12 mt-12 border border-stone-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}
            >
                <h1 className="text-[52px] font-semibold">
                    Summary
                </h1>
            </motion.div>

            <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-purple-100 via-pink-100 to-transparent rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-gradient-to-tr from-rose-100 via-amber-100 to-transparent rounded-full blur-3xl opacity-40" />


            <div className="space-y-4 text-gray-700 relative z-10 mt-5 leading-relaxed text-sm md:text-lg">
                <p>
                    해외 경험을 통해 다양한 환경 속에서도 빠르게 적응하고, 새로운 경험을 두려워하지 않는 태도를 갖게 되었습니다.
                </p>
                <p>
                    그 과정에서 <span className="font-semibold text-gray-900">자기계발에 대한 열정</span>이 커지며
                    도전과 경험을 중시하게 되었고, 긍정적인 자세로 성장해왔습니다.
                </p>
                <p>
                    졸업 전에는 디자인에 대한 관심으로 <span className="font-semibold text-gray-900">GTQ 자격증</span>을 취득하였고,
                    이후 해외 경험을 바탕으로 꾸준히 영어를 공부하며 자기계발을 이어왔습니다.<br />
                    졸업 후에는 부족한 부분을 채우기 위해 부트캠프를 수료하며 웹 개발 전반의 지식과 협업 능력을 키우고, 전문성을 높이기 위해
                    <span className="font-semibold text-gray-900"> 정보처리기사</span> 자격증도 취득하며 웹 개발자로서의 역량을 체계적으로 쌓아왔습니다.
                </p>
                <p>
                    이후 일상 속 불편함이나 개선이 필요한 점들을 스스로 해결하고자 프로젝트를 진행하며,
                    작은 아이디어를 실제 서비스로 구현하는 즐거움을 느끼고 있습니다.
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                {[
                    "🌍 해외 경험",
                    "💪 꾸준한 자기계발",
                    "⚡ 도전을 중시",
                    "✨ 경험을 중시",
                    "🌟 긍정적인 태도",
                    "💡 작은 아이디어와 기술로 세상을 바꾸는 개발자",
                ].map((tag, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, y: -12}}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`bg-white/80 backdrop-blur-sm border px-4 py-2 rounded-full
                         text-gray-700 font-medium text-sm md:text-base shadow-sm hover:shadow-md transition-all`}
                         
                         
                    >
                        {tag}
                    </motion.button>
                ))}
            </div>
        </motion.section>
    );
};

export default SummarySection
