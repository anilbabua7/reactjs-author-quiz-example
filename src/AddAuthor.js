import React from 'react'
import { Link } from 'react-router-dom'
import './AddAuthor.css'

class AddAuthor extends React.Component {
    render() {
        return <div>
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={this.props.onAddAuthor}></AuthorForm>
            <Link to="/">Go to Home Page</Link>
        </div>;
    }
}

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handAddBook = this.handAddBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handAddBook(event){
        this.setState({
            books : this.state.books.concat([this.state.bookTemp]),
            bookTemp : ''
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthor__input">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
            </div>
            <div className="AddAuthor__input">
                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
            </div>
            <div className="AddAuthor__input">
            <label htmlFor="books">Add a book:</label>
                {this.state.books.map((book)=> <p key={book}>{book}</p> ) }
                
                <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}></input>
                <input type="button" value="+" onClick={this.handAddBook}></input>
            </div>
            <input type="submit" value="Add"></input>
        </form>
    }
}

export default AddAuthor;