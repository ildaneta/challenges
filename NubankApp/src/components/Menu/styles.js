import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 auto;
  width: 100%;
  max-height: 550px;
`;

export const Code = styled.View`
  overflow: hidden;
  align-self: center;
  padding: 5px;
  background: #fff;
`;

export const Nav = styled.View`
  margin-top: 15px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  padding: 11px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
  margin-right: 100px;
  width: 160px;
`;

export const NavTextSmall = styled.Text`
  font-size: 12px;
  padding-left: 20px;
  color: #abaaba;
`;

export const Teste = styled.View`
  padding: 0;
  margin: 0;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const TitlesMenu = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const TitleMenuStrong = styled.Text`
  font-weight: bold;
`;

export const WrapperTitlesMenu = styled.View`
  align-items: center;
  margin-top: 10px;
`;
