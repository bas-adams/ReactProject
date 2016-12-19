import React from 'react';

import StarRatingComponent from './StarRatingComponent.jsx';

export default class FilterValueWithRating extends React.Component{
    render(){
        return(
            <div className="FilterValueWithRating">

                <div className="raitingRadio">
                    <input type="radio" />
                </div>
                <div className="ratingStar">
                    <StarRatingComponent fillStar={this.props.fillStar}  notFillStar={this.props.notFillStar} />
                </div>

                <p className="ratingNumber">{this.props.amount}</p>
            </div>
        );
    }
}
