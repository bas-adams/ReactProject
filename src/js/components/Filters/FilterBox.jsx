import React from "react";

export default class FilterBox extends React.Component{
    render(){
        return(
            <div className="FilterBox">
                <div className="optionHeader">
                    <p className="topHeader">{this.props.headerText}</p>

                    <i  className="icon icon-cross iconClose"  onClick={this.props.onClickHandler} ></i>
                </div>
                {this.props.children}
            </div>
        );
    }
}