import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()});

const state = {
  books : ['You will win', 'Eat that frog', 'It happened in India'],
  author : {
    name : 'Anilbabu Srikakulapu',
    imageUrl : 'images/authors/microsoft.jpg',
    imageSource : 'Internet',
    books : ['You will win', 'Eat that frog']
  },
  highlight : 'none'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz {...state} answerSelected={()=>{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
