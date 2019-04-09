
import React, { Component } from 'react';
import {HomePage,SignInPage} from "./pages";
import {BrowserRouter,Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={'/'} component={HomePage}/>
                    <Route path={'/signin'} component={SignInPage}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
