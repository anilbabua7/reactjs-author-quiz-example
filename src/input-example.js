import React from 'react'
import ReactDOM from 'react-dom'

export class InputExample extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : ""
        }
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render(){
        return <form>
            <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.onFieldChange} />
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.onFieldChange} />
        </form>
    }
}