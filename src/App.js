import React, {Component} from 'react';
import NavBar from './components/NavBar';
import {HomePage, Login, CreateCompetition} from './pages';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div className={'Body'}>
                <NavBar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/createEvent'} component={CreateCompetition}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
