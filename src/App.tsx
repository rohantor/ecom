import './App.css'
import Header from './component/Header'
import AdminPage from './Pages/AdminPage'
import CartPage from './Pages/CartPage'
import HomePage from './Pages/HomePage'
import { Route } from 'react-router-dom'
import ShoppingPage from './Pages/ShoppingPage'
import Form from './component/Form'
import text from './data'
import { useState } from 'react'
import Modal from './component/Modal'
import Individual from './component/Individual'
function App() {
  const [cardDetailsArray, setCardDetailsArray] = useState(text);

  return (
    <div className='App'>
      <Header></Header>
      <Route exact path='/'>
        <img style={{ width: '100%' }} src='./Hero.png' alt='' />
        <HomePage
          cardDetailsArray={cardDetailsArray}
          setCardDetailsArray={setCardDetailsArray}
        ></HomePage>
      </Route>
      <Route exact path='/shop'>
        <HomePage
          cardDetailsArray={cardDetailsArray}
          setCardDetailsArray={setCardDetailsArray}
        ></HomePage>
      </Route>
      <Route path='/shop/:id/:price' children={<Individual />} />
        
      <Route path='/admin'>
        <AdminPage></AdminPage>
        <Form setCardDetailsArray={setCardDetailsArray}></Form>
      </Route>
      <Route path='/cart'>
        <CartPage></CartPage>
      </Route>
    </div>
  )
}

export default App
