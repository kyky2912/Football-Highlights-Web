import './app.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MatchesCard from './components/MatchesCard';
import MatchLive from './components/MatchLive';
import { StoreProvider } from 'easy-peasy';
import stor from './store/stor'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';

//Nicky - 03082180028
//Using Depedencies of React, Easy Peasy, react-router-dom, Axios

function App() {

  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios('https://www.scorebat.com/video-api/v1/')

      
      setData(data.data)
    }

    getData()
  }, [])

  return (
    <StoreProvider store={stor} >
      <div className="App">
        <Header />
      <Router>
        <Route path="/live" component={MatchLive}   />
        <Route    path="/" exact   >
          <MatchesCard  data={Data} />
        </Route>
      </Router>
      </div>
    </StoreProvider>
  );
}export default App;