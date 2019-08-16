import { TIME } from './actions';

interface action {
    type: string,
    now?: number
}

const INITIAL_STATE = {
	now: new Date().getTime(),
};

const time = (state = INITIAL_STATE, action: action) => {
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