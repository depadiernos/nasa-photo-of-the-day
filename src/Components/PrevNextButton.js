import React from 'react'
import styled from '@emotion/styled'

const PrevNextButton = styled.button`
  margin: 1rem;
  padding: 0.2rem;
`

export default function(props) {
  return <PrevNextButton onClick={props.onClick} disabled={props.disabled}>{props.nav}</PrevNextButton>
}