import styled from 'styled-components'

export const Wrapper = styled.div``

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
        border: 0.8px solid #ced2db;
        padding: 5px 0;

        > span {
          border: none;
          display: flex;
          align-items: center;
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
        border: 0.8px solid #ced2db;
        padding: 5px 17px;

        > span {
          display: flex;
          align-items: center;
        }

        input {
          padding-left: 17px;
          border: none;

          &::placeholder {
            font-weight: 500;
          }
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
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #0a2156;
`
