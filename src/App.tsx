import React from 'react'
import './App.css'
import Card from './component/Card'
import Grid from './component/Grid'
function App() {
const [cartIsOpen ,setCartIsOpen] =React.useState(false);

React.useEffect(() => {
  AddCssForCart()
}, [cartIsOpen])
const AddCssForCart =()=>{

    const list = document.getElementById('GridBox')?.classList

    if (list?.contains('GridOnCart')){

      list?.remove('GridOnCart')
      list?.add('grid-container')
    } 
    else{
      list?.add('GridOnCart')
      list?.remove('grid-container')


    }
      
    console.log("Cart" + list)

}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ display: 'inline-block', marginLeft: '32rem' }}>
          E-Commerce Project{' '}
        </h1>

        <h4
          style={{ marginLeft: '23rem' }}
          onClick={() => {
            setCartIsOpen((curr) => {
              
              return !curr
            })
          }}
        >
          Cart
        </h4>
      </header>
      <Grid></Grid>
      {cartIsOpen?
      (

        <div>Cart</div>
      )
      :(<></>)}
    </div>
  )
}

export default App
