import { motion, type Variants } from "framer-motion";


const AppealSection = () => {

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.3 
      } 
    },
  };


  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };
  
  return (
    <div className="h-screen">
      <motion.section
      className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        🌏 뉴질랜드 경험
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        💪 꾸준한 자기계발
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        ⚡ 도전을 중시
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        ✨ 경험을 중시
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        🌟 긍정적인 태도
      </motion.p>

      <motion.p variants={itemVariants} className="text-xl font-bold text-red-600">
        💡 작은 아이디어와 기술로 세상을 바꾸는 개발자
      </motion.p>
    </motion.section>
      {/* 뉴질랜드 워킹홀리데이를 통해 문제 해결 능력과 도전 정신을 키우고, 다양한 시선을 이해하며 UI/UX와 프론트엔드 개발에 대한 관심을 확립

      포트폴리오/자기소개서용 어필 섹션:

      뉴질랜드에서 혼자 문제를 해결하며 도전 정신과 자기계발 습관을 키웠습니다. 다양한 국적의 사람들과 협업하며 ‘다른 시선을 이해하는 법’을 배웠고, 
      이 경험이 UI/UX와 프론트엔드 개발에 대한 관심으로 이어졌습니다. 이를 바탕으로 꾸준함과 긍정적인 태도로 목표를 달성하는 것을 강점으로 삼고 있습니다. */}

        {/* //** 더 자세하게 보고 싶으면 클릭하라고 about me 섹션으로 이동시키고 모달 창 키는 버튼  */}

      {/* 작은 아이디어와 기술이 모여 세상을 바꿀 수 있다고 믿기에, 창의성을 바탕으로 변화를 이끄는 개발자로 성장하고 싶습니다. */}
        {/* ✨ 작은 아이디어와 기술이 모여 세상을 바꿀 수 있다고 믿기에, 창의성을 바탕으로 변화를 이끄는 개발자로 성장하고 싶습니다. */}

        {/* 🌏 뉴질랜드 경험에서 배운 도전 정신과 꾸준한 자기계발을 바탕으로, 한번 하기로 한 건 무조건 해낸다는 마음가짐으로 목표를 달성합니다. */}
    </div>
  )
}

export default AppealSection
