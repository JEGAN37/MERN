import React from 'react'
import {Link} from 'react-router-dom'
const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <Link to='/State'>userstate</Link>
      <Link to='/Effect'>useEffect</Link>
      <Link to='/Ref'>ref</Link>
      <Link to='/Reducer'>reducer</Link>
    </div>
  )
}

export default Hooks
