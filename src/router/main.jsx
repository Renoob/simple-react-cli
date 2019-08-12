import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './config';

class Main extends React.Component {
    render(){
        const module = (
            <Switch>
                {
                    routerConfig.map(item => (
                        <Route 
                            key = { item.path }
                            path = { item.path }
                            component = { item.component }
                            exact = { item.exact }
                        />
                    ))
                }
            </Switch>
        )

        return module
    }
}

export default withRouter(Main)