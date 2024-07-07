import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://math-visualize-backend.vercel.app/api')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>React and Node.js App</h1>
          {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </header>
      </div>
  );
}

export default App;
