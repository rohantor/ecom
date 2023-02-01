import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './Individual.module.css'
import { useHistory } from 'react-router-dom'
import { store } from '../Context/ContextStore'
import { useState } from 'react'
import Loader from 'react-js-loader'
function Individual() {
  let { index } = useParams()
  const history = useHistory()
  const ctx = useContext(store)

   const { cardDetailsArray } = ctx
  const [isLoading, setLoading] = useState(true)
  const [productObject, setProductObject] = useState<any>({
    id: 0,
    title: '',
    price: 0,
    wishListed: true,
    image: '',
    description: '',
  })
  async function getProductDetails(index: any) {
    try {
      if (cardDetailsArray.length === 0 || cardDetailsArray.length <index) {
        const res = await fetch(`http://fakestoreapi.com/products/${index}`)
        const data = await res.json()
        return data
      }
      return cardDetailsArray[index-1]
    } catch (error) {
      history.push("/NotFound")
    }
  }

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const dataGet = await getProductDetails(index)
      console.log(dataGet)
      let newObj = {
        id: dataGet.id,
        title: dataGet.title,
        price: dataGet.price,
        wishListed: false,
        image: dataGet.image,
        description: dataGet.description,
      }
      setProductObject(newObj)
      setLoading(false)
    })()
  }, [index])

  return (
    <>
      <div className={style.OuterFlex}>
        {isLoading ? (
          <Loader
            type='bubble-scale'
            bgColor={'#125'}
            title={'Loading'}
            color={'#125'}
            size={100}
          />
        ) : (
          <>
            <button
              className={style.ArrowDiv}
              disabled={index === '1'}
              onClick={() => {
                console.log('Clicked')
                history.push(`/shop/${parseInt(index) - 1}`)
              }}
            >
              {' '}
              {`<`}{' '}
            </button>
            <div className={style.secondDiv}>
              <div>
                <img
                  className={style.image}
                  src={productObject.image}
                  alt='product'
                ></img>
              </div>
              <div style={{}}>
                <h3>Id : {productObject.id}</h3>
                <h3>Title : {productObject.title}</h3>

                <h2>Price : {productObject.price}</h2>
                <h2>wishListed : {productObject.wishListed ? 'Yes' : 'No'}</h2>
                <h4>Description : {productObject.description}</h4>
              </div>
            </div>
            <button
              className={style.ArrowDiv}
              disabled={index === '20'}
              onClick={() => {
                history.push(`/shop/${parseInt(index) + 1}`)
              }}
            >
              {' '}
              {`>`}{' '}
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default Individual
