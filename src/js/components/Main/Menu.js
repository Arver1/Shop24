import React, {PureComponent}from 'react';

const menuList = {
  'Одежда и аксессуары': ['Женская одежда', 'Мужская одежда', 'Аксессуары'],
  'Обувь': ['test', 'test', 'test', 'test'],
  'Украшения': ['test', 'test', 'test', 'test'],
  'Красота и здоровье': ['test', 'test', 'test', 'test'],
  'Товары для дома': ['test', 'test', 'test', 'test'],
  'Товары для кухни': ['test', 'test', 'test', 'test'],
};

class Menu extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      active: ''
    }
  }

  getSubMenu = list => {
    if(!Array.isArray(list)) return;
    return (
      <div className="main-page__sub-wrapper">
        <ul className="main-page__sub-items">
          {list.map((item, index)=>
            <li key={index} className="main-page__sub-item">{item}</li>)}
        </ul>
      </div>
    )
  };

  getMenu = list => {
    if(!list) return;
    return Object.entries(list).map((item, index)=>
      <li key={index} className="main-page__item">
        {item[0]}
        {this.getSubMenu(item[1])}
      </li>
    );
  };

  render(){
    return(
      <section className="main-page__wrapper">
        <ul className="main-page__items">{this.getMenu(menuList)}</ul>
      </section>
    )
  }
}

export default Menu
