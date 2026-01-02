import { motion } from 'framer-motion'

const AboutmeContents = () => {
    const sentences = [
        <>
            아이디어를 <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>서비스</strong>로, 서비스를 <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>경험</strong>으로 만드는 개발자를 꿈꾸며 성장하고 있습니다.
        </>,
        <>
            <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>긍정적인 마인드셋</strong>으로 문제를 해결하고, <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>새로운 도전</strong>을 즐깁니다.
        </>,
        <>
            더 나은 <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>UI/UX</strong>와 최적화된 코드를 위해 지속적으로 고민합니다.
        </>,
        <>
        사용자의 일상에 <strong className='text-slate-900 font-bold decoration-purple-300 underline underline-offset-4 decoration-2'>긍정적인 변화</strong>와 새로운 가치를 선물하는 개발자가 되고 싶습니다.
    </>
    ]

    return (

        <div className='flex flex-col gap-5 md:gap-7 mt-2'>
            {sentences.map((sentence, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: i * 0.2, 
                        ease: [0.21, 0.47, 0.32, 0.98] 
                    }}
                    viewport={{ once: true }}
                    className='relative pl-6 text-slate-600 leading-relaxed text-[15px] md:text-lg'
                >
                   
                    <span className="absolute left-0 top-1.5 w-[2px] h-[70%] bg-slate-200 rounded-full" />
                    
                    <p className='font-sans tracking-tight'>
                        {sentence}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}

export default AboutmeContents