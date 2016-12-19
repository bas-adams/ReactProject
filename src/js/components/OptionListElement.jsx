import React from 'react';

import StarRatingComponent from './StarRatingComponent.jsx';

export default class OptionListElement extends React.Component{
    render(){
        return(

                <div className="OptionListElement productListItemWrapper">
                    <a href="" >
                        <img src="img/design_11.png" alt=""/>
                        <div className="productListIcons">
                            <StarRatingComponent fillStar={this.props.fillStar}  notFillStar={this.props.notFillStar} />
                            <div className="heart"><img src="img/heart_filled.png" alt="heart"/></div>
                        </div>
                        <h4>{this.props.productName}</h4>
                        <p className="itemText">{this.props.productDesc}</p>
                    </a>
                </div>

        );
    }
}