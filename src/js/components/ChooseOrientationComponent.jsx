import React from "react";

export default class ChooseOrientationComponent extends React.Component{
    render(){
        return(
            <div className="ChooseOrientationComponent">
                <div className="OrientationBox">
                    <div className="layoutIcon">
                        <div className="horizontalOption"></div>
                    </div>
                    <p>horizontal</p>
                </div>
                <div className="OrientationBox">
                    <div className="layoutIcon">
                        <div className="verticalOption"></div>
                    </div>
                    <p>vertical</p>
                </div>
            </div>
        );
    }
}