//app.js
import React, { Component } from 'react'
import Todo from './Todo';

function App() {
  return (
    <div>
      <h3> App component displayed</h3>
      <Todo />
    </div>
  );
}

export default App;

/////////////////
//TODO.JS
import React from 'react'


const Todo = () => {
  return (
    <div data-testid="todo"> Hello World</div>
  )
}

export default Todo;

///////////////////////////
//Todo.test.js
import {render, screen, cleanup} from '@testing-library/react';
import Todo from './Todo';

// cleanup unmounts react trees that were mounted with render
test('should render todo component', () => {
    render(<Todo/>);
    // create a variable and include testid
const todoElement = screen.getByTestId("todo");
// makesure to check todoElement in the dom (document)
expect (todoElement).toBeInTheDocument();
})

test('text should render todo component', () => {
    render(<Todo/>);
    const todoElement = screen.getByTestId("todo");
    expect (todoElement).toHaveTextContent("Hello World");
})

test('test', () => {
    expect(true).toBe(true);
})

///////////////////////////























