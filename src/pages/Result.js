import React from 'react';
import {resultUrl} from "../constants";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

class Result extends React.Component {

    state = {
        isFetching: true,
        result: {}
    };

    static propTypes={
      location: PropTypes.object,
      match: PropTypes.object,
      history: PropTypes.object,
    };

    componentDidMount() {
        const {match} = this.props;
        this.setState({isFetching: true});
        console.log();   //vypsání cesty
        console.log(window.location.pathname);   //vypsání cesty
        fetch(resultUrl + '?choice=' + match.params.choice)
            .then((res) => res.json())
            .then((res) => this.setState({result: res, isFetching: false}))
            .catch((e) => {
                this.setState({isFetching: false});
                console.log(e)
            })
    }

    render() {
        const {result,isFetching} = this.state;
        return (
            <div className={'Content FlexCenter'}>

                {
                    isFetching ?

                        (<h2>Načítám</h2>)
                        :
                        (<div>
                            <h2>{result.result === 'true' ? 'Správně' : 'Špatně'}</h2>
                                <p>Zvolil jsi {result.choice}</p>
                        </div>)
                }
            </div>
        );
    }
}

export default withRouter(Result);
