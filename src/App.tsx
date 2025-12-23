import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LayoutPage, MainPage } from './pages'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center font-bold">Loading...</div>}>
      <Routes>
        <Route element={<LayoutPage />}>

          <Route path="/" element={<MainPage />} />
          <Route path='*' element={<div className='h-screen flex items-center justify-center'>Page Not Found</div>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App