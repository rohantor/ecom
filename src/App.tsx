import './App.css'
import Header from './component/Header'
import CartPage from './Pages/CartPage'
import HomePage from './Pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import Individual from './component/Individual'
import NFP404 from './component/NFP404'
import AdminPage from './Pages/AdminPage'
import { useContext, useEffect } from 'react'
import { store } from './Context/ContextStore'

function App() {
    const ctx = useContext(store)
    const {  setCardDetailsArray } = ctx
    useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=6')
        .then((res) => res.json())
        .then((json) => setCardDetailsArray(json))
    }, [])
  return (
    <div className='App'>
      <Header>
        <Switch>
          <Route exact path='/'>
            <img style={{ width: '100%' }} src='./Hero.png' alt='' />
            <HomePage></HomePage>
          </Route>
          <Route exact path='/shop'>
            <HomePage></HomePage>
          </Route>
          <Route exact path='/shop/:index/' children={<Individual />} />

          <Route path='/admin'>
            <AdminPage></AdminPage>
          </Route>
          <Route path='/cart'>
            <CartPage></CartPage>
          </Route>
          <Route path='/*'>
            <NFP404></NFP404>
          </Route>
        </Switch>
      </Header>
    </div>
  )
}

export default App
