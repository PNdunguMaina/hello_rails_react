import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import HomePage from './components/HomePage';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
