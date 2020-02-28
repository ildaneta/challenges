import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100% - 80px);
`;

export const Button = styled.button`
  height: 57px;
  width: 57px;
  border-radius: 23px;
  background: #3b5bfd;
  border: 0;
  cursor: pointer;
  bottom: 21px;
  position: fixed;
  right: 18px;
`;

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
