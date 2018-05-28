import _ from 'lodash';
export const formatDate = dateStr => {
	let date = new Date(dateStr);
	const monthNames = [
		'January', 'February', 'March',
		'April', 'May', 'June', 'July',
		'August', 'September', 'October',
		'November', 'December'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return day + '-' + monthNames[monthIndex] + '-' + year;
};

export const todayStr = ()=> {
	let dt = new Date();
	let month = _.padStart(dt.getMonth()+1, 2, '0');
	return `${dt.getFullYear()}-${month}-${dt.getDate()}`;
};