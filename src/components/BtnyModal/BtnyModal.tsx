
import { StyledBox } from "../../style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'
import { bntySkills } from "../../data/bntyskills";
import { bntyFn } from "../../data/bntyFn";
import { bntyR } from "../../data/bntyLast.tsx";

const BtnyModal = () => {
  const functions = bntyFn
  const skills = bntySkills
  const reflection = bntyR
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
        <h3>트레이너와 회원간 소통 창구</h3>

        <div>깃허브 주소</div>
        <div>
          <a href='https://github.com/sonprogrammer/BNTYpt' target="_blank" rel="noreferrer"
            className="hover:text-red-700 hover:underline underline-offset-3 decoration-stone-600 decoration-2"
          >
            https://github.com/sonprogrammer/BNTYpt
          </a>
        </div>
        <div>프로젝트 주소 </div>
        <div>
          <a href='https://bnty.netlify.app/' target="_blank" rel="noreferrer"
            className="hover:text-red-600  underline-offset-3 decoration-stone-600 decoration-2"
          >
            https://bnty.netlify.app/
          </a>
        </div>
        
      </div>

      <div className="구분선 border border-gray-200"></div>

      <div className="rounded-2xl shadow-md p-3 px-7">
        <h1 className="text-center font-bold text-xl mb-3">업데이트</h1>
        <p className="font-semibold text-center">기존 존재하던 오류등을 개선하고, QR코드 연결 성능 향상, 채팅·노트·앨범 기능 개선, PWA 도입 및 UI/UX 전반
          개선을 통해 사용자 경험을 향상시킴
        </p>
      </div>

      <div className="만든이유 짧게 bg-gray-50 rounded-2xl shadow-md p-3 px-7">
        <h1 className="text-center font-bold text-xl mb-3">❓프로젝트 목적&개요</h1>
        <h1 className="text-center font-semibold text-lg text-red-700 mb-3">회원과 트레이너 모두가 안심하고 소통할 수 있는 공간</h1>
        <p className="font-semibold">
          뉴스에서 트레이너의 부적절한 언행과 개인정보 유출 사례를 접하며 사생활 보호의 필요성을 느끼고
          이에 회원과 트레이너가 개인 연락처 대신 사이트를 통해서만 소통하도록 하는 안전한 시스템을 기획·개발하였고, 트레이너
          경험을 바탕으로 불편 사항을 개선
        </p>
      </div>

      <motion.div
        className="역할 및 기능 border-2 p-5 rounded-2xl border-red-700"
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
          개인 프로젝트로 백엔드와 프론트엔드 모두 설계·구현<br />
        </h1>
        <p className="shadow-md mb-3 p-3 rounded-md bg-stone-50 font-semibold">
          서버 측 REST API와 CRUD 기능을 직접 설계·구현하고 프론트엔드에서 이를 연동하여 
          앨범 게시물, 날짜별 기록, 채팅, 노트 관리 기능을 완성.<br />
          채팅의 실시간 처리를 위해 웹소켓을 도입하였고 추후에 사용자 경험을 위해 읽음/안읽음 처리를
          통해 소통을 명확화.<br/>
           QR코드 연결 성능 최적화, PWA
          도입, UI/UX 개선을 통해 모바일과 웹 사용자 경험을 향상시킴
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
              <h4 className="font-bold text-red-800">{f.title}</h4>
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
              <div className="bg-red-50 w-full">   
              {f.update ? <p className="mt-2 font-bold text-blue-950">업데이트</p> : <></>}
              <ul>
                {f.update?.map((content, t) => (
                  <motion.li
                    key={content}
                    initial={{opacity: 0, x:-20}}
                    whileInView={{opacity:1, x: 0}}
                    transition={{
                      duration: 0.4,
                      delay: t * 0.2 + t * 0.1
                    }}
                    viewport={{once: true}}
                  >
                    {content}
                  </motion.li>
                ))}
              </ul>
            </div>
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

        <div className="mb-3 flex flex-col gap-3 bg-gradient-to-r from-red-200 to-stone-200 px-10 py-7 rounded-xl ">
          <p className="font-semibold">초기에는 여러 기능을 추가하려 했지만, 페이지가 중복되고 사이트의 핵심 목적이 흐려지는 문제 발생 </p>
          <p className="font-semibold">결국 불필요한 기능을 제거하고, 프로젝트의 주제와 핵심 기능을 다시 정리하여 집중</p>

        </div>
      </motion.div>

      <motion.div
        className="느낀점 p-6 bg-gray-50 rounded-xl shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-xl mb-2 text-center">❗느낀점</h1>
        <div className="flex flex-col gap-2">

          {reflection.map((r, i) => (
            <motion.p
              className="leading-relaxed text-gray-700 text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
            >
              {r}
            </motion.p>
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

export default BtnyModal
