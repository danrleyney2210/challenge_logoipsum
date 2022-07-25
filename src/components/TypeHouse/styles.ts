import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 31px;
  border-bottom: 1px solid #e7e9ed;

  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #0a2156;
    margin-bottom: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input[type='radio'] {
      display: none;
      &:checked + label {
        border: 1px solid #4070f4;
        color: #fff;

        svg path {
          color: #4070f4;
        }

        span {
          color: #4070f4;
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      gap: 13px;

      width: 100%;
      padding: 8px;
      border-radius: 2px;
      border: 1px solid #ced2db;
      font-size: 13px;
      font-weight: 500;

      span {
        color: #CED2DB;
      }

      svg path {
        color: #CED2DB;
      }
    }
  }
`
