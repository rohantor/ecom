import { useDispatch, useSelector } from 'react-redux'
import { ProductInterface } from '../Interface'
import CardTemp from '../component/Card/ProductCard'
import GridTemplate from '../component/Grid/Grid'
import { RootStateType } from '../store/rootReducer'
import { CardActions } from '../store/CardReducer'
import { ShoppingPageLoader } from '../component'
import { nanoid } from 'nanoid'

 function ShoppingPage() {
  const { cardDetailsArray } = useSelector((state: RootStateType) => state.card)
  const dispatch = useDispatch()

  const deleteHandler = (id: number) => {
    dispatch(CardActions.RemoveCard(id))
  }
  const addToWishlistHandler = (index: number) => {
    dispatch(CardActions.Wishlist(index))
  }
  
  return (
    <>
      <GridTemplate>
        {cardDetailsArray?.map((item: ProductInterface, index: number) => {
          return (
            <CardTemp
              key={nanoid()}
              deleteHandler={{
                fn: deleteHandler,
                identifier: item.id,
                resource: 'products',
              }}
              title={item.title}
              image={item.image}
              description={item.description}
              id={item.id}
              price={item.price}
              wishListed={item.wishListed}
              addToWishListed={{ fn: addToWishlistHandler, identifier: index }}
            />
          )
        })}
      </GridTemplate>
    </>
  )
}

export default ShoppingPageLoader(ShoppingPage)
