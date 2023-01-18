import { Dispatch, SetStateAction, useState } from 'react'
import { ProductInterface } from '../Interface'
interface FormInterface {
  setFormOpen: Dispatch<SetStateAction<boolean>>
  setCardDeatailsArray: Dispatch<SetStateAction<ProductInterface[]>>
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

  return (
    <>
      <div
        className='blurBox'
        style={{ height: '100vh', width: '100vw' }}
        onClick={() => {
          props.setFormOpen((old) => !old)
        }}
      >
        <div
          className='OuterModal'
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          <div>
            <form
              onSubmit={(event) => event.preventDefault()}
              style={{ display: 'left', justifyContent: 'space-around' }}
            >
              <div className='formDiv'>
                <label htmlFor='input'> Product Name</label>
                <input
                  placeholder='add product name'
                  type='text'
                  value={newItem.title}
                  name='input'
                  className='inputForm'
                  onChange={(event) => {
                    console.log(event.target.value)

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
                    console.log(event.target.value)

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
                  placeholder='add product id'
                  name='input'
                  value={newItem.description}
                  onChange={(event) => {
                    console.log(event.target.value)

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
                    console.log(event.target.value)

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
                  className='inputForm'
                  onChange={(event) => {
                    console.log(event.target.value)

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
                  onClick={() => {
                    props.setCardDeatailsArray((prv) => [...prv, newItem])
                    props.setFormOpen((old) => !old)
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{' '}
    </>
  )
}
