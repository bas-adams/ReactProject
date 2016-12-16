import React from "react";

import OptionHeader from './OptionHeader.jsx';

export default class OptionBox extends React.Component{
    render(){
        return(
            <div className="optionBox">
                <OptionHeader headerText={this.props.headerText} headerIconUrl={this.props.headerIconUrl} headerIconAlt={this.props.headerIconAlt} />
                {this.props.children}
            </div>
        );
    }
}