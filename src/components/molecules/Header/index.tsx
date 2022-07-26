import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Link href="/">
          <ReactSVG src="/logos/logo.svg" style={{ cursor: 'pointer' }} />
        </Link>
        <div className="login">
          <div>
            <span>Cotação dólar hoje: R$5,53</span>
            <ReactSVG src="/img/brazil.svg" />
            <ReactSVG src="/img/Path.svg" />
          </div>
          <div className="sign-in">
            <ReactSVG src="/img/user.svg" />
            <Link href={'#'}>Entrar</Link>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
