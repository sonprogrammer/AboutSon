import React from 'react'

const VcModal = () => {
  return (
    <div className='border'>
      <h1 className='text-center font-medium'>(팀 프로젝트)</h1>

      <div className='간단 소개 flex justify-between mt-10 font-medium'>
        <h2>프로젝트 소개</h2>
        <p>다양한 사람들과 플레이리스트를 공유하는 서비스</p>
      </div>

      <div className='git'>
        <a href="https://github.com/sonprogrammer/mingle" target='_blanck'
          className=''
        >git 주소</a>
      </div>

      <div className='역할 및 기능'
        style={{
          display: 'grid',
          gridTemplateColumns: '150px 1fr',
          gap: '10px',
          alignItems: 'center',
          borderBottom: '1px solid lightgray',
          paddingBottom: '16px',
        }}>

      </div>

      <div className='트러블 슈팅'>

      </div>

      <div className='기술 스택'>

      </div>

    </div>
  )
}

export default VcModal
