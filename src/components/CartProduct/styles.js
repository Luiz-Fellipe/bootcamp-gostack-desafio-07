import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ProductItem = styled.View`
  margin-bottom: 20px;
`;

export const ProductContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfoImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfoDetails = styled.View`
  max-width: 163px;
  margin-left: 5px;
`;

export const ProductInfoDetailsTitle = styled.Text`
  font-size: 14px;
`;

export const ProductInfoDetailsPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
`;

export const ProductInfoDelete = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const ProductControls = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.grey};
  border-radius: 4px;
  height: 40px;
`;

export const ProductControlsInputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const ProductControlsInput = styled.TextInput`
  background: #fff;
  width: 51px;
  height: 26px;
  border: 0.5px solid #dddddd;
  border-radius: 4px;
  padding: 0;
  text-align: center;
  color: #000;
  margin: 0px 5px;
`;

export const ProductControlsSubTotal = styled.Text`
  margin-right: 15px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductControlsButton = styled.TouchableOpacity``;
