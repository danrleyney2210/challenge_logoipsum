import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'

interface buttonProps {
  color: string
  text: string
  icon?: string
  onClick?: () => void
}

export const Button = ({ color, text, icon, onClick }: buttonProps) => {
  return (
    <S.Wrapper onClick={onClick} color={color}>
      {text}
      {icon && <ReactSVG src={icon} />}
    </S.Wrapper>
  )
}
