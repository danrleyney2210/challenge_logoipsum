import React from 'react'
import * as S from './styles'

export const ReviewScore = () => {
  return (
    <S.Wrapper>
      <h3>Review Score</h3>

      <div className="contentScore">
        <div className="item">
          <S.Progress level={'90%'}>
            <div className="progress"></div>
            <span>9+</span>
          </S.Progress>
          <span>Excelente (543)</span>
        </div>

        <div className="item">
          <S.Progress level={'80%'}>
            <div className="progress"></div>
            <span>8+</span>
          </S.Progress>
          <span>Muito bom (543)</span>
        </div>

        <div className="item">
          <S.Progress level={'70%'}>
            <div className="progress"></div>
            <span>7+</span>
          </S.Progress>
          <span>Bom (543)</span>
        </div>

        <div className="item">
          <S.Progress level={'60%'}>
            <div className="progress"></div>
            <span>6+</span>
          </S.Progress>
          <span>Ruim (543)</span>
        </div>

        <div className="item">
          <S.Progress level={'10%'}>
            <div className="progress"></div>
            <span>1+</span>
          </S.Progress>
          <span>Pessímo (14)</span>
        </div>
      </div>
    </S.Wrapper>
  )
}
