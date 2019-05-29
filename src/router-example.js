import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return <div>
            <Router>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'order'}>Order</Link></li>
                <li><Link to={'profile'}>Profile</Link></li>
                <li><Link to={'contact'}>Contact</Link></li>
            </ul>
            <Switch>
                <Route  path='order' Component={Order}></Route>
                <Route  path='profile' Component={Profile}></Route>
                <Route  path='contact' Component={Contact}></Route>
            </Switch>
            </Router>
        </div>;
    }
}

export default Home;

export class Order extends React.Component{
    render(){
        return <div>
            <h1>You are in Order Component</h1>
        </div>;

    }
}

export class Contact extends React.Component{
    render(){
        return <div>
            <h1>You are in Contact Component</h1>
        </div>;

    }
}

export class Profile extends React.Component{
    render(){
        return <div>
            <h1>You are in Profile Component</h1>
        </div>;

    }
}