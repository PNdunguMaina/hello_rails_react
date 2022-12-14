import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greeting';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <div>
      <h1>Greeting</h1>
      <h2>{greetings}</h2>
      <button
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
