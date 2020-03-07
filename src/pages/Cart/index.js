import React from 'react';

import { connect } from 'react-redux';
import CartProduct from '../../components/CartProduct';
import { formatPrice } from '../../util/format';
import {
  Container,
  Total,
  TotalPrice,
  TotalText,
  ButtonRequestFinished,
  ButtonRequestFinishedText,
  ProductView,
} from './styles';

function Cart({ cart, total }) {
  return (
    <Container>
      <ProductView
        data={cart}
        renderItem={item => <CartProduct product={item} />}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
      />
      <Total>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>{total}</TotalPrice>
      </Total>
      <ButtonRequestFinished>
        <ButtonRequestFinishedText>FINALIZAR PEDIDO</ButtonRequestFinishedText>
      </ButtonRequestFinished>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps)(Cart);
