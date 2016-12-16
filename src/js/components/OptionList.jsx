import React from "react";

export default class OptionList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.cokolwiek.map((items, idx) => {
                        return <li key={"option-" + idx}>{items}</li>
                    })}
                </ul>

            </div>
        )
    }
}