import * as React from 'react';
import { connect } from 'react-redux';
import './index.less';
import { fetchTime } from 'STORE/time/middleware';

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchTime();
    }

    render(){
        const { now } = this.props;

        const module = (
            <div className = 'home'>
                时间：{ now }
            </div>
        )

        return module
    }
}

function mapStateToProps({ time }){
    return {
        now: time.now
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchTime: () => dispatch(fetchTime())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)