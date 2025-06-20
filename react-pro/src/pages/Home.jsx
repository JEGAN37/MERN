import React from 'react'
import skills from './skills'

const home = () => {
  const skillLevel = 'Advanced';
  return (
    <div>
      <h1>Home Page</h1>
      <skills skillLevel={skillLevel} />  
    </div>
  )
}

export default home
