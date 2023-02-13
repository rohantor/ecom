import { useEffect } from 'react'
import {Grid} from '../component'
import { store } from '../Context/ContextStore'
import { useContext } from 'react'
import {HOCLoading} from '../component'
export  function HomePage() {
  const ctx = useContext(store)
  useEffect(() => {
    ctx.setCartItems(JSON.parse(localStorage.getItem('Cart') || '[]'))
  }, [])

  return (
    <>
      <Grid></Grid>
    </>
  )
}
export default HOCLoading(HomePage)