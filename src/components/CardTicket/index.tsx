import React from 'react'
import { ReactSVG } from 'react-svg'
import * as S from './styles'
import { GrLocation } from 'react-icons/gr'

export const CardTicket = () => {
  return (
    <S.Wrapper>
      <div className="contentImage">
        <ReactSVG src="/img/teste.svg" />
      </div>

      <div className="info">
        <h3>Lorem ipsum dolor amet consectetur</h3>
        <span>
          <GrLocation />
          GetYourGuide Tours & Tickets GmbH{' '}
        </span>

        <div className="ponts_reviews">
          <div className="card_score">
            <span>6.3</span>
          </div>
          <span>Excellent</span>
          <span>(423 Reviews)</span>
        </div>
      </div>

      <div>
        <span>de R$ 2.351,28 por</span>
        <p>
          <span>R$</span>
          1.391,28
        </p>
        <button>entrar</button>
      </div>
    </S.Wrapper>
  )
}
