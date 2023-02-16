import { HOCLoading } from '../component'

import ShoppingPage from './ShoppingPage'
export function HomePage() {
  return (
    <>
      <img style={{ width: '100%' }} src='./Hero.png' alt='' />

      <ShoppingPage />
    </>
  )
}
export default HOCLoading(HomePage)
