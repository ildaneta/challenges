import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;

export const Logos = styled.Image`
  width: 27px;
  height: 28px;
`;

export const Help = styled.Image`
  margin-top: 3px;
  width: 20px;
  height: 21px;
`;

export const Barcode = styled.Image`
  width: 33px;
  height: 28px;
  margin-top: 3px;
`;
