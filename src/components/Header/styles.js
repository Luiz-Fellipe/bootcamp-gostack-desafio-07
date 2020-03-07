import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/image/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  background: ${colors.darkMenu};
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonBackHome = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 200;
  background: ${colors.primary};
  color: #fff;
  overflow: hidden;
`;
