import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'
import { Button } from 'components/atoms/Button'

export const Packeges = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentPackages>
          <div>
            <ReactSVG src="/img/planet.svg" />
            <p>
              Pacotes a partir de R$499? Até parece viagem! <br /> Descubra o
              seu próximo destino por um precinho que só o lorem tem.
            </p>
          </div>
          <Button
            text={'Conhecer mais pacotes'}
            color={'#4070F4'}
            background={'fff'}
            icon={'/icons/arrowRight.svg'}
          />
        </S.ContentPackages>
      </S.Container>
    </S.Wrapper>
  )
}
