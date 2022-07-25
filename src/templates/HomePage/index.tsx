import React from 'react'
import * as S from './styles'

import { Input } from 'antd'
import { GrLocation } from 'react-icons/gr'

import { ReactSVG } from 'react-svg'
import { CardPrices } from 'components/molecules/CardPrices'
import { PropertyType } from 'components/molecules/PropertyType'
import { Commodity } from 'components/molecules/Commodity'
import { TypeHouse } from 'components/molecules/TypeHouse'
import { ReviewScore } from 'components/molecules/ReviewScore'
import { CardTicket } from 'components/molecules/CardTicket'

export const HomePage = () => {
  return (
    <S.Wrapper>
      <S.HeaderMain>
        <div className="content">
          <div>
            <div className="contentSearch">
              <Input
                placeholder="GetYourGuide Tours & Tickets GmbH"
                prefix={<GrLocation size={20} />}
              />
            </div>
            <div className="contentDate">
              <Input
                placeholder="GetYourGuide Tours & Tickets GmbH"
                prefix={<GrLocation size={20} />}
              />
            </div>
          </div>

          <div className="contentMenu">
            <ReactSVG src="/icons/Select.svg" />
            <ReactSVG src="/icons/SelectDisabled.svg" />
          </div>
        </div>
      </S.HeaderMain>

      <S.ContentMain>
        <div className="content">
          <S.SidebarFilter>
            <div className="header">
              <h4>Filter</h4>
              <span>Limpar todos os filtros</span>
            </div>

            <CardPrices />
            <PropertyType />
            <Commodity />
            <TypeHouse />
            <ReviewScore />
          </S.SidebarFilter>

          <S.Main>
            <CardTicket />
            <CardTicket />
            <CardTicket />
          </S.Main>
        </div>
      </S.ContentMain>
    </S.Wrapper>
  )
}
