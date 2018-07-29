import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/Demo/Demo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
