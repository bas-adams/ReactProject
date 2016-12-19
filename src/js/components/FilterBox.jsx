import React from "react";

export default class FilterBox extends React.Component{
    render(){
        return(
            <div className="FilterBox">
                <div className="optionHeader">
                    <p className="topHeader">{this.props.headerText}</p>
                    <img src="img/close_icon.png" alt="close" />
                </div>
                {this.props.children}
            </div>
        );
    }
}