import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #fff;
  height: 233px;
  display: flex;
  display: flex;
  justify-content: space-between;

  .content_left {
    display: flex;
  }

  .contentImage {
    width: 233px;
    position: relative;

    .btn_ticket {
      position: absolute;
      top: 14px;
      left: 14px;
      box-shadow: 0px 4px 8px rgba(11, 31, 77, 0.1);
      border-radius: 15px;
      border: none;
      font-size: 12px;
      color: #0a2156;
      padding: 4px 12px;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 500;

      &:hover {
        background-color: #ffad0d;
        color: #fff;
      }
    }

    .ic-heart {
      position: absolute;
      right: 40px;
      top: 16px;
      cursor: pointer;

      &:hover {
        svg path {
          fill: #fff;
        }
      }
    }
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

      span {
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    p {
      font-weight: 500;
      font-size: 14px;
      color: #0a2156;
      margin-bottom: 0;
    }

    span {
      display: inline-block;
      color: #9ea5b8;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .values {
    margin: auto 0;
    height: 166px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding-left: 24px;
    padding-right: 24px;
    border-left: 1px solid #e7e9ed;

    > span {
      font-weight: 450;
      font-size: 14px;
      color: #858fa6;
    }

    > p {
      display: flex;
      color: #4070f4;
      font-weight: 700;
      font-size: 24px;

      span {
        display: inline-block;
        font-weight: 450;
        font-size: 14px;
        color: #0a2156;
      }
    }
  }
`
