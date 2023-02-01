import './App.css'
import Header from './component/Header'
import CartPage from './Pages/CartPage'
import HomePage from './Pages/HomePage'
import { Route, Switch } from 'react-router-dom'
import Individual from './component/Individual'
import NFP404 from './component/NFP404'
import AdminPage from './Pages/AdminPage'

function App() {
  return (
    <div className='App'>
      <Header></Header>
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
    </div>
  )
}

export default App
