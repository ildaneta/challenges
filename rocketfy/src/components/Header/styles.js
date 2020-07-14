import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #7159c1;
  color: #fff;

  display: flex;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderWrapperInfos = styled.div`
  display: flex;
  align-items: center;

  .menuInfo {
    width: 211px;
    margin-top: 10px;
    cursor: pointer;
  }

  .report {
    margin-top: 13px;
    padding-bottom: 10px;
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 13px;
    padding-right: 25px;
    margin-top: 10px;
    cursor: pointer;

    .down {
      color: rgba(255, 255, 255, 0.5);
      margin-left: 8px;
    }

    svg {
      margin-right: 5px;
    }
  }

  .active {
    width: 220px;
  }

  .notActive {
    opacity: 0.8;
    margin-top: 2px;

    &:hover {
      color: #fff;
      opacity: 1;
    }
  }

  .bottom {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    width: 165px;
    padding-top: 9px;
  }

  .rotate {
    transform: rotate(180deg);
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  }
`;

export const SpanInfo = styled.span`
  font-size: 15px;
  width: 100%;
  margin-bottom: -10px;

  a {
    color: #ffca78;
    font-weight: bold;
    font-size: 13px;

    &:hover {
      color: #fff;
    }
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .notification {
    margin-right: 12px;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      color: #fff;
      opacity: 1;
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    height: 28px;
    cursor: pointer;
    padding: 17px 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }

    img {
      width: 28px;
      height: 28px;
      border-radius: 3px;
    }

    .ellipses {
      margin-left: 10px;
      transform: rotate(90deg);
    }
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: -8px;
`;
