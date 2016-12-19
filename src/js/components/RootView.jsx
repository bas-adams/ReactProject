import React from "react";

import ChooseOrientationComponent from './ChooseOrientationComponent.jsx';
import FilterBox from './FilterBox.jsx';
import FilterValueWithCheckbox from './FilterValueWithCheckbox.jsx';
import FilterValueWithRating from './FilterValueWithRating.jsx';

import OptionList from './OptionList.jsx';

import StarRatingComponent from './StarRatingComponent.jsx';

import OptionListElement from './OptionListElement.jsx';


export default class RootView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: ["item1", "item2", "item3", "item4", "item5"],
            isAbusive: false

        }
    }

    selectItem(idx) {
        this.setState({selectedItem: idx});
    }


	render() {


        var fillStar = 4,
            notFillStar = 1,

        ratingFilters =[
            {fillStar: 4, notFillStar: 1 , amount: 83},
            {fillStar: 3, notFillStar: 2 , amount: 230},
            {fillStar: 2, notFillStar: 3 , amount: 18},
            {fillStar: 1, notFillStar: 4 , amount: 66}
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
            {fillStar: 3, notFillStar: 2, productName: "Automobil", productDesc: "90x50mm"},
            {fillStar: 1, notFillStar: 4, productName: "Killum", productDesc: "90x50mm"},
            {fillStar: 4, notFillStar: 1, productName: "Severamagenition", productDesc: "85x55mm"},
            {fillStar: 5, notFillStar: 0, productName: "Abrahamoska", productDesc: "90x50mm"},
            {fillStar: 3, notFillStar: 2, productName: "Fifth", productDesc: "90x50mm"},
            {fillStar: 2, notFillStar: 3, productName: "Jumper", productDesc: "85x55mm"}
        ];

		return (
			<div className="RootView">
				<div className="flex-container">
                    <asside className="optionMenu">
                        <h3>Narrow results</h3>

                        <FilterBox headerText="Orientation">
                            <ChooseOrientationComponent/>
                        </FilterBox>

                        <FilterBox headerText="Size">
                            {sizeFilters.map((sizeFilters, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={sizeFilters.name} amount={sizeFilters.amount} />
                            }) }
                        </FilterBox>

                        <FilterBox headerText="Customer Rating">
                            <FilterValueWithCheckbox name="85x55mm" amount="112" />
                            <FilterValueWithCheckbox name="185x155mm" amount="167" />
                        </FilterBox>

                        <FilterBox headerText="Customer Rating">
                            <p>Header</p>
                            {ratingFilters.map((filterOption, idx) => {
                                return <FilterValueWithRating key={idx + "opt"} fillStar={filterOption.fillStar}  notFillStar={filterOption.notFillStar} amount={filterOption.amount} />
                            }) }

                        </FilterBox>

                        <FilterBox headerText="Favorite">
                            {favoriteFilter.map((filterOption, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={filterOption.name} amount={filterOption.amount} />
                            }) }
                        </FilterBox>

                        <FilterBox headerText="Industry">
                            {industryFilters.map((filterOption, idx) => {
                                return <FilterValueWithCheckbox key={idx + "opt"} name={filterOption.name} amount={filterOption.amount} />
                            }) }
                        </FilterBox>

                    </asside>
                    <section className="flex-item-3">

                        <StarRatingComponent fillStar={fillStar}  notFillStar={notFillStar} />


                        <OptionList fillStar={fillStar}  notFillStar={notFillStar} productName="AutomobilTest" productDesc="90x50mm" >

                        </OptionList>
                        <div>
                            <ul>
                                {products.map((product, idx) => {
                                    return <li className="productListItem">
                                        <OptionListElement key={idx + "opt"}
                                                                 fillStar={product.fillStar}
                                                                 notFillStar={product.notFillStar}
                                                                 productName={product.productName}
                                                                 productDesc={product.productDescs}  /></li>
                                }) }



                            </ul>
                        </div>





                    </section>

                </div>
			</div>
		);
	}
}
