import React from 'react';

import StarRatingComponent from '../StarRatingComponent.jsx';

export default class FilterValueWithRating extends React.Component{
    render(){

        return(
            <div className="FilterValueWithRating">

                <div className="raitingRadio">
                    <input type="radio" />
                </div>
                <div className="ratingStar">
                    <StarRatingComponent maxNumberOfStars={this.props.maxNumberOfStars}  checkedStars={this.props.checkedStars} />
                </div>

                <p className="ratingNumber">{this.props.amount}</p>
            </div>
        );
    }
}
