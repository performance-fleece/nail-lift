import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import './fonts/CenturyOldStyleStd-Regular.otf';
import './fonts/domaine-display-condensed-test-semibold-italic.woff';
import './fonts/domaine-display-condensed-test-semibold.woff';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
