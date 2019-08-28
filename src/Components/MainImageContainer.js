import React from 'react'
import { useAppContext } from '../App'

export default function MainImageContainer() {
  const { picture } = useAppContext()
  return (
    <div>
      {
    (picture)&&(<img src={`${picture.url}`} alt={`${picture.title}`}/>)
    }
    </div>
  )
}