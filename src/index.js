import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Demo from './components/Demo/Demo';
import registerServiceWorker from './registerServiceWorker';
import './common.css';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
