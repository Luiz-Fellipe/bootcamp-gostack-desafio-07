import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import {
  Container,
  ItemList,
  ItemImage,
  ItemPrice,
  ItemTitle,
  ItemButtonText,
  ItemButton,
  ItemButtonAmount,
  ItemButtonAmountText,
} from './styles';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape().isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
    } catch (error) {
      console.tron.log(error);
    }
  }

  handleAddProduct = product => {
    const { addToCartRequest } = this.props;

    addToCartRequest(product.id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ItemList>
              <ItemImage source={{ uri: item.image }} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>{item.priceFormatted}</ItemPrice>
              <ItemButton onPress={() => this.handleAddProduct(item)}>
                <ItemButtonAmount>
                  {}
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ItemButtonAmountText>
                    {amount[item.id] || 0}
                  </ItemButtonAmountText>
                </ItemButtonAmount>
                <ItemButtonText>ADICIONAR</ItemButtonText>
              </ItemButton>
            </ItemList>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
