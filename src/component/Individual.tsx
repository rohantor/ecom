import  { useContext } from 'react'
import { useParams } from 'react-router-dom'
import style from './Individual.module.css'
import { useHistory } from 'react-router-dom'
import { store } from '../Context/ContextStore'

function Individual() {
  let { index } = useParams()
  const history = useHistory()
  const ctx =useContext(store)
  if (!(0 <= parseInt(index) && parseInt(index) < ctx.cardDetailsArray.length)) {
    history.push('/NotFound')
  }
  const { id, title, description, price, wishListed, url } =
    ctx.cardDetailsArray[index]

  return (
    <>
      <div className={style.OuterFlex}>
        <button
          className={style.ArrowDiv}
          disabled={index === '0'}
          onClick={() => {
            console.log('Clicked')
            history.push(`/shop/${parseInt(index) - 1}`)
          }}
        >
          {' '}
          {`<`}{' '}
        </button>
        <div className={style.secondDiv}>
          <div>
            <img className={style.image} src={url} alt='product'></img>
          </div>
          <div style={{}}>
            <h3>Id : {id}</h3>
            <h3>Title : {title}</h3>

            <h2>Price : {price}</h2>
            <h2>wishListed : {wishListed ? 'Yes' : 'No'}</h2>
            <h4>Description : {description}</h4>
          </div>
        </div>
        <button
          className={style.ArrowDiv}
          disabled={parseInt(index) === ctx.cardDetailsArray.length - 1}
          onClick={() => {
            history.push(`/shop/${parseInt(index) + 1}`)
          }}
        >
          {' '}
          {`>`}{' '}
        </button>
      </div>
    </>
  )
}

export default Individual
