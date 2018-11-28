import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const caption = ['Товар', 'Описание', 'Количество', 'Цена', 'Удалить'];

function Cart(props){
  function getBody(){
    const {goodsId} = props;
    return Object.entries(goodsId).map((id, index) =>
      <CartItem key={index} goodId={id[0]} amount={id[1]}/>)
  }
  function getCaption(list){
    return list.map((item, index) =>
      <span key={index} className="cart__caption">{item}</span>
    )
  }
  return (
    <section className="cart">
      <h2 className="cart__title"><span>Ваша корзина</span></h2>
      <ul className="cart__items">
        <li className="cart__item">
          <span className="cart__caption cart__caption--good">Товар</span>
          <span className="cart__caption cart__caption--description">Описание</span>
          <div className="cart__wrapper">
            <span className="cart__caption cart__caption--amount">Количество</span>
            <span className="cart__caption cart__caption--price">Цена</span>
            <span className="cart__caption cart__caption--price">Удалить</span>
          </div>
        </li>
        {getBody()}
      </ul>
    </section>
  )
}

export default connect(state => {
  return {
    goodsId: state
  }
})(Cart)
