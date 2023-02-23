
import React, {  ReactNode } from 'react'

import style from './Grid.module.css'
 import cartPageStyle from './CartEmpty.module.css'

function GridTemplate({ children }:{children:ReactNode[]}) {
 
  return (
    <>
      <div
        className={style['grid-container']}
        id='GridBox'
        style={{ float: 'left' }}
      >
        {children?.length ? (
          children
        ) : (
          <div id={cartPageStyle['CartPageOuterDiv']}>
            <hr />
            <h1 id={cartPageStyle['CartPageIsEmpty']}>List is Empty</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default GridTemplate
