import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ProductView = styled.FlatList`
  max-height: 300px;
`;

export const Container = styled.View`
  margin: 20px;
  background: ${colors.white};
  border-radius: 4px;
  padding: 15px;
`;

export const Total = styled.View`
  align-self: center;
  margin: 30px 0px;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonRequestFinished = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  height: 42px;
  justify-content: center;
  align-items: center;
`;

export const ButtonRequestFinishedText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CartIsEmpty = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CartIsEmptyText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;
