import React from 'react';

class Sum extends React.Component{
    render(){
        return <div>{this.props.a}+{this.props.b} = {this.props.a+this.props.b} </div>
    }
}

export default Sum