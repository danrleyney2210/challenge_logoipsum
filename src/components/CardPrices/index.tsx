import React from 'react'
import * as S from './styles'

export const CardPrices = () => {
  return (
    <S.Wrapper>
      <h3>Preço</h3>

      <form action="">
        <input type="radio" name="price" value="05" id="05" />
        <label htmlFor="05">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="10" id="10" />
        <label htmlFor="10">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="20" id="20" />
        <label htmlFor="20">R$ 10,00 - R$ 390,00</label>

        <input type="radio" name="price" value="30" id="30" />
        <label htmlFor="30">R$ 10,00 - R$ 390,00</label>
      </form>
    </S.Wrapper>
  )
}
