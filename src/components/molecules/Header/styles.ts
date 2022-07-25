import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1320px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-bottom: 0.8px solid #e7e9ed;

    .login {
      display: flex;
      align-items: center;

      > div {
        border-right: 1px solid #e7e9ed;
        display: flex;
        align-items: center;
        gap: 19px;
        padding-right: 19px;

        span {
          font-size: 12px;
        }
      }

      .sign-in {
        padding-left: 20px;
        padding-right: 0;
        border: none;
        a {
          font-size: 16px;
          color: ${theme.colors.blue[500]};
          text-decoration: none;
          font-weight: 700;
        }
      }
    }
  `}
`
