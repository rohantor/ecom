import React, { useContext, useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import { store } from '../Context/ContextStore'

export default function HOCLoading(Wrapper: React.FC<any>) {
  function HOC(props: any) {
    const ctx = useContext(store)
    const { setCardDetailsArray, cardDetailsArray } = ctx
    const [loading, setLoading] = useState({ text:"Loading",status:false})
    useEffect(() => {

      if (cardDetailsArray.length===0){
        setLoading({ text: 'Loading', status: true })

        fetch(process.env.REACT_APP_BASE_URL+'products?limit=6')
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item: any) => (item.wishListed = false))
          setCardDetailsArray(json)

          setLoading({ text: 'Loading', status: false })
        }).catch(()=>{
          setLoading({ text: 'Server Error', status: false })
        })
      }
    }, [])

    return (
      <>
        {loading.status ? (
          <Loader
            type='bubble-scale'
            bgColor={'#125'}
            title={loading.text}
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
