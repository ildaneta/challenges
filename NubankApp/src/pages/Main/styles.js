import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${(props) => (props.isEnabled ? '#282A36' : '#8b10ae')};
  padding-top: ${getStatusBarHeight()}px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 600px;
  /* Vai fazer com que esse componente passe por cima dos demais */
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  height: 100%;

  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 30px 0 30px;
`;

export const CardText = styled.Text`
  font-size: 14px;
  color: #888;
  padding-left: 15px;
  align-self: center;
  margin-top: -7px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Theme = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 12.5px;
  letter-spacing: 0.8px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  color: #d76065;
`;

export const Description = styled.Text`
  font-size: 34px;
  margin-top: 3px;
  color: #d76065;
`;

export const DescriptionStrong = styled.Text`
  font-weight: bold;
  font-size: 36;
`;

export const TitleStrong = styled.Text``;

export const SmallDescription = styled.Text`
  color: #999;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.7px;
`;

export const SmallDescriptionStrong = styled.Text`
  text-decoration: line-through;
  color: #d76065;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #d76065;
  border-radius: 4px;
  align-items: center;
  padding: 8px;
  margin-top: 15px;
  width: 140px;
`;

export const SignOutButtonText = styled.Text`
  text-transform: uppercase;
  color: #d76065;
  font-weight: bold;
  font-size: 12px;
`;

export const Ellipsis = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #999;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 40px;
  margin-left: 4px;
  background-color: #fff;
`;

export const EllipsisText = styled.Image`
  height: 16px;
  width: 16px;
`;

export const CreditCard = styled.Image`
  width: 28px;
  height: 28px;
  align-self: center;
`;

export const Teste = styled.Image`
  height: 30px;
  width: 30px;
  margin-left: 5px;
`;

export const CardFooter = styled.View`
  padding: 30px 15px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #777;
  padding-left: 15px;
  margin-right: 20px;
`;

export const WrapperPayments = styled.View``;
