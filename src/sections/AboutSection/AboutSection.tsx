import { Button } from '../../CommonStyle'

const AboutSection = () => {
  return (
    <div className='flex gap-10 relative bg-gray-100 p-10 rounded-3xl'>
      <div className='w-[300px] ml-20 '>
        <img src="/photo.png" alt="내사진" className='rounded-xl' />
      </div>
      <div className='flex flex-col justify-center flex-1'>
        <h1 className='font-bold text-2xl'>About me</h1>
        <p>- 보다 나은 UI/UX를 위해 **지속적으로 고민하는** 개발자입니다.
          - 예를 들어 [BNTY](https://www.notion.so/BNTY-176233c66b0a800f9e56c2f31e2fae3f?pvs=21)  프로젝트를 진행할때 트레이너와 회원간 연결을 할때 UX측면을 고려하여 기존에 사용하지 않았었던 QR코드를 사용하여 기능 구현하였습니다. 이를 통해 실용적인 디자인과 사용자의 편리함을 동시에 고려한 경험을 쌓았습니다.
          - **꾸준한 자기계발**을 통해 지속적으로 발전하는 개발자입니다.
          - **긍정적인 마인드 셋**으로 문제를 해결하고, **도전을 즐기는** 개발자 입니다.</p>
      </div>

      <div className='absolute bottom-10 right-50'>
        <button className={Button}>
          more about
        </button>
      </div>
    </div>
  )
}

export default AboutSection
