import React from "react";
import { render } from "react-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            age: props.users.age,
            headertext:'Hello world!'
            
        }
       // this.increasedate = this.increasedate.bind(this);
    }

    increasedate(){
        this.setState({
            age:this.state.age+1
        });
    }

    decreasedate(){
        this.setState({
            age:this.state.age-1
        });
    }

    onchangeheaderCode(){
        this.props.onheaderChange(this.state.headertext)
    }
    

    render() {
        console.log(this.props);
        return (
            <div>
               <button onClick={this.onchangeheaderCode.bind(this)}>Change header</button>
                <div>
                    <p><strong>Name: {this.props.users.name}</strong></p>
                    <p>Age: {this.state.age} &nbsp;&nbsp;<input type="button" onClick={() =>this.increasedate()} className="btn btn-lg" value="Increase date" />&nbsp;&nbsp;<input type="button" onClick={() =>this.decreasedate()} className="btn btn-lg" value="Decrease date" /></p>
                    <p>Occupation: {this.props.users.occupation}</p>
                    <p>Designation: {this.props.users.designation}</p>
                    <p>Hobbies:
                        <ul>
                            {this.props.users.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>
                    </p>
                    <p><input type="button" className="btn btn-lg" value="Function call" onClick={this.props.greet}/></p>
                </div>
            </div>
        );
    }
}

Home.PropTypes = {
    users: React.PropTypes.object,
    greet:React.PropTypes.func
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