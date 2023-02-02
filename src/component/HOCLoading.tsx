import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import { store } from '../Context/ContextStore'

export default function HOCLoading(Wrapper: React.FC<any>) {
  function HOC(props: any) {
    const ctx = useContext(store)
    const { setCardDetailsArray, cardDetailsArray } = ctx
    const [loading, setLoading] = useState(true)
    useEffect(() => {

      if (cardDetailsArray.length===0){

        fetch('https://fakestoreapi.com/products?limit=6')
        .then((res) => res.json())
        .then((json) => {
          setCardDetailsArray(json)
        })
      }
      setLoading(false)
    }, [])

    return (
      <>
        {loading ? (
          <Loader
            type='bubble-scale'
            bgColor={'#125'}
            title={'Loading'}
            color={'#125'}
            size={100}
          />
        ) : (
          <Wrapper {...props}></Wrapper>
        )}
      </>
    )
  }
  return HOC
}
