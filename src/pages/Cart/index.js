import React from 'react';

import CartProduct from '../../components/CartProduct';

import {
  Container,
  Total,
  TotalPrice,
  TotalText,
  ButtonRequestFinished,
  ButtonRequestFinishedText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <CartProduct />
      <CartProduct />
      <Total>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>R$ 980,00</TotalPrice>
      </Total>
      <ButtonRequestFinished>
        <ButtonRequestFinishedText>FINALIZAR PEDIDO</ButtonRequestFinishedText>
      </ButtonRequestFinished>
    </Container>
  );
}
