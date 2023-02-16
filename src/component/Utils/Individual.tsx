import {  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './Individual.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loader from 'react-js-loader'
import { ProductInterface } from '../../Interface'
function Individual() {
  let { index } = useParams()
  const navigate = useNavigate()
  

   
  const [isLoading, setLoading] = useState(true)
  const [productObject, setProductObject] = useState<ProductInterface>({
    id: 0,
    title: '',
    price: 0,
    wishListed: true,
    image: '',
    description: '',
  })
  async function getProductDetails(index: string) {
    try {
      // if (cardDetailsArray.length === 0 || cardDetailsArray.length <index) {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}products/${index}`
        )
        const data = await res.json()
    
        return data[0]
      // }
      // return cardDetailsArray[index-1]
    } catch (error) {
      navigate('/NotFound')
    }
  }

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const dataGet = await getProductDetails(index)
  
      let newObj = {
        id: dataGet.id,
        title: dataGet.title,
        price: dataGet.price,
        wishListed: dataGet.wishListed,
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
            {/* <button
              className={style.ArrowDiv}
              disabled={index === '1'}
              onClick={() => {
                navigate(`/shop/${parseInt(index) - 1}`)
              }}
            >
              {' '}
              {`<`}{' '}
            </button> */}
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
            {/* <button
              className={style.ArrowDiv}
              disabled={index === '20'}
              onClick={() => {
                navigate(`/shop/${parseInt(index) + 1}`)
              }}
            >
              {' '}
              {`>`}{' '}
            </button> */}
          </>
        )}
      </div>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        Go back
      </button>
    </>
  )
}

export default Individual
