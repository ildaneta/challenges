import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #2750a0;
  height: 250px;
`;

export const ContainerProfileHome = styled.View``;

export const ContainerProfile = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 20px 0px;
`;

export const ContainerSold = styled.View``;

export const Sold = styled.Text`
  font-size: 30px;
  letter-spacing: -1px;
  font-weight: bold;
  font-family: 'NunitoSans-light';
  color: #fff;
`;

export const AvailableBalance = styled.Text`
  font-size: 15px;
  letter-spacing: 0.5px;
  color: #e6e2e6;
  margin-left: 20px;

  margin-bottom: 25px;
`;

export const ContainerPhotoNotification = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
`;

export const Photo = styled.Image`
  height: 45px;
  width: 50px;
  border-radius: 7px;
`;

export const Notification = styled.Image`
  height: 23px;
  width: 29px;
  margin-right: 10px;
`;

export const WrapperMenusIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

export const ContainerMenusIcons = styled.View`
  margin: 5px 20px;
`;

export const MenusIcons = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${(props) => (props.gray ? '#F5F7F9' : '#fff')};
  padding: 5px;
  border-radius: 16px;
`;

export const Icons = styled.Image`
  height: 45px;
  width: 45px;
`;

export const ContainerLabelIcon = styled.View`
  align-items: center;
  margin-top: 5px;
`;

export const LabelIcon = styled.Text`
  font-size: 15px;
  color: #e6e2e6;
  font-family: sans-serif;
`;
