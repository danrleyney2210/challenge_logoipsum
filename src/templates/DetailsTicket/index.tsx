import React, { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { useRouter } from 'next/router'
import { api } from 'services/api'
import { Skeleton } from 'antd'
import Lottie from 'lottie-react'
import loading from '../../../public/lotties/loading.json'

import * as S from './styles'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaPlane } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { TypeTicket } from 'types/Ticket'
import Image from 'next/image'
import Link from 'next/link'

export const DetailsTicket = () => {
  const [details, setDetails] = useState<TypeTicket>()

  const router = useRouter()
  const { id } = router.query

  const getDetailsTicket = async () => {
    const result = await api
      .get<TypeTicket>(`/${id}`)
      .then(({ data }) => setDetails(data))
    result
  }

  useEffect(() => {
    getDetailsTicket()
  }, [])

  return (
    <>
      {details ? (
        <S.Wrapper>
          <div className="content">
            <div className="header_Details">
              <h4>
                <Link href="/">
                  <ReactSVG
                    src="/icons/ArrowBack.svg"
                    style={{ cursor: 'pointer' }}
                  />
                </Link>

                {details.name}
              </h4>
              <p>
                <GrLocation />
                {details.location}
              </p>
            </div>
            <div className="content_image">
              <button className="btn_view">Visualizar mais fotos</button>
              {/* <ReactSVG src="/img/imageDetails.svg" /> */}
              <Image
                src={`${details.images}`}
                width={'1320px'}
                height={'434px'}
              />
            </div>

            <div className="content_body">
              <div className="box_left">
                <div className="ponts_reviews">
                  <div className="card_score">
                    <span>6.3</span>
                  </div>
                  <p>{details.departament}</p>
                  <span>(423 Reviews)</span>
                </div>

                <div>
                  <div className="content_icons">
                    <p>
                      <FaPlane size={18} />
                      Passagem Aérea
                    </p>

                    <p>
                      <AiOutlineWifi size={18} />
                      Wi-fi
                    </p>

                    <p>
                      <FiCoffee size={18} />
                      Café de manhã
                    </p>
                    <p>
                      <BiHomeAlt size={18} />
                      Quarto
                    </p>
                  </div>

                  <div className="content_about">
                    <h1>Sobre o Ingresso selecionado:</h1>
                    <p>{details.description}</p>
                  </div>

                  <div className="content_location">
                    <h1>Localização</h1>
                    <div className="content_map">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        title={'mapa logo'}
                        src={`https://www.google.com/maps/embed/v1/search?q=${details.location}&key=AIzaSyDB6Pu4YHZJ1NWbnYx-L8rmnQ6oovEC3Go`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <S.cardTicketBuy>
                <div className="content_date">
                  <div>
                    <ReactSVG src="/icons/ic-date.svg" />
                    <div className="info">
                      <p>Data do Ingresso</p>
                      <span>22/12/2022</span>
                    </div>
                  </div>
                  <ReactSVG src="/icons/ic-arrow-down.svg" />
                </div>
                <div className="content_date">
                  <div>
                    <ReactSVG src="/icons/ic-user.svg" />
                    <div className="info">
                      <p>Ingressos</p>
                      <span>03 Ingressos</span>
                    </div>
                  </div>
                  <ReactSVG src="/icons/ic-arrow-down.svg" />
                </div>
                <div className="content_category">
                  <div className="item">
                    <span>01 Ingresso infantil</span>
                    <span>R$245,99</span>
                  </div>
                  <div className="item">
                    <span>02 Ingresso Adultos</span>
                    <span>R$245,99</span>
                  </div>
                  <div className="item">
                    <span>Seguro viajem</span>
                    <span>R$245,99</span>
                  </div>
                </div>
                <div className="content_price">
                  <div>
                    <p>Valor total</p>
                    <h3>{details.price}</h3>
                  </div>
                  <button>Comprar Ingresso</button>
                </div>
              </S.cardTicketBuy>
            </div>
          </div>
        </S.Wrapper>
      ) : (
        <S.Load>
          <div>
            <Lottie animationData={loading} loop={true} />
          </div>
        </S.Load>
      )}
    </>
  )
}
