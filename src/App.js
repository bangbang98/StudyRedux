import React, { useState } from 'react';
import './App.css';
import TodoList from './component/todoList/todoList';
import Product from './component/todoList/index';
import FoodContainer from './redux-training/containers/food-list';
import FoodDetailContainer from './redux-training/containers/food-detail';

function App() {
  return (
    <div className="App">
      <h1>STUDY REDUX REACTJS</h1>

      <h2>Menu food</h2>
      <FoodContainer />
      <hr />
      <h2>Detail food</h2>
      <FoodDetailContainer />
    </div>
  );
}

export default App;
