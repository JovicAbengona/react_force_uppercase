import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    
    onInputChange(event){
        this.setState({term: event.target.value});
    }

    render() {
        return <div><textarea onChange={this.onInputChange.bind(this)}></textarea>
        <p>OUTPUT: </p><h1>{ this.state.term.toUpperCase() }</h1>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));