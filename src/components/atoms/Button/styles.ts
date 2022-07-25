import styled from 'styled-components'

type color = {
  background: string
  color: string
}

export const Wrapper = styled.button<color>`
  cursor: pointer;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  padding: 19px 17px;
  font-size: 16px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
`
