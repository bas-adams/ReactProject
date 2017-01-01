import React from 'react';

export default class StarRatingComponent extends React.Component{


    howManyStar(maxStars, yellowstars){

        var stars = [];
        for(var i = 0; i < maxStars; i++ ){
            stars. push(i < yellowstars? "yellow" : "normal");
        }
        return stars;
    }


    render(){

        var maxStars = this.props.maxNumberOfStars;
        var yellowstars = this.props.checkedStars;

        return(
            <div className="StarRatingComponent">
                <ul>
                    {this.howManyStar(maxStars, yellowstars).map((star, idx) => {
                        return <li key={idx + "opt"}><span className={"icon-star-empty " + star} ></span></li>
                    })}
                </ul>
            </div>
        );
    }
}
