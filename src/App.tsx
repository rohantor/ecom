import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header,Individual,NFP404} from './component'
import { HomePage, AdminPage, CartPage, ShoppingPage } from './Pages'
function App() {
  return (
    <div className='App'>
      <Header>
        <Routes>
          <Route
            exact
            path='/'
            element={
             <HomePage/>
            }
          ></Route>
          <Route exact path='/shop' element={<ShoppingPage/>}></Route>
          <Route exact path='/shop/:index/' element={<Individual />} />

          <Route path='/admin' element={<AdminPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/*' element={<NFP404/>}></Route>
        </Routes>
      </Header>
    </div>
  )
}

export default App
