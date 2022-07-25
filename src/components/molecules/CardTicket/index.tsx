import React from 'react'
import { ReactSVG } from 'react-svg'
import * as S from './styles'
import { GrLocation } from 'react-icons/gr'
import { Button } from 'components/atoms/Button'

interface cardProps {
  date: string
  name: string
  description: string
  price: string
  location: string
  departament: string
  imagem: string
  id: string
}

// {
//   date,
//   name,
//   description,
//   price,
//   location,
//   departament,
//   imagem,
//   id
// }: cardProps

export const CardTicket = () => {
  return (
    <S.Wrapper>
      <div className="content_left">
        <div className="contentImage">
          <button className="btn_ticket">Ingresso</button>
          <ReactSVG src="/icons/ic-heart.svg" className="ic-heart" />
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
            <p>Excellent</p>
            <span>(423 Reviews)</span>
          </div>
        </div>
      </div>

      <div className="values">
        <span>de R$ 2.351,28 por</span>

        <p>
          <span>R$</span>
          1.391,28
        </p>

        <Button
          text={'Saber mais'}
          background={'#4070F4'}
          color={'#fff'}
          icon={'/icons/arrow-up-right.svg'}
          style={{ height: '39px', width: '154px' }}
        />
      </div>
    </S.Wrapper>
  )
}
