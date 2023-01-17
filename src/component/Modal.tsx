import React from 'react'
import { ModalPropInterface} from '../Interface'

function ModalTest(props: ModalPropInterface) {
 const {isClose,setModalPos,Product} = props;
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
                <h2>Id : {Product.id}</h2>
                <h2>Title : {Product.title}</h2>
                <h2>Description : {Product.description}</h2>
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
