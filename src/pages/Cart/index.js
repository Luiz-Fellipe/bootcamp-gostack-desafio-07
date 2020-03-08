import React from 'react';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartProduct from '../../components/CartProduct';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Container,
  Total,
  TotalPrice,
  TotalText,
  ButtonRequestFinished,
  ButtonRequestFinishedText,
  ProductView,
  CartIsEmpty,
  CartIsEmptyText,
} from './styles';

function Cart({ cart, total }) {
  return (
    <Container>
      {cart.length ? (
        <>
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
            <ButtonRequestFinishedText>
              FINALIZAR PEDIDO
            </ButtonRequestFinishedText>
          </ButtonRequestFinished>
        </>
      ) : (
        <>
          <CartIsEmpty>
            <Icon name="sentiment-dissatisfied" size={60} color="#333" />
            <CartIsEmptyText>Seu carrinho está vazio</CartIsEmptyText>
          </CartIsEmpty>
        </>
      )}
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
