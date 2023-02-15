import { useSelector } from 'react-redux'
import { HOCLoading } from '../component'
import GridTemplate from '../component/Grid/GridTemp'
import { RootStateType } from '../store/rootReducer'
import CardTemp from '../component/Card/CardTemp'
import { ProductInterface } from '../Interface'
export function HomePage() {
  const { cardDetailsArray } = useSelector((state: RootStateType) => state.card)
  console.log(cardDetailsArray)

  return (
    <>
      <img style={{ width: '100%' }} src='./Hero.png' alt='' />
      {/* <Grid></Grid> */}
      <GridTemplate>
        
        {cardDetailsArray?.map((item: ProductInterface, index: number) => {
          return (
            <CardTemp
              deleteHandler={{ action: 'RemoveCard', value: item.id,resource:'products' }}
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
export default HOCLoading(HomePage)
