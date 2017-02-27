import React from "react";
import { render } from "react-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            age: props.users.age
        }
       // this.increasedate = this.increasedate.bind(this);
    }

    increasedate(){
        this.setState({
            age:this.state.age+1
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <p><strong>Name: {this.props.users.name}</strong></p>
                    <p>Age: {this.state.age} &nbsp;&nbsp;<input type="button" onClick={() =>this.increasedate()} className="btn btn-lg" value="Increase date" /></p>
                    <p>Occupation: {this.props.users.occupation}</p>
                    <p>Designation: {this.props.users.designation}</p>
                    <p>Hobbies:
                        <ul>
                            {this.props.users.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

Home.PropTypes = {
    users: React.PropTypes.object
}

Home.defaultProps = {
    users: {
        name: "Peter",
        age: 45,
        occupation: "Sales Job",
        designation: "Manager",
        hobbies: ["Music", "Books"]
    }
}