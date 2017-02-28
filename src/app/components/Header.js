import React from "react";

export class Header extends React.Component {
    render() {
        
        return (
            <div className="jumbotron"><h1>{this.props.text}</h1></div>
        );
    }
}