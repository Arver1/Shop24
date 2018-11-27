import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';


function Cart(props){
  function getBody(){
    const {goods} = props;
    return (
      <ul>
        { goods.map((good, index) =>
          <CartItem key={index} good={good}/>
        )}
      </ul>
    )
  }
  return (
    <section className="cart">
      <h2 className="cart__title"><span>Ваша корзина</span></h2>
      {/*{ getBody() }*/}
    </section>
  )
}

export default connect(state => {
  return {
    goods: state
  }
})(Cart)
