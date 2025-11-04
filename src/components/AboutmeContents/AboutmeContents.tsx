import { motion } from 'framer-motion'

const AboutmeContents = () => {
    const sentences = [
        <>
            아이디어를 <strong className='text-black underline underline-offset-2'>서비스</strong>로, 서비스를 <strong className='text-black underline underline-offset-2'>경험</strong>으로 만드는 개발자를 꿈꾸며 성장하고 있습니다.
        </>,
        <>
            <strong className='text-black underline underline-offset-3'>긍정적인 마인드 셋</strong>으로 문제를 해결하고, <strong className='text-black underline underline-offset-2'>도전</strong>을 즐기는 개발자입니다.
        </>,
        <>
            보다 나은 <strong className='text-black underline underline-offset-2'>UI/UX</strong>를 위해 지속적으로 고민하는 개발자입니다.
        </>
    ]
    return (
        <div className='mt-3 md:mt-7 flex flex-col gap-3 text-sm md:text-xl'>
            {sentences.map((sentence, i) => (

                <motion.ul
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3, ease: 'easeInOut', stiffness: 300, damping: 15 }}
                viewport={{ once: true }}
                className='list-disc ml-5 text-gray-600 font-mono'
                >
                    <li>{sentence}</li>
            </motion.ul>
            ))}
        </div>
    )
}

export default AboutmeContents


