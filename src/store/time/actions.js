export const time = 'time';

function action(type, info = {}){
	return { type, ...info };
}

export const setTime = (info) => action(time, info);