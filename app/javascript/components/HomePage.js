import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container p-5">
      <h1 className="">Welcome to Hello Rails React app</h1>
      <p>This app uses Rails framework for backend and React for frontend</p>
      <Link to="/greetings" className="btn-primary btn">
        Greetings
      </Link>
    </div>
  );
};

export default HomePage;
