import { Outlet } from 'react-router-dom'
import { ContactBtn, NavbarComponent } from '../../components'

const LayoutPage = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      
      <nav className='fixed top-0 w-full z-[100] backdrop-blur-md bg-white/80 border-b border-slate-50'>
        <NavbarComponent />
      </nav>

      <div className='hidden sm:block fixed z-50 top-30 right-10 animate-bounce-slow'>
        <ContactBtn />
      </div>

      <main className='mt-[80px] md:mt-[100px] flex-1 w-full'>
        <Outlet />
      </main>

    </div>
  )
}

export default LayoutPage