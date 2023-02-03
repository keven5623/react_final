import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';

//讀取local的user,存到內存中
const user = storageUtils.getUser();
memoryUtils.user = user;

ReactDOM.render(<App/>,document.getElementById('root'))

