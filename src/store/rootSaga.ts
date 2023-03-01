import { takeLatest, call, put } from 'redux-saga/effects'
import { CardActions } from './CardReducer'
import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios'
import { CartActions } from './CartReducer'

function* fetchProducts(): any {
  let id = toast.loading('Please wait...')
  if (toast.isActive(id)) {
    toast.dismiss()
  }

  try {
    const res = yield call(
      axios.get,
      process.env.REACT_APP_BASE_URL + 'products/'
    )
    yield put(CardActions.SetCards(res.data))
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.update(id, {
        render: 'Something went wrong',
        type: 'error',
        isLoading: false,
        progress: 15,
      })
    }
  }
  toast.dismiss()
  toast.dismiss()
}

function* fetchCart(): any {
  const res = yield call(axios.get, process.env.REACT_APP_BASE_URL + 'cart')
    yield put(CartActions.SetCart(res.data))
}

export default function* rootSaga() {
  yield takeLatest('card/fetchCards', fetchProducts)
  yield takeLatest('cart/fetchCart', fetchCart)
}
