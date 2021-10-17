import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
    return props.user?.uid ? props.children : <Redirect to='/login' />
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProtectedRoute);