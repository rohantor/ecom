import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Individual, NotFound } from './component'
import { HomePage, AdminPage,  ShoppingPage, CartPage } from './Pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className='App'>
      <Header>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/shop' element={<ShoppingPage />}></Route>
          <Route exact path='/shop/:index/' element={<Individual />} />

          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </Header>
      <ToastContainer
        position='bottom-center'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default App
