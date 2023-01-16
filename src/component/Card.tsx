import React, { SetStateAction } from 'react'

interface ProductInterface {
  title: string
  url: string
  description: string
  id: number
  setRemoved: (abc: SetStateAction<never[]>) => void
}
interface propsInterface {
  Product: ProductInterface
}
export default function Card(props: propsInterface) {
  const { title, url, description, id } = props.Product
  return (
    <>
      <div
        className='card_outer'
        // id={id.toString()}
      >
        <div>
          <h3 className='title' style={{ display: 'inline-block' }}>
            {id}

            {title}
          </h3>

          <img
            src='/trash.png'
            alt=''
            onClick={() => {
              // setDeletestatus(!deleteStatus);
              console.log('Delete')
            }}
            style={{ display: 'inline-block' }}
          />
        </div>
        {/* <Modal Product ={props.Product}/> */}
        {/* <img
          // src={url}alt="Logo"
          // onClick={() => {
          // setModalPos((old) => !old);
          // }}

          alt='Image of the '
          className='Card_img'
        /> */}
      </div>
    </>
  )
}
