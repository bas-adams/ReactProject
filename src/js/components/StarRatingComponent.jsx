import React from 'react';

export default class StarRatingComponent extends React.Component{


    howManyStar(maxStars, yellowstars){

        var stars = [],
            color;
        for(var i = 1; i <= maxStars; i++ ){
            if( i <= yellowstars ){
                stars.push(i);
            }
        }
        return stars;
    }


    render(){

        var maxStars = this.props.maxNumberOfStars;
        var yellowstars = this.props.checkedStars;

       console.log('maxNumberOfStars: ' + maxStars);
       console.log('checkedStars: ' + yellowstars);
        return(
            <div className="StarRatingComponent">
                <ul>
                    {this.howManyStar(maxStars, yellowstars).map((elem, idx) => {
                        return <li key={idx + "opt"}><i className="icon icon-star starIcon"></i></li>
                    })}
                </ul>
            </div>
        );
    }
}

