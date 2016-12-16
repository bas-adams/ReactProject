import React from "react";

import ChooseOrientationComponent from './ChooseOrientationComponent.jsx';
import OptionBox from './OptionBox.jsx';
import OptionElements from './OptionElements.jsx';

import Comments from './Comments.jsx';
import OptionList from './OptionList.jsx';

import OptionListChildren from './OptionListChildren.jsx';
import ItemRenderer from './ItemRenderer.jsx';

export default class RootView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: ["item1", "item2", "item3", "item4"],

            isAbusive: false,

            headerIconUrl: "img/close_icon.png",
            headerIconAlt: "close",

            note: "90x50mm",
            amount: "112"

        }

    }

	render() {
		return (
			<div className="RootView">
				<div className="flex-container">
                    <asside className="optionMenu">
                        <h3>Narrow results</h3>

                        <OptionBox headerText="Orientation" headerIconUrl={this.state.headerIconUrl} headerIconAlt={this.state.headerIconAlt}>
                        <ChooseOrientationComponent/>
                        </OptionBox>

                        <OptionBox headerText="Size" headerIconUrl={this.state.headerIconUrl} headerIconAlt={this.state.headerIconAlt}>
                            <OptionElements note={this.state.note} amount={this.state.amount} />
                        </OptionBox>

                        <OptionBox headerText="Customer Rating" headerIconUrl={this.state.headerIconUrl} headerIconAlt={this.state.headerIconAlt}>
                            <OptionElements note="85x55mm" amount="112" />
                            <OptionElements note="185x155mm" amount="167" />
                        </OptionBox>

                        <OptionBox headerText="Favorite" headerIconUrl={this.state.headerIconUrl} headerIconAlt={this.state.headerIconAlt}>
                            <OptionElements note="Only favorites" amount="22" />
                        </OptionBox>

                        <OptionBox headerText="Industry" headerIconUrl={this.state.headerIconUrl} headerIconAlt={this.state.headerIconAlt}>
                            <OptionElements note="All" amount="840" />
                            <OptionElements note="Automotive" amount="112" />
                            <OptionElements note="Fashion" amount="83" />
                            <OptionElements note="Law" amount="230" />
                            <OptionElements note="IT" amount="18" />
                            <OptionElements note="Sport" amount="66" />
                            <OptionElements note="Art" amount="20" />
                        </OptionBox>

                    </asside>
                    <div className="flex-item-3">
                        <Comments author="Anne Droid" bodyText="Something stranege" />
                        <OptionListChildren>
                            <ItemRenderer name="one" />
                            <ItemRenderer name="two" />
                            <ItemRenderer name="three" />
                            <ItemRenderer name="four" />
                        </OptionListChildren>
                    </div>

                </div>
			</div>
		);
	}
}
