import { useState } from "react"
import { FeatureCard, RoadMap } from "../../components"
import { motion } from 'framer-motion'


const FeatureSection = () => {


  const [selected, setSelected] = useState<{
    label: string;
    cx: number;
    cy: number;
  } | null>(null)



  const handlePointClick = (point: { label: string; cx: number; cy: number }) => {
    setSelected(point)
  }

  console.log('sl', selected)

  return (

    <div className='w-full relative flex justify-center'>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[70px] absolute left-3"
      >
        <h1>
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

