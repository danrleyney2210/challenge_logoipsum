import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.blue[500]};
  `}
`

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`

export const ContentPackages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
    max-width: 970px;

    p {
      color: #fff;
      font-weight: 500;
      font-size: 22px;
    }
  }
`

export const ContentKnowBrazil = styled.div``
