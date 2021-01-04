import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../../components/Logout/Logout';
import back from '../../../img/return150px.png';
import DataTable from 'react-data-table-component';
import { connect } from 'react-redux';

const Users = (props) => {

    const allUsers = [
        {
            name: 'Nombre',
            selector: 'firstname',
            sortable: true
        },
        {
            name: 'Apellidos',
            selector: 'lastname',
            sortable: true
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true
        },
        {
            name: 'Teléfono',
            selector: 'phone',
            sortable: true
        },
        {
            name: 'Código Postal',
            selector: 'postalcode',
            sortable: true
        },
        {
            name: 'Ciudad',
            selector: 'city',
            sortable: true
        }
    ]

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    const customStyle = {
        cells: {
            style: {
                display: 'flex',
                color: 'blue'

            }
        }
    }

    return (
        <div className="main">
            <div className="submenu">
                <Link to="/adminprofile">
                    <img className="back" src={back} alt="volver" />
                </Link>
                <Logout />
            </div>
            <h4>Lista de clientes</h4>
            <DataTable
                    columns={allUsers}
                    data={props.users}
                    pagination
                    paginationComponentOptions={paginationOptions}
                    fixedHeader
                    fixedHeaderScrollHeight="20em"
                    customStyles={customStyle}
                />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(Users);