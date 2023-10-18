import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api_testing.blocal.co/post/limited/31489017901649',
      );

      setData(result.data);
      console.log(result.data)
    };

    fetchData();
  }, []);


  return (
    <>
    </>
  );
}

export default App;