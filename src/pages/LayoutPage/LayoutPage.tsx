import { Outlet } from 'react-router-dom'
import { NavbarComponent } from '../../components'

const LayoutPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='nav fixed top-0 w-full'>
          <NavbarComponent />
      </div>

      <div className='mt-[104px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage
