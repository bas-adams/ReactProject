import React from "react";

import ChooseOrientationComponent from './Filters/ChooseOrientationComponent.jsx';
import FilterBox from './Filters/FilterBox.jsx';
import FilterValueWithCheckbox from './Filters/FilterValueWithCheckbox.jsx';
import FilterValueWithRating from './Filters/FilterValueWithRating.jsx';



import ProductList from './ProductList.jsx';


export default class RootView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: ["one", "two", "three", "four", "five"],
            selected: "",
            isSelected : true
        }
    }

    selectItem() {
        console.log('I am here buuu');
    }


	render() {



        var fillStar = 4,
            notFillStar = 1,

        ratingFilters =[
            {maxStars: 6, maxFill: 4 , amount: 83},
            {maxStars: 5, maxFill: 2 , amount: 230}
             ],
        sizeFilters =[
            {name: "80x66mm", amount: 112},
            {name: "40x56mm", amount: 56}
            ],

        favoriteFilter = [{name: "Only Favorites", amount: "22"}],

        industryFilters =[
            {name: "All", amount: 840},
            {name: "Automotive", amount: 112},
            {name: "Fashion", amount: 83},
            {name: "Law", amount: 230},
            {name: "IT", amount: 18},
            {name: "Sport", amount: 66},
            {name: "Art", amount: 20}
            ],

        products = [
            {maxStars: 3, maxFill: 2, productName: "Automobil", productDesc: "90x50mm"},
            {maxStars: 1, maxFill: 4, productName: "Killum", productDesc: "90x50mm"},
            {maxStars: 4, maxFill: 1, productName: "Severamagenition", productDesc: "85x55mm"},
            {maxStars: 5, maxFill: 0, productName: "Abrahamoska", productDesc: "90x50mm"},
            {maxStars: 3, maxFill: 2, productName: "Fifth", productDesc: "90x50mm"},
            {maxStars: 4, maxFill: 1, productName: "Severamagenition", productDesc: "85x55mm"},
            {maxStars: 5, maxFill: 0, productName: "Abrahamoska", productDesc: "90x50mm"},
            {maxStars: 3, maxFill: 2, productName: "Fifth", productDesc: "90x50mm"},
            {maxStars: 2, maxFill: 3, productName: "Jumper", productDesc: "85x55mm"}
        ];

		return (
			<div className="RootView">
				<div className="flex-container">
                    <asside className="optionMenu">
                        <h3>Narrow results</h3>


                        <FilterBox headerText="Orientation"  onClickHandler={this.selectItem.bind(this)} >
                            <ChooseOrientationComponent />
                        </FilterBox>

                        <FilterBox headerText="Size" onClickHandler={this.selectItem.bind(this)}>
                            {sizeFilters.map((sizeFilters, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={sizeFilters.name} amount={sizeFilters.amount} />
                            }) }
                        </FilterBox>

                        <FilterBox headerText="Customer Rating" onClickHandler={this.selectItem.bind(this)} >
                            <FilterValueWithCheckbox name="85x55mm" amount="112" />
                            <FilterValueWithCheckbox name="185x155mm" amount="167" />

                        </FilterBox>

                        <FilterBox headerText="Customer Rating" onClickHandler={this.selectItem.bind(this)} >
                            <p>Header</p>
                            {ratingFilters.map((filterOption, idx) => {
                                return <FilterValueWithRating key={idx + "opt"} maxNumberOfStars={filterOption.maxStars}  checkedStars={filterOption.maxFill} amount={filterOption.amount}/>
                            }) }

                        </FilterBox>

                        <FilterBox headerText="Favorite" onClickHandler={this.selectItem.bind(this)} >
                            {favoriteFilter.map((filterOption, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={filterOption.name} amount={filterOption.amount} />
                            }) }
                        </FilterBox>

                        <FilterBox headerText="Industry" onClickHandler={this.selectItem.bind(this)}>
                            {industryFilters.map((filterOption, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={filterOption.name} amount={filterOption.amount} />
                            }) }
                        </FilterBox>

                    </asside>
                    <section className="flex-item-3">
                        {products.map(( productList, idx) => {
                            return <ProductList key={idx + "opt"} maxNumberOfStars={productList.maxStars} checkedStars={productList.maxFill} />
                        }) }

                    </section>

                </div>
			</div>
		);
	}
}
