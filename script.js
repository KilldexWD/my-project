'use strict'
const compareRobots = (robot1, robot2) => {
	const r1 = Object.entries(robot1);
	const r2 = Object.entries(robot2);

	if (r1.length !== r2.length) {
		return false;
	}

	for (let i = 1; i < r1.length; i++) {
		if (r1[i][0] !== r2[i][0] || r1[i][1] !== r2[i][1]) {
			return false;
		}
	}


	return true;
};


const charlie = { serialNo: 1, chipVer: 12};
const lordy = { serialNo: 2, chipVer: 12 };

console.log(compareRobots(charlie, lordy))


function countBoxes(boxes) {
	let map = new Map();
	const res = {};
	
	for (let i = 0; i < boxes.length; i++) {
		let curr = boxes[i];

		if (map.has(curr)) {
			res[curr] = map.get(curr) + 1
			map.set(curr, map.get(curr) + 1);
		} else {
			map.set(curr, 1);
			res[curr] = 1
		}
	}

	console.log(map)

	return res;
}

console.log(countBoxes('aaAaca31'))


function findSmallerDigits(arr) {
	const res = []

	for (let i = 0; i < arr.length; i++) {
		let count = 0
		for (let k = i; k < arr.length; k++) {
			if (arr[i] > arr[k]) {
				count++
			}
		}
		res.push(count) 
	}

	return res;
}

console.log(findSmallerDigits([1, 2, 3]))


function getProductId(url) {
	return url
		.slice(url.lastIndexOf('-p-'), url.lastIndexOf('-'))
		.replace('-p-', '')
}

console.log(getProductId('http://www.exampleshop.com/letter-p-book-stand-p-192837-11112011.html'))

let str = 'auto albom allarm big babaooy';

str = str.split(' ')
console.log(str)



function getLeaders(numbers) {
	const res = [];
	const addArr = [...numbers]

	for (let i = 0; i < numbers.length; i++) {
		const curr = addArr.shift()

		const sum  = addArr.reduce((i, sum) =>  i + sum, 0);

		if (curr > sum) {
			res.push(curr)
		}
	}

	return res;
}

console.log(getLeaders([1, 2, 3, 4, 0]))

