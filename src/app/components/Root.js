import React from "react";
import { render } from "react-dom";

export class Root extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}