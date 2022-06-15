import { FC } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
const App:FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/singin' element={<Auth mode='sing-in'/>}/>
          <Route path='/singup' element={<Auth mode='sing-up'/>}/>
          <Route path='/' element={
            <>
            <Header username='Facundo'/>
            <Outlet/>
            </>
          }>
          <Route index element={<Home/>}/>
          </Route>
          <Route path='*' element={<Navigate to={'/singin'}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
