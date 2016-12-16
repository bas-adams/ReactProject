import React from 'react';

export default class OptionElements extends React.Component{
    render(){
        return(
            <div className="optionElements">
                <div className="flex-item-4">
                    <input type="checkbox" />
                </div>
                <p key={this.props.note} className="flex-item-5">{this.props.note}</p>
                <p key={this.props.amount} className="flex-item-6">{this.props.amount}</p>
            </div>
        );
    }
}
