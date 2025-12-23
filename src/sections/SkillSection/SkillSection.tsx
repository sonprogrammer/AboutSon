import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { StyledBox } from '../../style'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillSection = () => {
  const skills = [
    'html.svg', 'css.svg', 'javascript.svg', 'typescript.svg', 'react.svg', 
    'nextjs.svg', 'reactquery.svg', 'nodejs.svg', 'mongodb.svg', 'tailwind.svg', 
    'styled.svg', 'mui.svg', 'zustand.svg', 'axios.svg'
  ]

  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })
  return (
    <div ref={ref} className="w-full">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='flex items-center gap-3 mb-10 ml-2'
      >
        <div className="w-1.5 h-7 bg-purple-500 rounded-full" />
        <h2 className='text-3xl font-bold text-slate-900 tracking-tight'>Technical Skills</h2>
      </motion.div>


      <div className={`${StyledBox} relative bg-white rounded-3xl border border-slate-50 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)]`}>
        

        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Swiper
          spaceBetween={40} 
          slidesPerView={"auto"}
          autoplay={{ 
            delay: 0, 
            disableOnInteraction: false 
          }}
          loop={true}
          speed={4000} 
          modules={[Autoplay]}
          className='skill-swiper flex items-center'
          style={{ height: '80px' }}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill} style={{ width: 'auto' }} className="flex items-center justify-center">
              <div className="group relative px-4">
                <img 
                  src={skill} 
                  alt={skill.split('.')[0]} 
                  className='h-12 md:h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110' 
                />

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                  {skill.split('.')[0]}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SkillSection