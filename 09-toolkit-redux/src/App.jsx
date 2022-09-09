import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByTen,
} from './store/slices/counter/index';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>count is {counter}</p>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <button onClick={() => dispatch(incrementByTen(10))}>
          Incrementar x 10
        </button>
      </div>
    </div>
  );
}

export default App;
