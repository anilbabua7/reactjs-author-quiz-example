import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'
import AddAuthor from './AddAuthor'

const authors = [
    {
        name: 'Anilbabu Srikakulapu',
        imageUrl: 'images/authors/microsoft.jpg',
        imageSource: 'Local',
        books: ['Overcome disappointmenst', 'God has got your back', 'You are more than a conqueror']
    },
    {
        name: 'Ravi Zachariahs',
        imageUrl: 'images/authors/microsoft1.jpg',
        imageSource: 'Local',
        books: ['Why Suffering?', 'Imaginary Conversation', 'Is God Dead?']
    },
    {
        name: 'Nabeel Quereshi',
        imageUrl: 'images/authors/microsoft2.jpg',
        imageSource: 'Local',
        books: ['Jesus among other gods', 'Why I believe Jesus', 'Muslim turning to Christ']
    }
];

let state = {
    turnData: getTurnData(authors),
    highlight: 'none'
}

function resetState(){
    state = {
        turnData: getTurnData(authors),
        highlight: 'none'
    }
}

function getTurnData(authors) {
    const allbooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allbooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) => title === answer)
        )
    }
}

function answerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
   console.log(answer);
    render();
}

function App(){
    return <AuthorQuiz {...state} answerSelected={answerSelected} onContinue={onContinue}/>;
}

const  AddAuthorForm = withRouter( ({history}) =>
     <AddAuthor onAddAuthor={(author) =>{
        authors.push(author);
        //console.log(authors);
        history.push('/');
    }} />
);

function onContinue(){
    console.log('On Continue has been called');
    resetState();
    render();
}

function render() {
    ReactDOM.render(
    <Router>
         <Route exact path="/" component={App} />
         <Route path="/addAuthor" component={AddAuthorForm} />
    </Router>
   , document.getElementById('root'));
}
render();

//ReactDOM.render(<Home />, document.getElementById('root'));

 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
