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
      viewport={{once: true}}
      whileInView="visible"
      variants={sectionVariants}
    >
      <motion.p variants={itemVariants} className="text-xl font-semibold text-gray-800">
        🌏 해외 경험
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

    </div>
  )
}

export default AppealSection
