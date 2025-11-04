import { Outlet } from 'react-router-dom'
import { ContactBtn, NavbarComponent } from '../../components'

const LayoutPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='nav fixed top-0 w-full z-10'>
          <NavbarComponent />
      </div>

      <div className='hidden sm:block sm:fixed z-20 mt-[120px] right-4 '>
        <ContactBtn />
      </div>

      <div className='mt-[104px] flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage
