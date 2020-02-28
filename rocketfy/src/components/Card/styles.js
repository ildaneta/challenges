import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  .content {
    font-weight: bold;
    line-height: 20px;
    font-size: 14px;
    color: #192c3d;
  }

  .priority {
    margin-top: 5px;
    font-size: 13.4px;
    color: #748396;
    font-weight: 500;
  }

  .date {
    /* margin-top: px; */
    margin-bottom: 5px;
    font-size: 13.4px;
    color: #748396;
    font-weight: 500;
  }

  .dateCard {
    margin-bottom: 8px;
    color: #fff;
    background: #ffa61e;
    width: 55px;
    height: 25px;
    border-radius: 3px;
    font-size: 13.4px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.25);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;
