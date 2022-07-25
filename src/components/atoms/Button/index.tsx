import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'

type buttonProps = {
  background: string
  color: string
  text: string
  icon?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  background,
  color,
  text,
  icon,
  onClick,
  ...rest
}: buttonProps) => {
  return (
    <S.Wrapper
      onClick={onClick}
      background={background}
      color={color}
      {...rest}
    >
      {text}
      {icon && <ReactSVG src={icon} />}
    </S.Wrapper>
  )
}
