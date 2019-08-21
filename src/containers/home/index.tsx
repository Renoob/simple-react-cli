import * as React from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch  } from 'redux-thunk';
import { connect } from 'react-redux';
import './index.less';
import { fetchTime } from 'STORE/time/middleware';

interface Props {
    fetchTime: () => void,
    now: number,
}

class Home extends React.Component<Props, {}> {
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

interface time {
    time: {
        now: number
    }
}

function mapStateToProps({ time }: time){
    return {
        now: time.now
    }
}

function mapDispatchToProps (dispatch: ThunkDispatch<{}, {}, AnyAction>) {
    return {
        fetchTime: () => dispatch(fetchTime())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)