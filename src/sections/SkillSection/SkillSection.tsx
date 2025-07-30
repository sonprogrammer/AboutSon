import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SkillSection = () => {
  return (
    <Swiper
    modules={[Virtual]}
      spaceBetween={30}
      slidesPerView={3}
      // autoplay={{ delay: 0, disableOnInteraction: false }}
      loop={true}
      // effect='slide'
      // speed={5000}
      virtual
      // cssMode={false}
    >
      <SwiperSlide>
        <img src="/nextjs.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/react.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/javascript.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/typescript.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/html.svg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/css.svg" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SkillSection
