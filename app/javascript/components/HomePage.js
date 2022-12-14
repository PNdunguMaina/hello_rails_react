import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
    <>
          <h1>Welcome to Hello Rails React app</h1>
          <p>This app uses Rails framework for backend and React for frontend</p>
          <Link to="/greeting" className="btn-primary btn">
            Greetings
          </Link>
    </>
  );
};

export default HomePage;