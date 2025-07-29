import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LayoutPage, MainPage } from './pages'
import { Suspense } from 'react'

function App() {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='*' element={<div className=''>page not found</div>}/>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
