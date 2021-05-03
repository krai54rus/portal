import React from 'react';
import photo from '../../assets/img/beer.svg'
function BeerNoResult(props){
    return( 
    <div className="beer-no-result">
        <div className="beer-no-result_text">
            <span>Нет подходящих результатов</span>
        </div>
        <div className="beer-no-result_img" ><img src={photo} alt=""/></div>
    </div>
    )
}
export default BeerNoResult;