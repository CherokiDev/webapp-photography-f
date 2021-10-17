import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
    return props.user?.token ? props.children : <Redirect to='/login' />
}

const mapStateToProps = state => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(ProtectedRoute);