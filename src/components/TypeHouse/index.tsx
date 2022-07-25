import React from 'react'
import * as S from './styles'
import { ReactSVG } from 'react-svg'
import { BsHouseDoor } from 'react-icons/bs'
import { MdApartment } from 'react-icons/md'
import { RiHotelLine } from 'react-icons/ri'

export const TypeHouse = () => {
  return (
    <S.Wrapper>
      <h3>TypeHouse</h3>

      <form action="">
        <input type="radio" name="typeHouse" value="05" id="casa" />
        <label htmlFor="casa">
          <BsHouseDoor size={14}/>
          <span>casa (346)</span>
        </label>

        <input type="radio" name="typeHouse" value="10" id="apartamento" />
        <label htmlFor="apartamento">
          <RiHotelLine size={14}/>
          <span>Apartamento (234)</span>
        </label>

        <input type="radio" name="typeHouse" value="20" id="hotel" />
        <label htmlFor="hotel">
          <MdApartment size={14} />
          <span>Hotel (23)</span>
        </label>
      </form>
    </S.Wrapper>
  )
}
