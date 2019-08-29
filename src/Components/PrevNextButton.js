import React from 'react'

export default function PrevNextButton(props) {
  return <button onClick={props.onClick} disabled={props.disabled}>{props.nav}</button>
}