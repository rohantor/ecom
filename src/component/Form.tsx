import { useState, useRef, useMemo, useContext } from 'react'

import { FormValidator } from '../utils/helper'
import { useLocation } from 'react-router-dom'
import { store } from '../Context/ContextStore'
import axios from 'axios'
import Loader from 'react-js-loader'

export default function Form() {
  const ctx = useContext(store)
  const [isLoading,setLoading] = useState(false);
  const { setCardDetailsArray } = ctx
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

  async function PostRequest() {
    var data = JSON.stringify({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    })
    var config = {
      method: 'post',
      url: 'https://fakestoreapi.com/products',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    setLoading(true)
    axios(config)
      .then(function (response) {
       
        console.log(JSON.stringify(response.data))
 setLoading(false)

      })
      .catch(function (error) {
   

        console.log(error)
      })
   
  }

  return (
    <>
      <div
        style={{ position: 'absolute', top: '45%', left: '44%', zIndex: '3' }}
      >
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
        className='OuterModal'
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
          <form
            onSubmit={(event) => event.preventDefault()}
            style={{ display: 'left', justifyContent: 'space-around' }}
          >
            <div className='formDiv'>
              <label htmlFor='input'> Product Name</label>
              <input
                placeholder=' product name'
                type='text'
                value={newItem.title}
                name='input'
                className='inputForm'
                onChange={(event) => {
                  setNewItem((prv) => {
                    return { ...prv, title: event.target.value }
                  })
                }}
              />
            </div>
            <div className='formDiv'>
              <label htmlFor='input'> Product Id </label>
              <input
                placeholder='add product id'
                type='number'
                name='input'
                value={newItem.id}
                className='inputForm'
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
            <div className='formDiv'>
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
                className='inputForm'
              />
            </div>{' '}
            <div className='formDiv'>
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
                className='inputForm'
              />
            </div>
            <div className='formDiv'>
              <label htmlFor='input'> Product Url</label>
              <input
                type='text'
                name='input'
                value={newItem.image}
                placeholder='Product Url'
                className='inputForm'
                onChange={(event) => {
                  setNewItem((prv) => {
                    return { ...prv, image: event.target.value }
                  })
                }}
              />
            </div>
            <br />
            <div>
              <button
                className='SubmitBtn'
                style={isLoading ? { backgroundColor: '#ff000059' } : {}}
                type='button'
                disabled={isLoading}
                onClick={async () => {
                  if (await FormValidator(newItem)) {
                    console.log(InputRef?.current?.value)
                    await PostRequest()

                    setCardDetailsArray((prv) => [...prv, newItem])

                    ClearForm()
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
