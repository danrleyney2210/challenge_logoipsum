import React from 'react'
import * as S from './styles'
import { Packeges } from './Packeges'
import { KnowBrazil } from './KnowBrasil'
import LogoipsumFooter from './LogoipsimFooter'

function Footer() {
  return (
    <S.Wrapper>
      <Packeges />
      <KnowBrazil />
      <LogoipsumFooter />
    </S.Wrapper>
  )
}

export default Footer
