import React from 'react'
import { ModalPropInterface } from '../Interface'

function ModalTest(props: ModalPropInterface) {
  const { isClose, setModalPos, Product } = props
  return (
    <>
      {isClose ? (
        <>
          <div
            className='blurBox'
            style={{ height: '100vh', width: '100vw' }}
            onClick={() => {
              setModalPos((old) => !old)
            }}
          >
            <div id='MyModal' className='OuterModal'>
              <div>
                <img className='ModalImg' src={Product.url}></img>
              </div>
              <div style={{}}>
                <h3 >Id : {Product.id}</h3>
                <h3 >Title : {Product.title}</h3>

                <h2 >Price : {Product.price}</h2>
                <h2>
                  Wishlisted : {Product.wishlisted ? 'Yes' : 'No'}
                </h2>
                <h4 >
                  Description : {Product.description}
                </h4>
              </div>
            </div>
          </div>{' '}
        </>
      ) : (
        <>
          {/* {document
            .querySelector('body')
            .classList.remove('RemoveScrollbar')} */}
        </>
      )}
    </>
  )
}

export default ModalTest
