import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/LandingPage/Home';
import AnimeDetail from './components/AnimeDetail/AnimeDetail';
import AnimeSearch from './components/AnimeSearch/AnimeSearch';


function App() {
  return (
    <Router>    
      <Switch> 

        <Route path="/animeDetail">
          <AnimeDetail />
        </Route>

        <Route path="/animeSearch">
          <AnimeSearch />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}


export default App;
