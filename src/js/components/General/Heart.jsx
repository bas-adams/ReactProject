import React from 'react';

export default class Heart extends  React.Component{

    render(){


        var col = this.props.qwerty;
        console.log('in heart ' + col);

        return(
            <div className="Heart">
                <span className="icon-heart fill" onClick={this.props.onClickHandler}></span>
            </div>
        );
    }
}
