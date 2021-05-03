import React from 'react';
import BeerCard from './BeerCard';
import BeerNoResult from './BeerNoResult';
import photo from '../../assets/img/beer.svg'
function BeerContainer(props){
    return(
        <div className="beer-content">
        {
            props.beers.length == 0
            ? <BeerNoResult />
            : props.beers.map((item,index) =>
                <BeerCard key={index} item={item} />
            )
        }
        </div>
    )
}
export default BeerContainer;