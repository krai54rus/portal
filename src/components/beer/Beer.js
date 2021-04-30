import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import add from '../../assets/img/add.svg';
function Beer (props){
  function showModal() {
    console.log('show modal');
  }
  // function syncWithServer() {
  //   console.log(props.beers);
  // }
  useEffect(()=>{
    console.log(props);
  });
  // useEffect(() => {
  //   syncWithServer();
  // }, [props.beers]);

    return (
      <div className="beer-wrap">
        <div className="beer-header">
          <div className="beer-header__title">Лагер</div>
          <div className="beer-header__title">Стаут</div>
          <div className="beer-header__title">IPA</div>
          <div className="beer-header__title">Эль</div>
          <div className="beer-header__title">Крафтовое</div>
          <div className="beer-header__plus" onClick={()=>showModal()}>
            <img src={add} alt=""/>
          </div>
        </div>
        <div className="beer-filter">
          <div className="beer-filter__spisok">
            <div className="beer-filter__spisok_item" onClick={()=>props.filterStyle('')}>Все</div>
            {
              props.styles.map((item,index)=>{
               return <div key={index} className="beer-filter__spisok_item" onClick={()=>props.filterStyle(item)}>{item}</div>
              })
            }
            {/* <div className="beer-filter__spisok_item" onClick={()=>this.filter()}>Все</div>
            <div className="beer-filter__spisok_item">Witbeer</div>
            <div className="beer-filter__spisok_item">Wiezen</div>
            <div className="beer-filter__spisok_item">Темное</div>
            <div className="beer-filter__spisok_item">Светлое нефильтрованное</div> */}
          </div>
          <div className="beer-filter__filter">
              <div className="beer-filter__filter_btn">
                <span>Расширенный фильтр</span>
              </div>
          </div>
        </div>
        <div className="beer-content">
          {
            props.beers.map((item,index) =>
              <BeerCard key={index} item={item} />
            )
          }
        </div>
      </div>
    );
}

export default Beer;
