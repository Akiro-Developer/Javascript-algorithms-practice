const phoneGenerator = (numbers) => {
	let format_phone_number = '(xxx) xxx-xxxx';
	let regex = /x/i;
	for(let i = 0; i <= numbers.length; i++){
		format_phone_number = format_phone_number.replace(regex,numbers[i]);
	}
	return format_phone_number;
}

console.log(phoneGenerator([1,2,3,4,5,6,7,8,9,0]));
