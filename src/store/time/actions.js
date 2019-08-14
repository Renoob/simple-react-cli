export const TIME = 'TIME';

export function getTime(info){
	return {
		type: TIME,
		...info
	}
}