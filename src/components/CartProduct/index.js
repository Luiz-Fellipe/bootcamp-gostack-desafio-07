import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import {
  ProductContainer,
  ProductInfo,
  ProductInfoImage,
  ProductInfoDetails,
  ProductInfoDetailsPrice,
  ProductInfoDetailsTitle,
  ProductInfoDelete,
  ProductControls,
  ProductControlsInput,
  ProductControlsSubTotal,
  ProductControlsInputGroup,
  ProductControlsButton,
  ProductItem,
} from './styles';

export default function CartProduct() {
  return (
    <ProductItem>
      <ProductContainer>
        <ProductInfo>
          <ProductInfoImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ims=326x',
            }}
          />
          <ProductInfoDetails>
            <ProductInfoDetailsTitle>
              Tênis muito legal muito dahora mesmo meu deus
            </ProductInfoDetailsTitle>
            <ProductInfoDetailsPrice>R$ 179,90</ProductInfoDetailsPrice>
          </ProductInfoDetails>
        </ProductInfo>
        <ProductInfoDelete onPress={() => {}}>
          <Icon name="delete-forever" size={24} color={colors.primary} />
        </ProductInfoDelete>
      </ProductContainer>
      <ProductControls>
        <ProductControlsInputGroup>
          <ProductControlsButton>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlsButton>
          <ProductControlsInput editable={false} defaultValue="3" />
          <ProductControlsButton>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlsButton>
        </ProductControlsInputGroup>
        <ProductControlsSubTotal>R$ 589,90</ProductControlsSubTotal>
      </ProductControls>
    </ProductItem>
  );
}
