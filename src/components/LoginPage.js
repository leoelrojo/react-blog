import React from 'react';
import { render } from 'enzyme';
//import { connect } from 'react-redux';
//import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">My beautiful blog</h1>
            <p>Let's log to type some stuff</p>
            <button className="button">Login with Google</button>
        </div>
    </div>
)

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);
export default LoginPage;