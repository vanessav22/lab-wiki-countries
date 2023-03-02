
import './App.css';
import CountriesList from './components/CountriesList';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <Header/>
    <Router>
    <Route exact path="/" component={CountriesList} />
    <Route path="/country/:id" component={CountryDetails} />
   </Router>


    </div>
  );
}

export default App;
