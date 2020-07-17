import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const BlueWrapper = styled.View`
  height: ${hp('5%')};
  background-color: #2750a0;
`;

export const Container = styled.ScrollView.attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
})`
  background-color: #eceef2;
  flex: 1;
  margin-top: ${wp('-6%')};
  border-top-right-radius: ${wp('6')};
  border-top-left-radius: ${wp('6')};
`;

export const WrapperTextMainButton = styled.View`
  margin-top: ${wp('7')};
  margin-right: ${wp('5')};
  margin-left: ${wp('5')};
  margin-bottom: ${wp('5')};
`;

export const DivTitleMain = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleMain = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${wp('8%')};
  font-family: 'NunitoSans-Black';
  color: #153b64;
`;

export const ButtonMain = styled.TouchableOpacity`
  margin-top: ${wp('1')};
  margin-right: ${wp('-4')};
`;

export const ButtonImage = styled.Image`
  width: ${wp('14%')};
  height: ${hp('2')};
`;

export const SubTitleMain = styled.Text`
  font-size: ${wp('4.3%')};
  font-family: 'NunitoSans-Regular';
  color: #54769c;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperButton = styled.TouchableOpacity`
  background-color: #fff;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  width: ${wp('34%')};
  height: ${hp('5')};
  align-items: center;
  justify-content: center;
  margin-left: ${wp('5%')};
  margin-right: ${wp('-3%')};
  border-radius: ${wp('5%')};
  flex-direction: row;
  margin-bottom: ${wp('7%')};
`;

export const Buttons = styled.Text`
  font-size: ${wp('4.2%')};
  font-family: 'NunitoSans-Bold';
  color: #081a59;
`;

export const ContainerImage = styled.Image`
  height: ${hp('27')};
  width: ${wp('85')};
  border-radius: ${wp('4')};
  margin-left: ${wp('5')};
  margin-right: ${wp('5')};
  align-self: flex-start;
`;

export const ContainerCard = styled.View`
  margin-right: ${wp('5')};
`;

export const ContainerCheckNameCard = styled.View`
  margin-top: ${wp('-55')};
  margin-left: ${(props) => (props.visa ? `${wp('0')}` : `${wp('5%')}`)};
  padding-top: ${wp('8')};
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerCheckCard = styled.View`
  width: ${(props) => (props.visa ? `${wp('25%')}` : `${wp('15%')}`)};
`;

export const IconsCard = styled.Image`
  width: ${(props) => (props.visa ? `${wp('17%')}` : `${wp('15%')}`)};
  height: ${hp('5')};
`;

export const WrapperNumbersCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${wp('10')};
  margin-right: ${wp('10')};
  width: ${wp('37')};
`;

export const ContainerAsteriskCard = styled.View`
  margin-top: ${wp('-33')};
  margin-right: ${(props) => (props.number ? `${wp('0')};` : `${wp('3.2%')};`)};
`;

export const ContainerAsteriskCardText = styled.Text`
  letter-spacing: ${(props) => (props.number ? `${wp('0')}` : `${wp('0.4')}`)};
  font-size: ${(props) => (props.number ? `${wp('5%')};` : `${wp('4.7%')};`)};
  font-family: 'NunitoSans-Bold';
  color: #eceef2;
`;

export const ContainerDescriptionDataCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${wp('10')};
  margin-right: ${wp('10')};
`;

export const ContainerDescriptionsCardWrapper = styled.View`
  margin-top: ${wp('-18')};
`;

export const TitleDescriptionsCard = styled.Text`
  color: #5a769c;
  font-family: 'NunitoSans-Bold';
  font-size: ${wp('3')};
  margin-bottom: ${wp('1.8%')};
`;

export const DataDescriptionsCard = styled.Text`
  color: #eceef2;
  font-family: 'NunitoSans-Bold';
  font-size: ${wp('4')};
`;

export const ContainerSwitchButtons = styled.View`
  margin-right: ${wp('10%')};
  margin-left: ${wp('5%')};
  margin-top: ${wp('10%')};
  margin-bottom: ${(props) => (props.last ? wp('5%') : wp('-7%'))};
  background-color: #ffffff;
  padding-right: ${wp('4%')};
  padding-left: ${wp('2%')};
  border-radius: ${wp('4%')};
`;

export const WrapperSwitchButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextButtons = styled.Text`
  font-size: ${wp('4.4%')};
  font-family: 'NunitoSans-Regular';
  color: #081a59;
`;

export const TitleSettingsCards = styled.Text`
  font-size: ${wp('5.8%')};
  margin-left: ${wp('5%')};
  margin-top: ${wp('10%')};
  margin-bottom: ${wp('-4%')};
  font-family: 'NunitoSans-Black';
  color: #153b64;
`;

export const IconsButtons = styled.Image`
  width: ${wp('15%')};
  height: ${hp('8%')};
`;

export const SwitchButton = styled.View``;

export const ViewTest = styled.View`
  flex-direction: row;
  align-items: center;
`;
