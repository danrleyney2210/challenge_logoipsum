import React from 'react'
import * as S from './styles'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

export const Commodity = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`checked = ${e.target.checked}`)
  }

  return (
    <S.Wrapper>
      <h3>Comodidades</h3>

      <div className="contentCheckBox">
        <Checkbox onChange={onChange}>Wi-Fi</Checkbox>
        <Checkbox onChange={onChange}>Cozinha</Checkbox>
        <Checkbox onChange={onChange}>Máquina de Lavar</Checkbox>
        <Checkbox onChange={onChange}>Ar-condicionado</Checkbox>
        <Checkbox onChange={onChange}>Secadora</Checkbox>
      </div>
    </S.Wrapper>
  )
}
