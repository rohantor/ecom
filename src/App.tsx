import './App.css'
import Header from './component/Header'
import AdminPage from './Pages/AdminPage'
import CartPage from './Pages/CartPage'
import HomePage from './Pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShoppingPage from './Pages/ShoppingPage'
import Form from './component/Form'
import text from './data'
import { useState } from 'react'
import Modal from './component/Modal'
import Individual from './component/Individual'
import { useParams } from 'react-router-dom'
import NFP404 from './component/NFP404'

function App() {
  const [cardDetailsArray, setCardDetailsArray] = useState(text)

  return (
    <div className='App'>
      <Header></Header>
      <Switch>
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
        <Route
          exact
          path='/shop/:index/'
          children={<Individual cardDetailsArray={cardDetailsArray} />}
        />

        <Route path='/admin'>
          <AdminPage></AdminPage>
          <Form setCardDetailsArray={setCardDetailsArray}></Form>
        </Route>
        <Route path='/cart'>
          <CartPage></CartPage>
        </Route>
        <Route path='/*'>
          <NFP404></NFP404>
        </Route>
      </Switch>
    </div>
  )
}

export default App
