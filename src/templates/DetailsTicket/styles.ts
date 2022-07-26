import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 56px;

  .content {
    max-width: 1320px;
    margin: 0 auto;

    .content_body {
      display: flex;
      justify-content: space-between;
      margin-top: 47px;

      .box_left {
        max-width: 900px;
      }
    }

    .header_Details {
      margin-bottom: 37px;

      h4 {
        display: flex;
        gap: 20px;
        font-weight: 700;
        font-size: 24px;
        color: #0a2156;
        margin-bottom: 0;
      }

      p {
        margin-left: 30px;
        display: flex;
        align-items: center;
        gap: 9px;
        font-weight: 450;
        font-size: 14px;
        margin-bottom: 0;
      }
    }

    .content_image {
      height: 434px;
      position: relative;

      .btn_view {
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 16px 18px;
        outline: none;
        cursor: pointer;
        border-radius: 4px;
        color: #4070f4;
        font-weight: 500;
        font-size: 16px;
        border: none;
        z-index: 2;
      }

      img,
      svg {
        width: 100%;
        height: 100%;
      }
    }

    .ponts_reviews {
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

    .content_icons {
      margin: 24px 0 34px 0px;
      display: flex;
      align-items: center;
      gap: 15px;

      p {
        display: flex;
        margin-bottom: 0;
        gap: 9px;
        font-weight: 500;
        font-size: 14px;
        color: #9ea5b8;
      }
    }

    .content_about {
      h1 {
        font-weight: 500;
        font-size: 22px;
        color: #0a2156;
        margin-bottom: 8px;
      }

      p {
        color: #9ea5b8;
        font-weight: 500;
        font-size: 16px;
      }
    }

    .content_location {
      h1 {
        font-weight: 500;
        font-size: 22px;
        color: #0a2156;
        margin-bottom: 8px;
      }

      .content_map {
        width: 100%;
        height: 340px;
        background-color: #ccc;

        iframe {
          border: none;
        }
      }
    }
  }
`

export const cardTicketBuy = styled.div`
  background-color: #fff;
  width: 353px;
  padding: 24px;
  border-radius: 4px;
  height: fit-content;

  .content_date {
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    border-bottom: 1px solid #e7e9ed;
    margin-bottom: 24px;

    > div {
      display: flex;
      gap: 17px;

      .info {
        p {
          font-weight: 700;
          font-size: 16px;
          color: #0a2156;
          margin-bottom: 0;
        }

        span {
          font-weight: 500;
          font-size: 16px;
          color: #9ea5b8;
        }
      }
    }
  }

  .content_category {
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e7e9ed;

    .item {
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 500;
        font-size: 16px;
        color: #9ea5b8;
      }
    }
  }

  .content_price {
    margin-top: 24px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      p {
        font-weight: 700;
        font-size: 16px;
        color: #0a2156;
        margin-bottom: 0;
      }

      h3 {
        font-weight: 700;
        font-size: 24px;
        color: #4070f4;
        margin-bottom: 0;
      }
    }

    button {
      width: 100%;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: #4070f4;
      color: #fff;
      border-radius: 4px;
      padding: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 500;
      font-size: 17px;
    }
  }
`

export const Load = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100px;
  }
`
