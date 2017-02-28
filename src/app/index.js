import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            header:"Showing user information"            
        }
    }

    onGreet(){
        alert("Hello tester!");
    }

    onChangeHeader(value){
        this.setState({
            header:value
        });
    }

    render() {
        var users={
            name:"Shashank",
            age:27,
            occupation:"Private Job",
            designation:"SSE",
            hobbies:["Movies","Sports"]
        };

        

        return (
            <div className="container theme-showcase">
               <Header text={this.state.header}/>
               <Home users={users} 
               greet={this.onGreet}
               onheaderChange={this.onChangeHeader.bind(this)}
               />
               <Home greet={this.onGreet} onheaderChange={this.onChangeHeader.bind(this)}/>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));