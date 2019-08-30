import React from 'react'
import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: dodgerblue;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1{
    color: white;
    font-family: sans-serif;
  }
`

export default function (props) {
  return <Header>{props.children}</Header>
}