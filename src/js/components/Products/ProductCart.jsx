import React from 'react';

import ProductListElement from './ProductListElement.jsx';

export default class ProductCart extends React.Component{
    render(){
        var products = [
            {maxStars: 5, maxFill: 2, productName: "Automobil", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 4, productName: "Killum", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 1, productName: "Severamagenition", productDesc: "85x55mm"},
            {maxStars: 5, maxFill: 0, productName: "Abrahamoska", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 2, productName: "Fifth", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 1, productName: "Severamagenition", productDesc: "85x55mm"},
            {maxStars: 5, maxFill: 0, productName: "Abrahamoska", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 2, productName: "Fifth", productDesc: "90x50mm"},
            {maxStars: 5, maxFill: 3, productName: "Jumper", productDesc: "85x55mm"}
        ];
        return(

            <div>
                <ul className="ProductCard">
                    {products.map((productList, idx) => {
                        return (
                            <ProductListElement  key={idx + "opt"} maxNumberOfStars={productList.maxStars} checkedStars={productList.maxFill} productName={productList.productName} heartSelected={productList.heartSelected} />
                        );
                    })}
                </ul>
            </div>

        );
    }
}


