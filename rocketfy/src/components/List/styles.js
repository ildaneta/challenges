import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props =>
    props.done &&
    css`
      opacity: 0.6;

      button{
        opacity: 0;
      }
      }
    `}

  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.06);
    height: calc(100vh + 320px);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
      cursor: pointer;

      &:hover {
        color: #3b5bfd;
      }
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }

  .phrase {
    text-align: center;
    padding: 20px;
    color: #7f8b97;
    margin-bottom: 20px;
    font-size: 13px;
    display: flex;
    font-weight: bold;
    line-height: 17px;
  }
`;
