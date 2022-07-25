import React from 'react'
import { ReactSVG } from 'react-svg'
import * as S from './styles'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaPlane } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'

export const DetailsTicket = () => {
  return (
    <S.Wrapper>
      <div className="content">
        <div className="header_Details">
          <h4>
            <ReactSVG src="/icons/ArrowBack.svg" />
            Lorem ipsum dolor amet consectetur
          </h4>
          <p>
            <GrLocation />
            GetYourGuide Tours & Tickets GmbH
          </p>
        </div>
        <div className="content_image">
          <button className="btn_view">Visualizar mais fotos</button>
          <ReactSVG src="/img/imageDetails.svg" />
        </div>

        <div className="content_body">
          <div className="box_left">
            <div className="ponts_reviews">
              <div className="card_score">
                <span>6.3</span>
              </div>
              <p>Excellent</p>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices feugiat volutpat elementum sed donec bibendum vitae
                  tincidunt. Quis eget ornare amet massa eu at ipsum. Augue
                  purus ante ultrices dictum integer sagittis sem leo. Maecenas
                  suspendisse ipsum purus bibendum maecenas faucibus risus,
                  semper. Aliquet potenti neque semper dui aliquet. Imperdiet
                  lectus id sed pharetra nunc, proin. Ultrices varius rhoncus
                  facilisi condimentum habitant rhoncus ac. Vivamus varius
                  gravida urna viverra in. Aliquet amet dictum malesuada sapien
                  morbi est interdum. Tincidunt nunc convallis nullam lorem eu
                  elementum interdum. Ut ultrices suscipit dolor lorem consequat
                  ac nibh justo. Viverra quam nunc risus urna. Pharetra
                  vestibulum diam praesent consequat consequat fermentum nunc.
                </p>
              </div>

              <div className="content_location">
                <h1>Localização</h1>
                <div className="content_map"></div>
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
                <h3>R$ 1.391,28</h3>
              </div>
              <button>Comprar Ingresso</button>
            </div>
          </S.cardTicketBuy>
        </div>
      </div>
    </S.Wrapper>
  )
}
