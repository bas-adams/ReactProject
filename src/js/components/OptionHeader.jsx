import React from "react";

export default class OptionHeader extends React.Component{
    render(){
        return(
            <div className="optionHeader">
                <p className="topHeader">{this.props.headerText}</p>
                <img src={this.props.headerIconUrl} alt={`${this.props.headerIconAlt}`} />
            </div>
        );
    }
}