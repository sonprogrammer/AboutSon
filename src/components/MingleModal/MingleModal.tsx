import { mingleSkills } from "../../data/mingleSkills"
import { StyledBox } from "../../style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { mingleFn } from "../../data/mingleFn";
import { motion } from 'framer-motion'

const MingleModal = () => {

  const skills = mingleSkills
  const functions = mingleFn

  return (
    <div className='flex flex-col gap-5 text-sm sm:text-md'>
      <h1 className='text-center font-medium'>(팀 프로젝트)</h1>
      <div className="구분선 border border-gray-200"></div>

      
      <div
        className="맨위 소개 grid gap-[10px] grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] items-center mx-auto"
      >
        <div>프로젝트 소개</div>
        <h3>다양한 사람들과 취향을 나누는 플레이리스트 공유 플랫폼</h3>

        <div>깃허브 주소</div>
        <div>
          <a href='https://github.com/sonprogrammer/mingle' target="_blank" rel="noreferrer"
            className="hover:text-purple-500 hover:underline underline-offset-3  decoration-gray-400 decoration-2"
          >
            https://github.com/sonprogrammer/mingle
          </a>
        </div>
      </div>

      <div className="border border-gray-200"></div>

      <motion.div
        className="역할 bg-gray-50 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center mb-2 mt-2">
          <h1 className="text-xl font-bold">역할</h1>
          <h2 className="font-semibold text-blue-600">프론트엔드</h2>
        </div>

        <div className=" p-3 rounded-2xl font-semibold flex flex-col gap-3 px-7 py-5">
          <p>
            1. 프로젝트에서 다양한 기능을 구현하기 위해 여러 컴포넌트를 제작하고 백엔드와의 원활한 데이터 흐름을 구축
          </p>
          <p>
            2. REST API를 통해 사용자 입력을 서버에 전달하고 서버 처리 결과를 받아와 React에서
            동적으로 화면을 업데이트하는 기능을 구현
          </p>
          <p>
            3. 라이브러리들을 활용하여 상태관리와 API 요청을 처리하여 애플리케이션의 흐름을 유기적으로 연결
          </p>
        </div>
      </motion.div>

      <motion.div
        className="기능 border-2 border-purple-400 rounded-2xl p-3 sm:p-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-xl mb-2 text-center">📱 담당 역할</h1>
        <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-5  ">
          {functions.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              viewport={{ once: true }}
              className="bg-stone-50 rounded-xl p-2 sm:p-4 shadow-md"
            >
              <h4 className="font-bold">{f.title}</h4>
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
        className='트러블 슈팅 bg-gray-50 rounded-2xl shadow-md p-1 sm:p-3 sm:px-7'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-xl mb-2 text-center">🔫 트러블슈팅</h1>

        <div className="mb-3 grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 bg-gradient-to-r from-purple-100 to-indigo-50 p-5 rounded-xl ">
          <h1 className="font-bold col-span-2">🎯 날씨 api cors 이슈</h1>

          <p className="font-bold">reason</p>
          <p>api 요청시 커스텀 훅을 통해 헤더에 토큰 값을 포함시켜 요청</p>

          <p className="font-bold">problem</p>
          <p>openweathermap api는 api 제공자가 제공하는 서비스의 보안을 강화하고 무단 엑세스를 방지하기 위해 Authorization 토큰을 포함하는 것을 허용하지 않음. 이에 따라 브라우저에서 CORS 정책에 의해 요청이 차단되어 오류가 발생함</p>

          <p className="font-bold">solution</p>
          <p>기존에 사용하던 커스텀 Axios 인스턴스는 Authorization헤더를 포함하고 있기 때문에 이를 사용하지 않고 기본 axios.get(...) 으로 직접 요청을 보내도록 수정하여 문제를 해결함</p>
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
        <p className="leading-relaxed text-gray-700 text-justify">팀 프로젝트를 하면서 혼자 고민하는 것보다 팀원들과 적극적으로 소통하고 피드백을 주고받는 과정이 더 좋은 결과를
          만든다는 점을 깨달았습니다. 다양한 관점에서 문제를 바라보고 서로의 의견을 존중하는 것이 프로젝트 완성도 향상에 큰
          도움이 되었습니다</p>
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

export default MingleModal
