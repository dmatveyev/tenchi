import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import Content from "./component/content/Content";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <div className="bgr">
                    <Content/>
                </div>

            </div>
        </div>
    );
}

export default App;
