import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import { CardActions } from '../../store/CardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../../store/rootReducer'
export default function HOCLoading(Wrapper: React.FC<any>) {
  function HOC(props: any) {
    const { cardDetailsArray } = useSelector(
      (state: RootStateType) => state.card
    )
 
    const [loading, setLoading] = useState({ text: 'Loading', status: false })
    const dispatch = useDispatch()

    useEffect(() => {
      if(cardDetailsArray?.length === 0) {
        setLoading({ text: 'Loading', status: true })

        fetch(process.env.REACT_APP_BASE_URL + 'products/')
          .then((res) => res.json())
          .then((json) => {
            dispatch(CardActions.SetCards(json))
            setLoading({ text: 'Loading', status: false })
          })
          .catch(() => {
            
            setLoading({ text: 'Server Refused to connect', status: true })
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
