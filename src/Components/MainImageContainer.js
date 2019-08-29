import React from 'react'
import { useAppContext } from '../App'

export default function MainImageContainer() {
  const { pictureList, date } = useAppContext()
  return (
    <div>
      {(pictureList) && pictureList.map((picture, index) => {
        return (picture.date === date) && (
          <div key={index}>
            <h1>{picture.title}</h1>
            <img src={picture.hdurl} alt={`${picture.title}`} />
          </div>
        )
      })}
    </div>
  )
}