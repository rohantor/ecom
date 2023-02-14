import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'

import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../../store/rootReducer'
export default function HOCLoading(Wrapper: React.FC<any>) {
  function HOC(props: any) {
    const { cardDetailsArray } = useSelector(
      (state: RootStateType) => state.card
    )
    console.log('init', cardDetailsArray)
    const [loading, setLoading] = useState({ text: 'Loading', status: false })
    const dispatch = useDispatch()

    useEffect(() => {
      if (cardDetailsArray?.length === 0) {
        setLoading({ text: 'Loading', status: true })

        fetch(process.env.REACT_APP_BASE_URL + 'products/')
          .then((res) => res.json())
          .then((json) => {
            dispatch({ type: 'SetCards', payload: json })
            setLoading({ text: 'Loading', status: false })
          })
          .catch(() => {
            console.log("Server Refused to connect to")
            setLoading({ text: 'Server Error', status: false })
          })
      }
    }, [])

    return (
      <>
        {loading ? (
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
