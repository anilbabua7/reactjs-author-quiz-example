import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import {Link} from 'react-router-dom'

class Hero extends React.Component{
  render(){
    return <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by Author shown</p>
      </div>
    </div>
  }
}

function getBgColor(highlight){
  const bgcolors = {
    none : '',
    wrong : 'red',
    correct : 'green'
  }
  return bgcolors[highlight];
}

function Turn({author, books, highlight, answerSelected}){
  
    return <div className="row turn" style={{backgroundColor:getBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"></img>
      </div>

      <div className="col-6"> 
          {books.map((title) => <Book title={title} key={title} answerSelected={answerSelected}></Book>)}
      </div>

    </div>
  
}

class Book extends React.Component{
  render(){
    return <div className="answer" onClick={() => {this.props.answerSelected(this.props.title);} }>
      <h4>{this.props.title}</h4>
    </div>
  }
}

class Continue extends React.Component{
  render(){
    return <div className="row continue">
      {
        this.props.show?
        <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={this.props.onContinue}>Next Question</button>
        </div> : null
      }
    </div>
  }
}

class Footer extends React.Component{
  render(){
    return <div className="row" id="footer">
      <div className="col-12">
        <p className="text-muted credit">
          Copyrighted by Anilbabu Srikakulapu
        </p>
      </div>
    </div>
  }
}

class  AuthorQuiz extends React.Component {
  render()  {
    return <div className="container-fluid">
      <Hero/>
      <Turn {...this.props.turnData} highlight={this.props.highlight} answerSelected={this.props.answerSelected}/>
      <Continue show={this.props.highlight === 'correct'} onContinue={this.props.onContinue}/>
      <Link to="/addAuthor">Add Author</Link>
      <Footer/>
    </div>
  }
}

export default AuthorQuiz;
