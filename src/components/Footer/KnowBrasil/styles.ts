import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 95px 0px;
`

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    font-size: 40px;
    color: #0a2156;
  }

  span {
    display: inline-block;
    font-weight: 450;
    font-size: 20px;
    line-height: 26px;
    color: #556282;
    margin-bottom: 35px;
  }

  .contentCard {
    display: flex;
    justify-content: center;
    gap: 20px;

    .item {
      background-color: #fff;

      .contentImage {
        height: 242px;
      }

      .footercardPhoto {
        p {
          text-align: center;
          padding: 22px 0;
          font-size: 22px;
          color: #0a2156;
          font-weight: 500;
        }
      }
    }
  }
`
