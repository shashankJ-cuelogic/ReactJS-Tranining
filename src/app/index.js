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
               <Header header={this.state.header}/>
               <Home users={users}/>
               <Home />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));