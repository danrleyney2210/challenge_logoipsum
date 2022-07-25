import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'

export const KnowBrazil = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Conheça o Brasil</h1>
        <span>Estes destinos incríveis têm muito a oferecer</span>
        <div className="contentCard">
          <div className="item">
            <div className="contentImage">
              <ReactSVG src="/img/balneario.svg" />
            </div>
            <div className="footercardPhoto">
              <p>Balneário Camboriú</p>
            </div>
          </div>

          <div className="item">
            <div className="contentImage">
              <ReactSVG src="/img/sp.svg" />
            </div>
            <div className="footercardPhoto">
              <p>São Paulos</p>
            </div>
          </div>

          <div className="item">
            <div className="contentImage">
              <ReactSVG src="/img/salvador.svg" />
            </div>
            <div className="footercardPhoto">
              <p>Salvador</p>
            </div>
          </div>

          <div className="item">
            <div className="contentImage">
              <ReactSVG src="/img/rj.svg" />
            </div>
            <div className="footercardPhoto">
              <p>Rio de Janeiro</p>
            </div>
          </div>

          <div className="item">
            <div className="contentImage">
              <ReactSVG src="/img/floripa.svg" />
            </div>
            <div className="footercardPhoto">
              <p>Florianópolis</p>
            </div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}
