import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Gallery from './containers/Gallery/Gallery';
import Aboutme from './containers/Aboutme/Aboutme';
import Contact from './containers/Contact/Contact';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import ProtectedRoute from './components/ProtectedRoute';
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
        <Route path="/register" component={Register} exact />
        <ProtectedRoute>
          <Route path="/profile" component={Profile} exact />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
