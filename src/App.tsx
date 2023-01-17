import React, { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Grid from './component/Grid'
import { relative } from 'path'
import { ProductInterface } from './Interface'
function App() {
  const [cartIsOpen, setCartIsOpen] = React.useState(false)
  React.useEffect(() => {
    // AddCssForCart()
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

  const RemoveFromLocalStorage = (id: number): void => {
    
        setCartItems((prv)=>{
          let flag =true;
          let index:number =-1
          for(let i in prv){


            if(prv[i].id===id && flag)
            {
                index = parseInt(i);
            }
            

          }
          let newprv = prv.filter((_,i) => i !== index); 
          localStorage.setItem('Cart', JSON.stringify(newprv))
          return newprv}
          )

    console.log('Remove')
  }
  const AddCssForCart = () => {
    const list = document.getElementById('GridBox')?.classList

    if (list?.contains('GridOnCart')) {
      list?.remove('GridOnCart')
      list?.add('grid-container')
    } else {
      list?.add('GridOnCart')
      list?.remove('grid-container')
    }

    console.log('Cart' + list)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ display: 'inline-block', marginLeft: '32rem' }}>
          E-Commerce Project{' '}
        </h1>
        {cartIsOpen ? (
          <h4
            style={{ marginLeft: '23rem', color: 'red' }}
            className='grab'
            onClick={() => {
              setCartIsOpen((curr) => {
                return !curr
              })
            }}
          >
            Cart
          </h4>
        ) : (
          <h4
            className='grab'
            style={{ marginLeft: '23rem' }}
            onClick={() => {
              setCartIsOpen((curr) => {
                return !curr
              })
            }}
          >
            Cart
          </h4>
        )}
      </header>
      {!cartIsOpen ? (
        <Grid AddToLocalStorage={AddToLocalStorage}></Grid>
      ) : (
        <>
          <div>
            <div className='grid-container'>
              {cartItems.length === 0 ? (
                <h1>Cart is Empty</h1>
              ) : (
                <>
                  {cartItems?.map((item) => {
                    return (
                      <div
                        className='card_outer'
                        style={{ backgroundColor: '#84e1f3' }}
                      >
                        <div>
                          <h3
                            className='title'
                            style={{ display: 'inline-block' }}
                          >
                            {item.id}

                            {item.title}
                          </h3>

                          <img
                            src='/trash.png'
                            alt=''
                            style={{ display: 'inline-block' }}
                            onClick={() => {
                              RemoveFromLocalStorage(item.id)
                            }}
                          />
                        </div>
                        {/* <Modal product ={props.product}/> */}
                        <img src={item.url} alt='Logo' className='Card_img' />

                        <p>{item.description}</p>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
