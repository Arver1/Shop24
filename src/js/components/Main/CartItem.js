import React from 'react';
import goods from '../../goods';
import {connect} from 'react-redux';
import { incGood, decGood, deleteGood } from "../../AC";

function CartItem(props){
  const { goodId, amount } = props;
  const good = goods.find(it => it.id === goodId);

  function increment(){
    const {incGood} = props;
    incGood(goodId);
  }

  function decrement(){
    const {decGood} = props;
    decGood(goodId);
  }

  function delGood(){
    const {deleteGood} = props;
    deleteGood(goodId);
  }

  function getDescription(good){
    return ['description', 'code', 'size', 'color'].map((it, index) => {
      let temp = null;
      switch(it) {
        case 'code':
          temp = 'Код: ';
          break;
        case 'size':
          temp = 'Размер: ';
          break;
        case 'color':
          temp = 'Цвет: ';
          break;
      }
      return (
        <li key={index}
            className={`cart__description-item cart__description-item--${it}`}>
          {temp}{good[it]}
          </li>)
    })
  }

  function getPrice(good){
    if(!good.price) return null;
    const total = (good.price * amount).toString();
    const digit =  total.length - 1;
    if(digit < 3) return total;
    return total.split('').reverse().reduceRight((acc, it, index) => {
      if(!(index % 3)) return acc + it + ' ';
      return acc + it;
    }, '');
  }
  
  return (
    <li className="cart__item">
      <img className="cart__good-img" src={good.url} />
      <ul className="cart__description-items">{good ? getDescription(good) : null}</ul>
      <div className="cart__wrapper">
        <section className="cart__amount">
          <button className="cart__btn" onClick={decrement}>-</button>
          <span>{amount}</span>
          <button className="cart__btn" onClick={increment}>+</button>
        </section>
        <span className="cart__price">{getPrice(good)} руб.</span>
        <button className="cart__btn cart__btn--del" onClick={delGood}>Удалить</button>
      </div>
    </li>
  )
}

export default connect(null, {
  incGood,
  decGood,
  deleteGood
})(CartItem)
