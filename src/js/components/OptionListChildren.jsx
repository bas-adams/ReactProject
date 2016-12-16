import React from 'react';

export default class OptionListChildren extends React.Component{
    render(){
        return(
            <div>
                <h3>options:</h3>
                {this.props.children}
            </div>
        );
    }
}
