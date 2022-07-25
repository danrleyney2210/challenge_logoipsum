import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const LogoipsumFooter = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="footer-main">
          <div className="left-content">
            <ReactSVG src="/logos/Logoipsum.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit id
              consequat dignissim metus. Mi et aenean quam lacus, enim nunc.
              Enim pellentesque interdum dui, integer bibendum at id. Sed nisi,
              enim, eleifend duis arcu, orci nisl massa.
            </p>

            <div className="content-Social-media">
              <FaLinkedin fill={'#fff'} />
              <BsInstagram fill={'#fff'} />
            </div>
          </div>
          <div className="right-content">
            <div>
              <p>Conheça</p>
              <ul>
                <li>
                  <Link href="#">Quem somos</Link>
                </li>
                <li>
                  <Link href="#">Trabalhe conosco</Link>
                </li>
                <li>
                  <Link href="#">Seja um parceiro</Link>
                </li>
              </ul>
            </div>

            <div>
              <p>Viaje</p>
              <ul>
                <li>
                  <Link href="#">Pacotes</Link>
                </li>
                <li>
                  <Link href="#">Passagens</Link>
                </li>
                <li>
                  <Link href="#">Hotéis</Link>
                </li>
              </ul>
            </div>

            <div>
              <p>Fale consoco</p>
              <ul>
                <li>
                  <Link href="#">Central de Ajuda</Link>
                </li>
                <li>
                  <Link href="#">Política de privacidade</Link>
                </li>
                <li>
                  <Link href="#">Política de cookies</Link>
                </li>
                <li>
                  <Link href="#">Termos de uso</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <S.lastFooter>
        <div className="content">
          <span>
            Copyright 2021 | Just Travel Travel Tech. All Rights Reserved.
          </span>
          <div>
            <span>Engineering made in BrazilBrazil</span>
            <ReactSVG src="/img/brazil.svg" />
          </div>
        </div>
      </S.lastFooter>
    </S.Wrapper>
  )
}

export default LogoipsumFooter
