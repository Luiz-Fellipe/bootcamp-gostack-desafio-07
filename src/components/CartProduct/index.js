import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import * as CartActions from '../../store/modules/cart/actions';

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

function CartProduct({ product, removeFromCart, updateAmountRequest }) {
  const { item } = product;
  console.tron.log(item);

  function increment(prod) {
    updateAmountRequest(prod.id, prod.amount + 1);
  }

  function decrement(prod) {
    updateAmountRequest(prod.id, prod.amount - 1);
  }

  return (
    <ProductItem>
      <ProductContainer>
        <ProductInfo>
          <ProductInfoImage
            source={{
              uri: item.image,
            }}
          />
          <ProductInfoDetails>
            <ProductInfoDetailsTitle>{item.title}</ProductInfoDetailsTitle>
            <ProductInfoDetailsPrice>
              {item.priceFormatted}
            </ProductInfoDetailsPrice>
          </ProductInfoDetails>
        </ProductInfo>
        <ProductInfoDelete
          onPress={() => {
            removeFromCart(item.id);
          }}
        >
          <Icon name="delete-forever" size={24} color={colors.primary} />
        </ProductInfoDelete>
      </ProductContainer>
      <ProductControls>
        <ProductControlsInputGroup>
          <ProductControlsButton onPress={() => decrement(item)}>
            <Icon
              name="remove-circle-outline"
              size={20}
              color={colors.primary}
            />
          </ProductControlsButton>
          <ProductControlsInput
            editable={false}
            defaultValue={`${item.amount}`}
          />
          <ProductControlsButton onPress={() => increment(item)}>
            <Icon name="add-circle-outline" size={20} color={colors.primary} />
          </ProductControlsButton>
        </ProductControlsInputGroup>
        <ProductControlsSubTotal>{item.subTotal}</ProductControlsSubTotal>
      </ProductControls>
    </ProductItem>
  );
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      subTotal: PropTypes.string,
      amount: PropTypes.number,
      priceFormatted: PropTypes.string,
    }),
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(CartProduct);
