import { useState, useRef, useMemo } from 'react'
import style from './Form.module.scss'
import { FormValidator } from '../../utils/helper'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Loader from 'react-js-loader'
import { ProductInterface } from '../../Interface'
import { useDispatch } from 'react-redux'

const Form: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [invalidFormErrors, setFormErrors] = useState({
    title: '',
    image: '',
    id: '',
    description: '',
    url: '',
  })

  const [newItem, setNewItem] = useState({
    title: '',
    image: '',
    description: '',
    id: 0,
    price: 0,
    wishListed: false,
  })
  const InputRef = useRef<HTMLInputElement>(null)
  const ClearForm = () => {
    setNewItem({
      title: '',
      image: '',
      description: '',
      id: 0,
      price: 0,
      wishListed: false,
    })
  }
  function useQuery() {
    const { search } = useLocation()

    return useMemo(() => new URLSearchParams(search), [search])
  }
  let query = useQuery()

  async function PostRequest(product: ProductInterface) {
    setLoading(true)
    axios
      .post(process.env.REACT_APP_BASE_URL + 'products', product)
      .then((res) => {
        setLoading(false)
        ClearForm()
      })
      .catch(() => {
        setLoading(false)

        setFormErrors((prv) => {
          prv.id = 'Id should be unique'
          return prv
        })
      })
  }

  return (
    <>
      <div id={style['FormOuterDiv']}>
        {isLoading ? (
          <Loader
            type='bubble-scale'
            bgColor={'#125'}
            title={'Loading'}
            color={'#125'}
            size={100}
          />
        ) : (
          <></>
        )}
      </div>
      <div
        className={style.OuterModal}
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <div>
          <input
            type='text'
            disabled
            value={query.get('q') || 'React test'}
            ref={InputRef}
          />

          <form onSubmit={(event) => event.preventDefault()}>
            <div className={style.formDiv}>
              <label htmlFor='input'> Product Title</label>
              <input
                placeholder=' product name'
                type='text'
                value={newItem.title}
                name='input'
                className={style.inputForm}
                onChange={(event) => {
                  setNewItem((prv) => {
                    return { ...prv, title: event.target.value }
                  })
                }}
              />
            </div>
            <label htmlFor='' className={style.labelError}>
              {' '}
              {invalidFormErrors.title}
            </label>
            <div className={style.formDiv}>
              <label htmlFor='input'> Product Id </label>
              <input
                placeholder='add product id'
                type='number'
                name='input'
                value={newItem.id}
                className={style.inputForm}
                onChange={(event) => {
                  setNewItem((prv) => {
                    return {
                      ...prv,
                      id: parseInt(
                        event.target.value === '' ? '0' : event.target.value
                      ),
                    }
                  })
                }}
              />
            </div>{' '}
            <label htmlFor='' className={style.labelError}>
              {invalidFormErrors.id}
            </label>
            <div className={style.formDiv}>
              <label htmlFor='input'> Product Description</label>
              <input
                type='text'
                placeholder=' product description'
                name='input'
                value={newItem.description}
                onChange={(event) => {
                  setNewItem((prv) => {
                    return { ...prv, description: event.target.value }
                  })
                }}
                className={style.inputForm}
              />
            </div>{' '}
            <label htmlFor='' className={style.labelError}>
              {invalidFormErrors.description}
            </label>
            <div className={style.formDiv}>
              <label htmlFor='input'> Product Price</label>
              <input
                type='number'
                name='input'
                value={newItem.price}
                onChange={(event) => {
                  setNewItem((prv) => {
                    return {
                      ...prv,
                      price: parseInt(
                        event.target.value === '' ||
                          event.target.value === 'NaN'
                          ? '0'
                          : event.target.value
                      ),
                    }
                  })
                }}
                className={style.inputForm}
              />
            </div>
            <div className={style.formDiv}>
              <label htmlFor='input'> Product Url</label>
              <input
                type='text'
                name='input'
                value={newItem.image}
                placeholder='Product Url'
                className={style.inputForm}
                onChange={(event) => {
                  setNewItem((prv) => {
                    return { ...prv, image: event.target.value }
                  })
                }}
              />
            </div>
            <label className={style.labelError}>{invalidFormErrors.url}</label>
            <div>
              <button
                style={isLoading ? { backgroundColor: '#ff000059' } : {}}
                type='button'
                disabled={isLoading}
                onClick={async () => {
                  const output = await FormValidator(newItem)

                  if (typeof output === 'boolean') {
                    await PostRequest(newItem)
                    setFormErrors({
                      title: '',
                      image: '',
                      description: '',
                      id: '',
                      url: '',
                    })

                    dispatch({ type: 'AddCard', payload: newItem })
                  } else {
                    setFormErrors(output)
                  }
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>{' '}
    </>
  )
}

export default Form
