import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => (props.done ? 0.6 : 1)};
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.06);
    height: 100vh;
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
`;
