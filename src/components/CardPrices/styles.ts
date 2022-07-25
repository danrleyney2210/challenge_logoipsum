import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e7e9ed;

  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #0a2156;
    margin-bottom: 12px;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6px;
    row-gap: 8px;

    input[type='radio'] {
      display: none;

      &:checked + label {
        background: #4070f4;
        border: #4070f4;
        color: #fff;
      }
    }

    label {
      width: 100%;
      padding: 8px;
      border-radius: 2px;
      border: 1px solid #ced2db;
      font-size: 13px;
      font-weight: 500;
    }
  }
`
