import { useHistory } from "react-router-dom"

export default function NFP404() {
  const history = useHistory()
  return (
    <>
    <div style={{marginTop:'17vh', fontSize:'2em'}}>

      <h1>404</h1>
      <div>Page Not Found</div>
      <div>This is not the page you are looking for</div>

      <button onClick={()=>{
history.goBack()
      }}>Go back</button>
    </div>
    </>
  )
}
