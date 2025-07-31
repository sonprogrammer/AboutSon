import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { StyledBox } from '../../style'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillSection = () => {

  const skills = ['html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'react.svg', 'nextjs.svg', 'reactquery.svg', 'nodejs.svg',
    'mongodb.svg', 'tailwind.svg', 'styled.svg', 'mui.svg', 'zustand.svg', 'axios.svg'
  ]

  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px'})

  return (
    <div ref={ref}>
      <motion.div
        initial={{opacity: 0, y: 50, filter:'blur(4px)'}}
        animate={inView ? {opacity: 1, y: 0, filter: 'blur(0px)'}: {}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className='text-black text-3xl font-bold pb-5 ml-5'
      >
        My Skills
      </motion.div>

      <div className={StyledBox}>
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
              <img src={skill} alt={skill} />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SkillSection
