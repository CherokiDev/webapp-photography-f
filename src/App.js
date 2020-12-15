import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
