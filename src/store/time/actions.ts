export const TIME = 'TIME';

export function getTime(info: Object){
	return {
		type: TIME,
		...info
	}
}