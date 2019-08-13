import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.less';
import { setTime } from 'STORE/time/actions';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: new Date().getTime()
        }
    }

    componentDidMount(){
        this.timeout = setInterval(() => {
            this.props.setTime({ now: new Date().getTime() });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeout);
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

Home.propTypes = {
    now: PropTypes.number,
    setTime: PropTypes.func
}

function mapStateToProps({ time }){
    return {
        now: time.now
    }
}

export default connect(
    mapStateToProps,
    { setTime }
)(Home)