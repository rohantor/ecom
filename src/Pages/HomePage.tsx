import { useEffect } from 'react'
import Grid from '../component/Grid'
import { store } from '../Context/ContextStore'
import { useContext } from 'react'
export default function HomePage() {
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
