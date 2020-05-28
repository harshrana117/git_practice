const myPromise = new Promise((resolve, reject) => {
	if(true) {
		setTimeout(() => {
			resolve('I have succeeded');
		}, 1000);
	} else {
		reject('I will try again');
		}
});

myPromise.then(value => console.log(value)).catch(rejectValue => console.log(rejectValue));

