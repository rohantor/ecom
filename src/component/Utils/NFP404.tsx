import { useNavigate } from 'react-router-dom'

export default function NFP404() {
  const navigator = useNavigate()
  return (
    <>
      <div style={{ marginTop: '17vh', fontSize: '2em' }}>
        <h1>404</h1>
        <div>Page Not Found</div>
        <div>This is not the page you are looking for</div>

        <button
          onClick={() => {
            navigator(-2)
          }}
        >
          Go back
        </button>
      </div>
    </>
  )
}
