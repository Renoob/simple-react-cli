import React from 'react';
import styles from  './index.module.less';

class List extends React.Component {
    render(){
        const module = (
            <div className = { styles['list'] }>
                列表
            </div>
        )

        return module
    }
}

export default List