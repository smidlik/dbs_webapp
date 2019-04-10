import React, {Component} from 'react';
import ApplicationBar from './components/ApplicationBar';
import {HomePage, Patient, Result} from './pages';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div className={'Body'}>
                <ApplicationBar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route path={'/patient'} component={Patient}/>
                        <Route path={'/result/:choice'} component={Result}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
