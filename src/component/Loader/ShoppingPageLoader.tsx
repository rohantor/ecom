import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import { CardActions } from '../../store/CardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../../store/rootReducer'
import axios, { AxiosError } from 'axios'
export default function ShoppingPageLoader(Wrapper: React.FC<any>) {
  function Loading(props: any) {
    const { cardDetailsArray } = useSelector(
      (state: RootStateType) => state.card
    )

    const [loading, setLoading] = useState({ text: 'Loading', status: false })
    const dispatch = useDispatch()

    useEffect(() => {
      if (cardDetailsArray?.length === 0) {
        setLoading({ text: 'Loading', status: true })
        ;(async () => {
          try {
            const { data } = await axios.get(
              process.env.REACT_APP_BASE_URL + 'products/'
            )
            dispatch(CardActions.SetCards(data))
            setLoading({ text: 'Loading', status: false })
          } catch (error) {
            if (error instanceof AxiosError) {
              setLoading({
                text: `Error :${error.message} Server Refused to connect`,
                status: true,
              })
            }
          }
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
