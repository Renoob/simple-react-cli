import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './config';
import Menu from 'COMPONENTS/menu';

class Main extends React.Component<RouteComponentProps> {
    render(){
        const module = (
            <>
                <Menu />
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
            </>
        )

        return module
    }
}

export default withRouter(Main)