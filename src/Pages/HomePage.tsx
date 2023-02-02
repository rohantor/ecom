import { useEffect } from 'react'
import Grid from '../component/Grid'
import { store } from '../Context/ContextStore'
import { useContext } from 'react'
import HOCLoading from '../component/HOCLoading'
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