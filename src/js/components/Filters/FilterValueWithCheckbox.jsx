import React from 'react';

export default class FilterValueWithCheckbox extends React.Component{
    render(){
        return(
            <div className="FilterValueWithCheckbox">
                <div className="elementName">
                    <input type="checkbox" /><label>{this.props.name}</label>
                </div>

                <p className="elemAmount">{this.props.amount}</p>
            </div>
        );
    }
}
