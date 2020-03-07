import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const ItemList = styled.View`
  background: ${colors.white};
  margin: 15px;
  width: 220px;
  border-radius: 4px;
  padding: 20px;
`;

export const ItemImage = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const ItemPrice = styled.Text`
  margin-top: 5px;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;

export const ItemButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ItemButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
`;

export const ItemButtonAmount = styled.View`
  flex-direction: row;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ItemButtonAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
