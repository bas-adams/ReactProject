import React from 'react';

import StarRatingComponent from './StarRatingComponent.jsx';

export default class ProductListElement extends React.Component{
    render(){
        return(

                <div className="ProductListElement">
                    <a href="" >
                        <img src="img/design_11.png" alt=""/>
                        <div className="productListIcons">
                            <StarRatingComponent maxNumberOfStars={this.props.maxNumberOfStars} checkedStars={this.props.checkedStars} />
                            <div className="heart"><i className="icon icon-heart starIcon"></i></div>
                        </div>
                        <h4>{this.props.productName}</h4>
                        <p className="itemText">{this.props.productDesc}</p>
                    </a>
                </div>

        );
    }
}