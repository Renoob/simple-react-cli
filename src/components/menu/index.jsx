import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class Menu extends React.Component {
    render(){
        const module = (
            <div className = 'menu'>
                <NavLink to = '/' exact activeClassName = 'active'>首页</NavLink>
                <NavLink to = '/list' exact activeClassName = 'active'>列表</NavLink>
            </div>
        )
        
        return module
    }
}

export default Menu