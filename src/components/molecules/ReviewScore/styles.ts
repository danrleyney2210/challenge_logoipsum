import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 24px;

  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #0a2156;
    margin-bottom: 12px;
  }

  .contentScore {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        font-size: 12px;
        font-weight: 500;
        color: #556282;
      }
    }
  }
`

type level = {
  level: string
}

export const Progress = styled.div<level>`
  width: 189px;
  height: 30px;
  background: #d9d9d9;
  position: relative;

  .progress {
    height: 100%;
    width: ${(props) => props.level};
    background-color: #ffad0d;
  }

  span {
    position: absolute;
    top: 7px;
    left: 7px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }
`
