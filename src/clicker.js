import React from 'react'
import ReactDOM from 'react-dom'

class Clicker extends React.Component{
    render(){
        return <div>
            <button onClick={(e) => this.props.handleClick('A')}>A</button>
            <button onClick={(e) => this.props.handleClick('B')}>B</button>
            <button onClick={(e) => this.props.handleClick('C')}>C</button>
        </div>
    }
}
export default Clicker;
//ReactDOM.render(<Clicker handleClick={(e) => alert(e)} />, document.getElementById('root'));