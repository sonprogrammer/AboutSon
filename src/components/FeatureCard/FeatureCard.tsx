import { easeInOut, motion } from 'framer-motion'

interface FeatureCardProps {
    title: string
    subtitle: string
    detail: string
}

const FeatureCard = ({ title, subtitle, detail }: FeatureCardProps) => {
    return (
        <motion.div
            className="relative p-6 rounded-2xl shadow-md min-h-[200px]
             bg-white cursor-pointer overflow-hidden group hover:bg-indigo-50 transition-colors duration-300
             flex flex-col justify-center
             "
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}

        >
            {/* <div className='flex flex-col items-center justify-center text-center'> */}
            <div className='w-full h-full'>
            
                    <div className='flex flex-col justify-center text-center h-full w-full'>
                        <h1>
                            {title}
                        </h1>
                        <h2>
                            {subtitle}
                        </h2>
                    </div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ ease: easeInOut, duration: 0.7 }}
                    className='absolute top-0 left-0 w-full h-full  backdrop-blur-sm opacity-0 hover:opacity-100 flex flex-col items-center justify-center'
                >

                    <h2>
                        {subtitle}
                        hover
                    </h2>
                    <p>
                        {detail}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default FeatureCard
// import { Box, Card, CardContent, Typography } from '@mui/material'
// import { easeInOut, motion } from 'framer-motion'

// interface FeatureCardProps {
//     title: string
//     subtitle: string
//     detail: string
//     img: string
//     thirdImg?: string
// }

// const FeatureCard = ({ title, subtitle, detail, img, thirdImg }: FeatureCardProps) => {
//     return (
//         <motion.div
//             className="relative p-6 rounded-2xl shadow-md min-h-[300px] bg-white cursor-pointer overflow-hidden group hover:bg-indigo-50 transition-colors duration-300"
//             whileHover={{ scale: 1.01 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 20 }}

//         >
//             {/* <div className='flex flex-col items-center justify-center text-center'> */}
//             <div         
//                 style={{ backgroundImage: `url(${img})`}}
//                 className="absolute inset-0 bg-center bg-cover transition-all duration-500 ease-in-out"
//             >
//                 <div>
//                     <h1>
//                         {title}
//                     </h1>
//                     <h2>
//                         {subtitle}
//                     </h2>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ ease: easeInOut, duration: 0.3 }}
//                     className='absolute top-0 left-0 w-full h-full hover:bg-white/90 backdrop-blur-xl opacity-0 hover:opacity-100 flex flex-col items-center justify-center'
//                 >
//                     <h2>
//                         {subtitle}
//                         hover
//                     </h2>
//                     <p>
//                         {detail}
//                     </p>
//                 </motion.div>
//             </div>
//         </motion.div>
//     )
// }

// export default FeatureCard
