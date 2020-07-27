import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';

export const Header = ({ startLogin }, { isAuthenticated }) => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to="/">
                <h1>My beautiful blog</h1>
            </Link>
            <Link className="buttonCustom button--link" to="/admin">
                <p>Admin</p>
            </Link>
            <Link className="buttonCustom button--link" to="/login">
                <p>Login</p>
            </Link>
        </div>
    </div>
    </header>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);