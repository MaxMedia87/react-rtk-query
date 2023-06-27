import { useState } from 'react';
import './App.css';
import { useGetGoodsQuery } from './redux'

function App() {
  const [coutn, setCount] = useState('');
  const {data = [], isLoading} = useGetGoodsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <ul>
        {data.map(
          (item) => (
            <li key={item.id}>
              {item.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
