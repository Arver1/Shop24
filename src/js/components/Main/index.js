import React from 'react';
import Cart from './Cart';
import Promo from './Promo';

function Main(){
  return (
    <main className="main-page">
      <div className="main-page__wrapper">
        <Cart />
        <Promo />
      </div>
    </main>
  )
}

export default Main
