import { TIME } from './actions';

const INITIAL_STATE = {
	now: new Date().getTime(),
};

const time = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TIME:
            return {
                ...state,
                now: action.now
            };
        default:
            return state;
    }
}

export default time