import styled from 'styled-components'

export const Wrapper = styled.div`
  .contentLoad {
    height: 900px;
    width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-loading {
    height: 100px;
    width: 100px;
  }
`

export const HeaderMain = styled.div`
  background-color: #fff;
  height: 120px;

  .content {
    max-width: 1320px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;

      .contentSearch {
        border: 0.6px solid #ced2db;
        padding: 0;
        height: 48px;

        > span {
          border: none;
          display: flex;
          align-items: center;
          height: 100%;
        }

        input {
          padding-left: 17px;
          border: none;
          width: 267px;
          outline: none;

          &::placeholder {
            font-weight: 500;
          }
        }
      }

      .contentDate {
        border: 0.6px solid #ced2db;
        padding: 0 15px;
        height: 48px;
        display: flex;
        align-items: center;

        > div {
          border: none;
          display: flex;
          align-items: center;
          height: 100%;

          > div {
            input {
              padding-left: 0px;
              outline: none !important;
            }

            > span {
              padding-left: 7px;

              > span {
                /* display: none; */
                background-image: url('icons/ic-arrow-down.svg');
                background-repeat: no-repeat;
                background-size: 13px;
                padding-top: 0;
                background-position-y: 55%;

                svg {
                  /* height: 20px; */
                  width: 20px;
                  padding-top: 20px;
                  /* background-color: yellow; */
                }

                svg path {
                  /* fill: #fff; */
                  z-index: 10;
                }
                /* svg:nth-child(1) {
                  display: none;
                } */
              }
            }
          }
        }

        input {
          padding-left: 17px;
          border: none;

          &::placeholder {
            font-weight: 500;
          }
        }
      }

      .contentFind {
        border: 0.6px solid #ced2db;
        padding: 0;
        height: 48px;
        width: 48px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        svg path {
          fill: #ccc;
        }
      }
    }

    .contentMenu {
      display: flex;
      align-items: center;
      gap: 11px;
    }
  }
`

export const ContentMain = styled.div`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 86px;

  .content {
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
  }
`

export const CardPrice = styled.div``

export const SidebarFilter = styled.div`
  background-color: #fff;
  width: 367px;
  padding: 24px;
  height: fit-content;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e7e9ed;
    padding-bottom: 12px;

    h4 {
      color: #0a2156;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 0;
    }

    span {
      font-weight: 450;
      font-size: 14px;
      color: #3570bf;
    }
  }
`

export const Main = styled.div`
  width: 929px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  .content_pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;

    .page-info {
      display: flex;
      align-items: center;

      .contentSelect {
        display: flex;
        align-items: center;

        > p {
          font-weight: 500;
          font-size: 12px;
          padding-right: 8px;
          margin-bottom: 0px;
        }

        select {
          width: 69px;
          height: 28px;
          border: 1px solid #8a90bd;
          border-radius: 5px;
        }
      }

      .result {
        font-weight: 400;
        font-size: 12px;
        color: #828292;
        padding-right: 24px;
      }
    }

    .pagination {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 0px;
      gap: 10px;

      .page-num {
        padding: 7px 14px;
        font-size: 14px;
        color: #455cc7;
        border-radius: 4px;

        &:hover {
          background-color: #455cc7;
          color: #fff;
        }
      }

      .active {
        a {
          background-color: #455cc7;
          color: #fff;
        }
      }
    }
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #0a2156;
`
