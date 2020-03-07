import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis muito legal',
        price: '179,90',
        url:
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ims=326x',
      },
      {
        id: 2,
        title: 'Tênis muito legal mas muito legal mesmo',
        price: '179,90',
        url:
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ims=326x',
      },
      {
        id: 3,
        title: 'Tênis muito legal',
        price: '179,90',
        url:
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ims=326x',
      },
      {
        id: 4,
        title: 'Tênis muito legal',
        price: '179,90',
        url:
          'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ims=326x',
      },
    ],
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ItemList>
              <ItemImage source={{ uri: item.url }} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>R$ {item.price}</ItemPrice>
              <ItemButton>
                <ItemButtonAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ItemButtonAmountText>3</ItemButtonAmountText>
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
