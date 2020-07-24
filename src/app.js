import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import moment from 'moment';
import localization from 'moment/locale/fr';
import numeral from 'numeral';
import 'numeral/locales/fr';
import { startSetArticles } from './actions/articles';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import "@pathofdev/react-tag-input/build/index.css";

moment.updateLocale('fr', localization);

numeral.locale('fr');

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
        //store.dispatch(login("HITx2EzxgpgeuO9O3ws5pUEE2KF2"));
        store.dispatch(startSetArticles()).then(() => {
            renderApp();
        });
    //     if (history.location.pathname === '/') {
    //         history.push('/');
    //     }
    // } else {
    //     store.dispatch(logout());
    //     renderApp();
    //     history.push('/');
    // }
//     }
// });