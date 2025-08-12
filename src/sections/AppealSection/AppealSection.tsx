import styles from './AppealSection.module.css'

const AppealSection = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-800'>
      <h1 className="text-white text-4xl font-bold mb-3">
        There is no failure,
      </h1>
      <h1 className="text-white text-4xl font-bold mb-7">
        only stepping stones
      </h1>

      <div className="relative">
        <h1 className={`${styles.reflection} reflection text-white text-4xl font-bold opacity-30`}>
          There is no failure,
        </h1>
        <h1 className={`${styles.reflection} reflection text-white text-4xl font-bold opacity-30`}>
          only stepping stones
        </h1>
      </div>

{/* TODO 여기다가 읽어주셔서 감사하다고 쓸까? */}


    </div>
  )
}

export default AppealSection
