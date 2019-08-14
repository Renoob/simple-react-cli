import { getTime } from './actions';

export function fetchTime(){
	return (dispatch) => {
		setInterval(() => {
			dispatch(getTime({ now: new Date().getTime() }))
        }, 1000);
	}
}