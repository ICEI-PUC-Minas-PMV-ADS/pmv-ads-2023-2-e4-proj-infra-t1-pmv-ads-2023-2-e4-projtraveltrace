import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1>HOME</h1>
      <h1><Link to="/login">Login!</Link></h1>
    </>
  )
}

export default Home