import React from "react";

import OptionListElement from './OptionListElement.jsx';

export default class OptionList extends React.Component {

    render() {
        return (
            <div>
                <ul className="OptionList">
                    <li className="productListItem">
                        <OptionListElement fillStar={this.props.fillStar}  notFillStar={this.props.notFillStar} productName={this.props.productName} productDesc={this.props.productDescs} />
                    </li>
                </ul>
            </div>

        )
    }
}