import { Outlet } from 'react-router-dom'
import { NavbarComponent } from '../../components'

const LayoutPage = () => {
  return (
    <div className='h-screen '>
      <div className='nav'>
          <NavbarComponent />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage
