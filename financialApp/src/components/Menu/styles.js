import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  padding-left: ${wp('5')};
  padding-right: ${wp('5')};
  padding-top: ${wp('5')};
  height: ${hp('14%')};
  background-color: #eceef2;
`;

export const WrapperMenuIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: ${(props) => (props.menuCenter ? `${wp('13%')};` : `${wp('15%')};`)};
  height: ${(props) => (props.menuCenter ? `${hp('7')};` : `${hp('5%')};`)};
  margin-bottom: ${wp('2')};
  background: ${(props) => (props.menuCenter ? '#234F9D' : '#eceef2')};
  border-radius: ${(props) =>
    props.menuCenter ? `${wp('5')};` : `${wp('0')};`};
`;

export const TitleMenuIcon = styled.Text`
  font-size: ${wp('3%')};
  color: #081a59;
  font-weight: bold;
`;
