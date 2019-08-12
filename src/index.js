import React from 'react';
import ReactDOM from 'react-dom';
import App from 'CONTAINERS/index';

const container = document.getElementById('container');
ReactDOM.render(<App />, container);

if (module.hot) {
    module.hot.accept('CONTAINERS/index', () => ReactDOM.render(<App />, container));
}