import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import {State} from '../../Interface'
import { useDispatch, useSelector } from 'react-redux'
export default function HOCLoading(Wrapper: React.FC<any>) {
  function HOC(props: any) {
   
   const CardDetailsArray = useSelector((state:State)=>state.cardDetailsArray)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
      if (CardDetailsArray.length === 0) {
        setLoading(true)

        fetch(process.env.REACT_APP_BASE_URL + 'products/')
          .then((res) => res.json())
          .then((json) => {
            dispatch({ type: 'SetCards', payload: json })
            setLoading(false)
          })
      }
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
