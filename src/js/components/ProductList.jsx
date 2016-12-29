import React from 'react';

import ProductListElement from './ProductListElement.jsx';

export default class ProductList extends React.Component{
    render(){
        return(

            <div>
                <ul className="productList wrap">

                         <li className="productListItem">
                            <ProductListElement  maxNumberOfStars={this.props.maxNumberOfStars} checkedStars={this.props.checkedStars}  /></li>

                </ul>
            </div>

        );
    }
}