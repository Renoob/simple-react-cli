import { getTime } from './actions';

export function fetchTime(){
	return (dispatch: Function) => {
		setInterval(() => {
			dispatch(getTime({ now: new Date().getTime() }))
        }, 1000);
	}
}