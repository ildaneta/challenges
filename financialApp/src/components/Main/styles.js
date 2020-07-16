import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView.attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: #eceef2;
  border-top-right-radius: ${wp('6')};
  border-top-left-radius: ${wp('6')};
  margin-top: ${wp('-10')};
`;

export const ContainerTransactionsText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${wp('5')};
  margin-right: ${wp('5')};
  margin-left: ${wp('5')};
  margin-bottom: ${wp('5')};
`;

export const TransactionsText = styled.Text`
  font-size: ${(props) => (props.extraBold ? `${wp('5')}` : `${wp('4')}`)};
  color: ${(props) => (props.extraBold ? '#081a59' : '#254C92')};
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const WrapperButton = styled.TouchableOpacity.attrs({
  // activeOpacity: 0.6,
})`
  background-color: #fff;
  opacity: ${(props) => (props.first ? 1 : 0.6)};
  width: ${(props) => (props.noImage ? `${wp('17%')}` : `${wp('30%')}`)};
  margin-right: ${wp('2%')};
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.first ? `${wp('5%')}` : `${wp('0%')}`)};
  padding-top: ${wp('1%')};
  padding-bottom: ${wp('1%')};
  padding-left: ${wp('0%')};
  padding-right: ${wp('0%')};
  border-radius: ${wp('5%')};
  height: ${hp('5')};
  flex-direction: row;
  margin-bottom: ${wp('7%')};
`;

export const Buttons = styled.Text`
  font-size: ${wp('3.8')};
  font-weight: bold;
  color: #081a59;
`;

export const ButtonsIcons = styled.Image`
  width: ${wp('6')};
  height: ${hp('3.4%')};
  margin-right: ${wp('1')};
  margin-left: ${wp('-1')};
`;

export const SafeAreaContainer = styled.View`
  margin-top: ${wp('0%')};
  margin-bottom: ${wp('0%')};
  margin-left: ${wp('5%')};
  margin-right: ${wp('5%')};
`;

export const TitleDays = styled.Text`
  color: #b2bdcb;
  font-size: ${wp('4%')};
  font-weight: bold;
`;

export const WrapperOutgoing = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: ${hp('13%')};
  margin-top: ${wp('5%')};
  align-items: center;
  padding-left: ${wp('1%')};
  border-top-left-radius: ${(props) =>
    props.first ? `${wp('5%')}` : `${wp('0%')}`};
  border-top-right-radius: ${(props) =>
    props.first ? `${wp('5%')}` : `${wp('0%')}`};
  border-bottom-left-radius: ${(props) =>
    props.first ? `${wp('0%')}` : `${wp('5%')}`};
  border-bottom-right-radius: ${(props) =>
    props.first ? `${wp('0%')}` : `${wp('5%')}`};
  margin-bottom: ${(props) => (props.first ? `${wp('-4.5')}` : `${wp('5%')}`)};
`;

export const UnicOutgoing = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: ${hp('13%')};
  margin-top: ${wp('5%')};
  align-items: center;
  padding-left: ${wp('1%')};
  border-radius: ${wp('5%')};
  margin-bottom: ${wp('5%')};
`;

export const ContainerImage = styled.View`
  margin-right: ${wp('2.5')};
  margin-left: ${wp('1.5')};
  background-color: #f5f7f9;
  align-self: center;
  border-radius: ${wp('3%')};
  width: ${wp('15.3%')};
  height: ${hp('8.4')};
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${wp('11%')};
  height: ${hp('5%')};
`;

export const ContainerOutgoing = styled.View`
  width: ${wp('66.3%')};
`;

export const ContainerTitleOutgoing = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${wp('1.3%')};
`;

export const ContainerSubTitleOutgoing = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleOutgoing = styled.Text`
  font-size: ${wp('4.5')};
  font-weight: bold;
  color: ${(props) => (props.received ? '#33B27C' : '#081a59')};
`;

export const SubTitleOutgoing = styled.Text`
  font-size: ${wp('3.9')};
  color: #8090a2;
`;

export const ReceivedStrong = styled.Text`
  font-weight: bold;
  font-size: ${wp('4.2')};
`;
