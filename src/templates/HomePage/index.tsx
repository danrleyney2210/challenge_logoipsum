import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Lottie from 'lottie-react'

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
import { BiCalendar } from 'react-icons/bi'
import loading from '../../../public/lotties/loading.json'
import { AiOutlineSearch } from 'react-icons/ai'

import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import ReactPaginate from 'react-paginate'
import { FiFilter } from 'react-icons/fi'

export const HomePage = () => {
  const [isLoading, setIsloading] = useState(true)
  const [data, setData] = useState<TypeTicket[]>()
  const [dataTemp, setDataTemp] = useState<TypeTicket[]>()

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [search, setSearch] = useState('')

  const filter = (search: string) => {
    if (!search) {
      setData(dataTemp)
      return
    }
    const result = dataTemp?.filter(
      (item) =>
        item.location.toUpperCase().includes(search.toUpperCase()) ||
        item.price.includes(search)
    )
    setData(result)
  }

  const getTicket = async () => {
    setIsloading(true)
    const result = await api.get<TypeTicket[]>('').then(({ data }) => {
      setIsloading(false)
      setData(data)
      setDataTemp(data)
    })

    result
  }

  useEffect(() => {
    filter(search)
  }, [search])

  useEffect(() => {
    getTicket()
  }, [])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <>
      {isLoading ? (
        <S.Wrapper>
          <div className="contentLoad">
            <Lottie
              animationData={loading}
              loop={true}
              className="icon-loading"
            />
          </div>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.HeaderMain>
            <div className="content">
              <div>
                <div className="contentSearch">
                  <Input
                    placeholder="GetYourGuide Tours & Tickets GmbH"
                    prefix={<GrLocation size={20} />}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="contentDate">
                  <BiCalendar size={20} />
                  <DatePicker onChange={onChange} />
                </div>
                <div className="contentFind">
                  <AiOutlineSearch size={22} />
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
                {currentItems &&
                  currentItems.map((item) => {
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
                  {/* <Pagination defaultCurrent={6} total={50} /> */}
                  <div className="page-info">
                    {data && (
                      <span className="result">{data.length} Resultados</span>
                    )}

                    <div className="contentSelect">
                      <p>Página: </p>
                      <select
                        name=""
                        id=""
                        value={itemsPerPage}
                        onChange={(e) =>
                          setItemsPerPage(Number(e.target.value))
                        }
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">25</option>
                      </select>
                    </div>
                  </div>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeClassName="active"
                  />
                </div>
              </S.Main>
            </div>
          </S.ContentMain>
        </S.Wrapper>
      )}
    </>
  )
}
