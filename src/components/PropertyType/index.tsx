import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'

export const PropertyType = () => {
  return (
    <S.Wrapper>
      <h3>Tipo de propriedade</h3>

      <div className="containerStar">
        <S.ContentStar>
          <div>
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
          </div>
          <span>(134)</span>
        </S.ContentStar>

        <S.ContentStar>
          <div>
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
          </div>
          <span>(134)</span>
        </S.ContentStar>

        <S.ContentStar>
          <div>
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
          </div>
          <span>(72)</span>
        </S.ContentStar>

        <S.ContentStar>
          <div>
            <ReactSVG src="/icons/star.svg" />
            <ReactSVG src="/icons/star.svg" />
          </div>
          <span>(75)</span>
        </S.ContentStar>

        <S.ContentStar>
          <div>
            <ReactSVG src="/icons/star.svg" />
          </div>
          <span>(07)</span>
        </S.ContentStar>
      </div>
    </S.Wrapper>
  )
}
