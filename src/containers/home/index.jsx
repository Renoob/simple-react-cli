import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.less';
import { fetchTime } from 'STORE/time/middleware';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

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

Home.propTypes = {
    now: PropTypes.number,
    fetchTime: PropTypes.func
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