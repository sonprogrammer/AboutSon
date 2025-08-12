
import { RoadMap } from "../../components"
import { motion } from 'framer-motion'


const FeatureSection = () => {


  return (

    <div className='w-full relative flex justify-center'>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[100px] absolute left-3 top-20"
      >
        <h1 className="font-semibold">
          Features
        </h1>
      </motion.div>
      <div className="w-[80%]">
        <RoadMap />
      </div>
      

    </div>
  )
}

export default FeatureSection

