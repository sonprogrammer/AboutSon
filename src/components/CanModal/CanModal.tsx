import { StyledBox } from "../../style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'
import { canFn } from "../../data/canFn";
import { troubleS } from "../../data/canTroubles";
import { canSkills } from "../../data/canSkills";

const CanModal = () => {
  const functions = canFn
  
  const troubles = troubleS
  const skills = canSkills
  
  return (
    <div className='flex flex-col gap-5 text-sm sm:text-md'>
      <h1 className='text-center font-medium'>(개인 프로젝트)</h1>
      
      <div className="구분선 border border-gray-200"></div>

      
      <div
        className="맨위 소개 grid gap-[10px] grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] items-center mx-auto">
        <div>프로젝트 소개</div>
        <h3>오답노트 플랫폼</h3>

        <div>깃허브 주소</div>
        <div>
          <a href='https://github.com/sonprogrammer/CAN' target="_blank" rel="noreferrer"
            className="hover:text-blue-500 hover:underline underline-offset-3 decoration-yellow-300 decoration-2"
          >
            https://github.com/sonprogrammer/CAN
          </a>
        </div>
      </div>

      <div className="구분선 border border-gray-200"></div>

      <div className="만든이유 짧게 bg-gray-50 rounded-2xl shadow-md p-3 px-7">
        <h1 className="text-center font-bold text-xl mb-3">❓개발이유</h1>
        <p className="font-semibold">시험 준비 과정에서 손으로 작성하는 것보다 타이핑을 통해 오답노트를 정리하는 것이 시간적으로 더 효율적이라는 점에 착안하여 
          이 프로젝트를 시작하게 되고 문제를 풀고 복습함으로써 학습 효과가 더욱 향상될 것이라는 아이디어를 바탕으로 개발을 진행</p>
      </div>

      <motion.div
        className="역할 및 기능 border-2 p-5 rounded-2xl border-blue-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className="font-bold text-xl mb-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            📱역할 및 기능
        </motion.h1>
        <h1 className="text-center font-semibold text-gray-500">개인 프로젝트로 백엔드와 프론트엔드 모두 설계·구현</h1>

        <ul className="flex justify-around mt-3">
          {functions.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
            >
              {i+1}. {f}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className='트러블 슈팅 bg-gray-50 rounded-2xl shadow-md p-3 px-7'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-xl mb-2 text-center">🔫 트러블슈팅</h1>

        <div className="mb-3 flex flex-col gap-3 bg-gradient-to-r from-blue-100 to-yellow-50 px-10 py-7 rounded-xl ">
          {troubles.map((t, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity:1, y: 0}}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
            >
              {i+1}. {t}
            </motion.div>
          ))}
          
        </div>
      </motion.div>


      <div className='기술 스택 w-full flex justify-center'>
        <div className={`${StyledBox} w-full`}>
          <Swiper
            spaceBetween={60}
            slidesPerView={"auto"}
            autoplay={{ delay: 10, disableOnInteraction: false }}
            loop={true}
            speed={3000}
            modules={[Autoplay]}
            className='mySwiper'
            style={{ height: '100px' }}
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill}>
                <img src={skill} alt={skill} className="transition-transform duration-300 hover:scale-110"/>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default CanModal
