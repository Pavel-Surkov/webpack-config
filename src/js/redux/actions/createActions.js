export const CHANGE_NAME = (name) => {
	return {
		type: 'CHANGE_NAME',
		payload: name
	};
};

export const CHANGE_WEIGHT = (weight) => {
	return {
		type: 'CHANGE_WEIGHT',
		payload: weight
	};
};

export const CHANGE_HEIGHT = (height) => {
	return {
		type: 'CHANGE_HEIGHT',
		payload: height
	};
};

const CLEAR = () => {
	return {
		type: 'CLEAR'
	};
};