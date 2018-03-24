import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/EntryModule/EntryModuleComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
