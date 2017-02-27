import React from "react";

export class Header extends React.Component {
    render() {
        var text = "Showing user information";
        return (
            <div className="jumbotron"><h1>{text}</h1></div>
        );
    }
}