import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div>
      <div className='nav'>

      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutPage
