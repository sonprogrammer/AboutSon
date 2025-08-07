import { RoadMap } from "../../components"
import {motion} from 'framer-motion'


const FeatureSection = () => {


  return (
    
    <div className='w-full relative'>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-[70px] absolute">
          Features
        </h1>
      </motion.div>
      <div>
        <RoadMap />
      </div>
    </div>
  )
}

export default FeatureSection


// <div className="grid grid-cols-2 gap-5"
    //   >
    //   {datas.map((data, i) => (
    //     <motion.div
    //     initial={{opacity:0, y: 20}}
    //     whileInView={{opacity: 1, y: 0}}
    //     transition={{duration: 0.6, delay: i * 0.3, ease: 'easeInOut'}}
    //     >

    //       {/* <FeatureCard title={data.title} subtitle={data.subtitle} detail={data.detail} /> */}
    //     </motion.div>

    //   ))}
    // </div>