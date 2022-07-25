import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Pagination } from 'antd'

import { api } from 'services/api'

import { Input } from 'antd'
import { GrLocation } from 'react-icons/gr'
import { ReactSVG } from 'react-svg'

import { CardPrices } from 'components/molecules/CardPrices'
import { PropertyType } from 'components/molecules/PropertyType'
import { Commodity } from 'components/molecules/Commodity'
import { TypeHouse } from 'components/molecules/TypeHouse'
import { ReviewScore } from 'components/molecules/ReviewScore'
import { CardTicket } from 'components/molecules/CardTicket'

interface TypeTicket {
  createdAt: string
  name: string
  description: string
  price: string
  location: string
  departament: string
  images: string
  id: string
}

export const HomePage = () => {
  const [data, setData] = useState<TypeTicket[]>()

  const getTicket = async () => {
    const result = await api
      .get<TypeTicket[]>('')
      .then(({ data }) => setData(data))
    result
  }

  useEffect(() => {
    getTicket()
  }, [])

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
            <CardTicket />
            <CardTicket />
            <CardTicket />

            <div className="content_pagination">
              <Pagination defaultCurrent={6} total={50} />
            </div>
          </S.Main>
        </div>
      </S.ContentMain>
    </S.Wrapper>
  )
}
