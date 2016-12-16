import React from 'react';

export default class ItemRenderer extends React.Component{
    render(){
        return (<p key={this.props.name}>{this.props.name}</p>);
    }
}
