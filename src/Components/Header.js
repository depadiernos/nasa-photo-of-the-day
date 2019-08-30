import React from 'react'
import styled from '@emotion/styled'

const Header = styled.div`
  width: 100%;
  background-color: dodgerblue;
  padding: 1rem;
`

export default function(props) {
  return <Header>{props.children}</Header>
}