import { Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
// import Header from './component/Header/Header'
// import CartPage from './Pages/CartPage'
// import HomePage from './Pages/HomePage'

// import Individual from './component/Individual'
// import NFP404 from './component/Utils/NFP404'
// import AdminPage from './Pages/AdminPage'
import { Header,Individual,NFP404} from './component'
import { HomePage,AdminPage,CartPage } from './Pages'
function App() {
  return (
    <div className='App'>
      <Header>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <img style={{ width: '100%' }} src='./Hero.png' alt='' />
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route exact path='/shop' element={<HomePage></HomePage>}></Route>
          <Route exact path='/shop/:index/' element={<Individual />} />

          <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
          <Route path='/cart' element={<CartPage></CartPage>}></Route>
          <Route path='/*' element={<NFP404></NFP404>}></Route>
        </Routes>
      </Header>
    </div>
  )
}

export default App
