import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #eceef2;
  border-radius: 22px;
  margin-top: -25px;
  flex: 1;
`;

export const ContainerTransactionsText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 20px 20px 20px;
`;

export const TransactionsText = styled.Text`
  font-size: ${(props) => (props.extraBold ? '21px' : '17px')};
  color: ${(props) => (props.extraBold ? '#081a59' : '#254C92')};
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const WrapperButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #fff;
  width: ${(props) => (props.noImage ? '75px' : '130px')};
  margin-right: 7px;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.first ? '20px' : '0px')};
  padding: 6px 0px;
  border-radius: 20px;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
  height: 40px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Buttons = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #081a59;
`;

export const ButtonsIcons = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 3px;
  margin-left: -2px;
`;

export const SafeAreaContainer = styled.ScrollView.attrs({
  vertical: true,
})`
  margin: 0 20px;
`;

export const TitleDays = styled.Text`
  color: #b2bdcb;
  font-size: 17px;
  font-weight: bold;
`;

export const WrapperOutgoing = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: 100px;
  margin-top: 20px;
  align-items: center;
  padding-left: 4px;
  border-top-left-radius: ${(props) => (props.first ? '20px' : '0')};
  border-top-right-radius: ${(props) => (props.first ? '20px' : '0')};
  border-bottom-left-radius: ${(props) => (props.first ? '0' : '20px')};
  border-bottom-right-radius: ${(props) => (props.first ? '0' : '20px')};
  margin-bottom: ${(props) => (props.first ? '-18px' : '0')};
`;

export const ContainerImage = styled.View`
  margin-right: 10px;
  margin-left: 5px;
  background-color: #f5f7f9;
  align-self: center;
  border-radius: 15px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ContainerOutgoing = styled.View`
  width: 260px;
`;

export const ContainerTitleOutgoing = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const ContainerSubTitleOutgoing = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleOutgoing = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #081a59;
`;

export const SubTitleOutgoing = styled.Text`
  font-size: 17px;
  color: #8090a2;
`;
