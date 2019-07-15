import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import logo from "./logo.svg";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PostForm />
        <hr />
        <Posts />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Provider>
    
  );
}

export default App;
