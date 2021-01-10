import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Gallery from './containers/Gallery/Gallery';
import Comuniones from './containers/Gallery/Comuniones/Comuniones';
import Cumples from './containers/Gallery/Cumples/Cumples';
import Embarazos from './containers/Gallery/Embarazos/Embarazos';
import RecienNacido from './containers/Gallery/RecienNacido/RecienNacido';
import Seguimientos from './containers/Gallery/Seguimientos/Seguimientos';
import Aboutme from './containers/Aboutme/Aboutme';
import Contact from './containers/Contact/Contact';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './containers/Profile/Profile';
import Account from './containers/Profile/Account/Account';
import Appointments from './containers/Profile/Appointments/Appointments';
import Adminprofile from './containers/Adminprofile/Adminprofile';
import Adminappointments from './containers/Adminprofile/Adminappointments/Adminappointments'
import Adminusers from './containers/Adminprofile/Adminusers/Adminusers';
import Footer from './components/Footer/Footer';
import AppWhatsapp from './components/AppWhatsapp/AppWhatsapp';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/gallery/comuniones" component={Comuniones} exact />
        <Route path="/gallery/cumples" component={Cumples} exact />
        <Route path="/gallery/embarazos" component={Embarazos} exact />
        <Route path="/gallery/reciennacido" component={RecienNacido} exact />
        <Route path="/gallery/seguimientos" component={Seguimientos} exact />
        <Route path="/aboutme" component={Aboutme} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <ProtectedRoute>
          <Route path="/profile" component={Profile} exact />
          <Route path="/profile/account" component={Account} exact />
          <Route path="/profile/appointments" component={Appointments} exact />
          <Route path="/adminprofile"component={Adminprofile} exact />
          <Route path="/adminprofile/adminappointments" component={Adminappointments} exact />
          <Route path="/adminprofile/adminusers" component={Adminusers} exact />
        </ProtectedRoute>
      </Switch>
      <AppWhatsapp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
