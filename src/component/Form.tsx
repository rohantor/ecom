import { Dispatch, SetStateAction, useState, useRef } from 'react'
import { ProductInterface } from '../Interface'
import { FormValidator } from '../utils/helper'
interface FormInterface {
  setCardDetailsArray: Dispatch<SetStateAction<ProductInterface[]>>
}
export default function Form(props: FormInterface) {
  const [newItem, setNewItem] = useState({
    title: '',
    url: '',
    description: '',
    id: 0,
    price: 0,
    wishlisted: false,
  })
  const InputRef = useRef<HTMLInputElement>(null)
  const ClearForm = ()=>{

    setNewItem({
      title: '',
      url: '',
      description: '',
      id: 0,
      price: 0,
      wishlisted: false,
    })
  }
  return (
    <>
    
        <div
          className='OuterModal'
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          <div>
            <input type='text' disabled value={'React test'} ref={InputRef} />
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
                  value={newItem.url}
                  placeholder='Product Url'
                  className='inputForm'
                  onChange={(event) => {
                    setNewItem((prv) => {
                      return { ...prv, url: event.target.value }
                    })
                  }}
                />
              </div>
              <br />
              <div>
                <button
                  className='SubmitBtn'
                  type='button'
                  onClick={async () => {
                    if (await FormValidator(newItem)) {
                      console.log(InputRef?.current?.value)
                      props.setCardDetailsArray((prv) => [...prv, newItem])

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
