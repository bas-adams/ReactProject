import React from 'react';

export default class FilterValueWithCheckbox extends React.Component{
    render(){
        return(
            <div className="FilterValueWithCheckbox">
                <div className="flex-item-4">
                    <input type="checkbox" /><label>{this.props.name}</label>
                </div>

                <p className="flex-item-6">{this.props.amount}</p>
            </div>
        );
    }
}
