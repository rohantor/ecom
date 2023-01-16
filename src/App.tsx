import React,{useState} from 'react'
import './App.css'
import Card from './component/Card'
import Grid from './component/Grid'
function App() {
const [cartIsOpen ,setCartIsOpen] =React.useState(false);
interface ProductInterface {
  title: string
  url: string
  description: string
  id: number
}
React.useEffect(() => {
  AddCssForCart()
}, [cartIsOpen])
 const [cartItems, setCartItems] = useState<Array<ProductInterface>>(
   JSON.parse(localStorage.getItem('Cart') || '[]')
 )
const AddToLocalStorage = (item: ProductInterface) => {
  console.log('Added to local Storage')
  let obj = item
  setCartItems((curr) => {
    localStorage.setItem('Cart', JSON.stringify([...curr, obj]))
    return [...curr, obj]
  })
  //  let prev = JSON.parse(localStorage.getItem('Cart') || '[]')
}
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
      <Grid AddToLocalStorage={AddToLocalStorage}></Grid>
      {cartIsOpen ? (
        <div>
          {cartItems?.map((item) => {
            return (
              <div  id={item.id.toString()}>
                <div>
                  <h3 >
                    {item.id}

                    {item.title}
                  </h3>

                  <img
                    src='/trash.png'
                    alt=''
                
                  />
                </div>
                {/* <Modal product ={props.product}/> */}
                <img
                  src={item.url}
                  alt='Logo'
                  
                 
                />
               
                <p>{item.description}</p>
              </div>
            )
          })}{' '}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default App
