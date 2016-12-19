import React from "react";

export default class Stars extends React.Component{



    render(){

        var fillStarTemp = [],
            notFillStarTemp = [];

        for (var i = 0; i < this.props.fillStar; i++) {
            fillStarTemp.push(i);
        }

        for (var i = 0; i < this.props.notFillStar; i++) {
            notFillStarTemp.push(i);
        }

        return(
            <div className="stars">
                <div><ul>
                    {fillStarTemp.map((item, idx) => {
                        return <li key={"opt-" + idx}><img src="img/start_filled.png" alt=""/></li>
                    })}
                    {notFillStarTemp.map((item, idx) => {
                        return <li key={"opt-" + idx}><img src="img/start_blank.png" alt=""/></li>
                    })}
                </ul></div>
            </div>
        );
    }





}

