
import { StyledBox } from "../../style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'
import { vcFn } from "../../data/vcFn";
import { vcSkills } from "../../data/vcskills";
import { vcTroubles } from "../../data/vcTroubles";

const VcModal = () => {
  const functions = vcFn
  const skills = vcSkills
  const troubles = vcTroubles
  
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-center font-medium'>(개인 프로젝트)</h1>

      <div className="구분선 border border-gray-200"></div>


      <div
        className="맨위 소개 "
        style={{
          display: 'grid',
          gridTemplateColumns: '150px 1fr',
          gap: '10px',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        <div>프로젝트 소개</div>
        <h3>모의코인투자 플랫폼</h3>

        <div>깃허브 주소</div>
        <div>
          <a href='https://github.com/sonprogrammer/VirtualCoin' target="_blank" rel="noreferrer"
            className="hover:text-red-500 hover:underline underline-offset-3 decoration-gray-300 decoration-2"
          >
            https://github.com/sonprogrammer/VirtualCoin
          </a>
        </div>
      </div>

      <div className="구분선 border border-gray-200"></div>

      <div className="만든이유 짧게 bg-gray-50 rounded-2xl shadow-md p-3 px-7 flex flex-col gap-2">
        <h1 className="text-center font-bold text-xl mb-3">❓프로젝트 목적&개요</h1>
        <h1 className="text-center font-semibold text-lg text-red-500 mb-3">실제 코인 거래를 안전하게 경험하는 가상 체험 공간</h1>
        <p className="font-semibold text-center text-gray-600">
        코인을 처음 접하는 사람들에게 직접 경험할 수 있는 학습 환경을 제공하기 위해 개발
        </p>
        <p className="font-semibold text-center text-gray-600">프로젝트를 진행하면서 코인에 대한 이해를 높이기 위해 개발</p>
      </div>

      <motion.div
        className="역할 및 기능 border-2 p-5 rounded-2xl border-red-300"
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
        <h1 className="text-center font-semibold text-gray-500 mb-5">
          개인 프로젝트로 백엔드와 프론트엔드 모두 설계·구현
        </h1>
        <p className="shadow-md mb-3 p-3 rounded-md bg-stone-50 font-semibold">
          업비트 웹소켓을 활용해 실시간 코인 시세등의 데이터를 수신하고, REST API기반 CRUD기능을 설계·구현하여
          자산·거래 관리 기능을 개발<br/>
          또한 REST API와 웹소켓을 연동하여 실시간 데이터 표시 및 사용자 인터렉션을 처리고 사용자가 지정한 가격에 맞
          춰 자동으로 주문이 체결되도록 로직을 구현 <br/>
          PWA 및 반응형 UI적용하여 모바일 및 PC 사용자 경험을 향상 시킴
        </p>
        <ul className="grid grid-cols-3 gap-5">
          {functions.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              className="bg-stone-50 rounded-xl p-4 shadow-md"

            >
              <h4 className="font-bold text-red-500">{f.title}</h4>
              <ul className="list-disc ml-5 mt-1">
                {f.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.2 + j * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className='트러블 슈팅 bg-gray-50 rounded-2xl shadow-md p-3 px-7'
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-xl mb-2 text-center">🔫 트러블슈팅</h1>

        <div className="mb-3 flex flex-col gap-3 bg-gradient-to-r from-red-200 to-stone-50 px-10 py-7 rounded-xl ">
          {troubles.map((t,i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              viewport={{once:true}}
            >
                {t}
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
                <img src={skill} alt={skill} className="transition-transform duration-300 hover:scale-110" />

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </div>
  )
}

export default VcModal
