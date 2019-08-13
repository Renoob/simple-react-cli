import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "STORE/configStore";
import Main from './main';

const App = () => (
    <Provider store = { store }>
        <HashRouter>
            <Main />
        </HashRouter>
    </Provider>
)

export default App