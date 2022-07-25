import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  .container {
    width: 100%;
    background-color: #4070f4;

    .footer-main {
      max-width: 1320px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 64px;
      padding-bottom: 37px;

      .left-content {
        max-width: 450px;

        p {
          font-size: 14px;
          color: #fff;
          font-weight: 500;
        }

        .content-Social-media {
          margin-top: 26px;
          display: flex;
          align-items: center;
          gap: 11px;
        }
      }

      .right-content {
        display: flex;
        gap: 36px;

        div {
          p {
            font-weight: 700;
            font-size: 16px;
            color: #fff;
          }

          ul {
            list-style: none;

            li {
              a {
                text-decoration: none;
                font-size: 14px;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`

export const lastFooter = styled.div`
  background-color: #0bb07b;
  height: 85px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
    height: 100%;
    margin: 0 auto;

    span {
      font-size: 14px;
      color: #fff;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`
