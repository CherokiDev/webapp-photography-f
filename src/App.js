import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home/Home';
import Gallery from './containers/Gallery/Gallery';
import Aboutme from './containers/Aboutme/Aboutme';
import Contact from './containers/Contact/Contact';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/aboutme" component={Aboutme} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/profile" component={Profile} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
