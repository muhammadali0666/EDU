import React from 'react'
import { StyledButton } from './index.style'

export default function Button({
  onClick = Function.prototype,
  text,
  Icon
}) {
  return (
    <StyledButton onClick={onClick}>
      {Icon ? <Icon /> : null}
      <span>{text}</span>
    </StyledButton>
  )
}
