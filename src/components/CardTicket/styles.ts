import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 233px;

  display: flex;

  .contentImage {
    width: 233px;
  }

  .info {
    height: 100%;
    padding-top: 35px;

    h3 {
      font-weight: 500;
      font-size: 22px;
      color: #0a2156;
    }

    span {
      display: inline-block;
      font-weight: 500;
      font-size: 14px;
      color: #3c4c70;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .ponts_reviews {
    margin-top: 47px;
    display: flex;
    align-items: center;
    gap: 10px;

    .card_score {
      background-color: #4070f4;
      border-radius: 2px;

      width: 40px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    span:nth-child(1) {
      font-weight: 500;
      font-size: 14px;
      color: #0a2156;
    }

    span {
      display: inline-block;
      color: #9ea5b8;
      font-weight: 400;
      font-size: 14px;
    }
  }
`
