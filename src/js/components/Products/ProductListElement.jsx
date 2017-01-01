import React from 'react';
import StarRatingComponent from '../General/StarRatingComponent.jsx';
import Heart from '../General/Heart.jsx';

export default class ProductListElement extends React.Component{
    render(){
        return(

                <div className="ProductListElement">
                    <li className="productListItem">
                        <img src="img/design_11.png" alt=""/>
                        <div className="productListIcons">
                            <StarRatingComponent maxNumberOfStars={this.props.maxNumberOfStars} checkedStars={this.props.checkedStars} />
                            <Heart heartSelected={this.props.heartSelected} />
                        </div>
                        <h4>{this.props.productName}</h4>
                        <p className="itemText">{this.props.productDesc}</p>
                    </li>
                </div>
        );
    }
}