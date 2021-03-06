import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Application from './components/Application/Application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
