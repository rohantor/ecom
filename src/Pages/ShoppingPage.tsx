
import { useSelector } from 'react-redux'
import { ProductInterface } from '../Interface'
import { Grid } from '../component'
import CardTemp from '../component/Card/CardTemp'
import GridTemplate from '../component/Grid/GridTemp'
import { RootStateType } from '../store/rootReducer'

export default function ShoppingPage() {
  const { cardDetailsArray } = useSelector((state: RootStateType) => state.card)
  return (
    <>
      <GridTemplate>
        {cardDetailsArray?.map((item: ProductInterface, index: number) => {
          return (
            <CardTemp
              deleteHandler={{
                action: 'RemoveCard',
                value: item.id,
                resource: 'products',
              }}
              title={item.title}
              image={item.image}
              description={item.description}
              id={item.id}
              price={item.price}
              wishListed={item.wishListed}
              addToWishListed={{ action: 'Wishlist', value: index }}
            />
          )
        })}
      </GridTemplate>
    </>
  )
}
