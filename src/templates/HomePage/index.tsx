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
import { TypeTicket } from 'types/Ticket'

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
            {data &&
              data.map((item) => {
                return (
                  <CardTicket
                    location={item.location}
                    price={item.price}
                    departament={item.departament}
                    imagem={item.images}
                    id={item.id}
                    name={item.name}
                    key={item.id}
                  />
                )
              })}

            <div className="content_pagination">
              <Pagination defaultCurrent={6} total={50} />
            </div>
          </S.Main>
        </div>
      </S.ContentMain>
    </S.Wrapper>
  )
}
