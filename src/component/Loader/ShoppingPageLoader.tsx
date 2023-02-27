import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import {  fetchCards } from '../../store/CardReducer'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../store/rootReducer'
import { useAppDispatch } from '../../store/store'
export default function ShoppingPageLoader(Wrapper: React.FC<any>) {
  function Loading(props: any) {
    const { cardDetailsArray } = useSelector(
      (state: RootStateType) => state.card
    )

    const [loading, setLoading] = useState({ text: 'Loading', status: false })
    const dispatch = useAppDispatch()

    useEffect(() => {
      if (cardDetailsArray?.length === 0) {
        ;(async () => {
          setLoading({ text: 'Loading', status: true })
          await dispatch(fetchCards())
          setLoading({ text: 'Loading', status: false })
        })()
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
  return Loading
}
