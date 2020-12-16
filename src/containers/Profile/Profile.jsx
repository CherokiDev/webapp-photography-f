import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOGOUT } from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();

    const logout = async() => {
        await axios.put('http://localhost:3005/users/logout/' + props.user?.email)
        props.dispatch({ type: LOGOUT, payload: {}});
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }

    return (
        <>
            <div>Perfil</div>
            <button onClick={logout}>Salir</button>
        </>
    )
}

export default connect()(Profile);