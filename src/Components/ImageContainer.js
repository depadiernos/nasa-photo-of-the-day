import React from 'react'
import { useAppContext } from '../App'
import styled from '@emotion/styled'

const Image = styled.img`
  width: 100vh;
  height: 50vh;
  object-fit: cover;

`
const Iframe = styled.iframe`
  height: 50vh;
  width: 100vh;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  h1{
    text-align: center;
    font-family: sans-serif;
  }
`

export default function () {
  const { pictureList, date } = useAppContext()
  return (
    <ImageContainer>
      {(pictureList) && pictureList.map((picture, index) => {
        return (picture.date === date) && (
          <div key={index}>
            <h1>{`${picture.title} - ${picture.date}`}</h1>
            {(picture.media_type === 'image') && <Image src={picture.hdurl} alt={`${picture.title}`} />}
            {(picture.media_type === 'video') && <Iframe src={picture.url} title={`${picture.title}`} />}
          </div>
        )
      })}
    </ImageContainer>
  )
}