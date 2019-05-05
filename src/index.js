import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// cross browser compatability
// contact textarea size
var sUsrAg = navigator.userAgent, col = 0;

if (sUsrAg.indexOf("Firefox") > -1) {
col = 38;
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {

} else if (sUsrAg.indexOf("Trident") > -1) {
col = 42;

} else if (sUsrAg.indexOf("Edge") > -1) {
col = 42;

} else if (sUsrAg.indexOf("Chrome") > -1) {
col = 43.5;

} else if (sUsrAg.indexOf("Safari") > -1) {

}

ReactDOM.render(<App column = {col} />, document.getElementById('root'));
