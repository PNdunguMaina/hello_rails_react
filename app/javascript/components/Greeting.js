import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGreeting } from '../redux/greetings/greeting';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <div className="container py-5 g-3">
      <Link to="/" className="btn-primary btn">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </Link>

      <h2 className="mt-3">{greetings}</h2>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(fetchGreeting());
        }}
      >
        Show Greeting
      </button>
    </div>
  );
}

export default Greeting;
