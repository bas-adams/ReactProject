import React from "react";

import ChooseOrientationComponent from './Filters/ChooseOrientationComponent.jsx';
import FilterBox from './Filters/FilterBox.jsx';
import FilterValueWithCheckbox from './Filters/FilterValueWithCheckbox.jsx';
import FilterValueWithRating from './Filters/FilterValueWithRating.jsx';
import Heart from './General/Heart.jsx';
import FilterColor from './Filters/FilterColor.jsx';

import ProductCart from './Products/ProductCart.jsx';


export default class RootView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heartSelected: 'false'
        }
    }

    selectItem() {
        console.log('I am here buuu');
    }

    toggleIsSelected() {

        console.log('toggle 1 ' + this.state.heartSelected);

        var col;
        var changeState = (this.state.heartSelected === 'true'? (col = 'fill', this.state.heartSelected = 'false') : (col = 'empty', this.state.heartSelected = 'true') );
        this.setState({heartSelected: changeState});
        console.log('col ' + col);
        console.log('inside ' + this.setState({heartSelected: col}) )
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
                            <p className="subHeader">At least</p>
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

                        <FilterBox headerText="Color" onClickHandler={this.selectItem.bind(this)}>
                            <p className="subHeader">Choose color(s)</p>
                            <FilterColor />
                        </FilterBox>

                    </asside>
                    <section className="flex-item-3">
                        <ProductCart  />
                    </section>

                </div>
			</div>
		);
	}
}
