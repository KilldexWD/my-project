'use strict';

// 1. Random arr sort

const inp = [1,2,3,4,5,6,7,8,9,10];

const shuffle = function(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let tmp = arr[i];
		let rnd = Math.floor(Math.random() * (i - 1));

		arr[i] = arr[rnd];
		arr[rnd] = tmp;
	}

	return arr;
}

for (let i = 0; i < 10; i++) {
	console.log(shuffle(inp).join(', '));
}

// 2. Palindrome

const str = 'abba';

function palindrome(str) {
	str = str.toLowerCase().replace(/\s/g, '')
	return str === str.split('').reverse().join('')
}

console.log(palindrome(str));


// 3. Decimal Palindrome v.1. (Type conversions)

const num = 121;

function palindromeNum(x) {
	if (x < 0) return false;
	if (x % 10 === 0) return false;
	if (x < 10) return true;

	let str = String(num);
	str = str.split('').reverse().join('')

	return +str === x
}

console.log(palindromeNum(num));



// 3. Decimal Palindrome v.2

const inp1 = 121,
	inp2 = -121,
	inp3 = 10;

function deciamalPalindrome(x) {
	if (x < 0) return false
	if (x % 10 === 0) return false
	if (x < 10) return true

	let rev = 0; // 1

	while (x > rev) {
		rev *= 10;
		rev += x % 10
		x = Math.trunc(x / 10);
	}

	return x === rev || x === Math.trunc(rev / 10);
}

console.log(deciamalPalindrome(inp1));
console.log(deciamalPalindrome(inp2));
console.log(deciamalPalindrome(inp3));




// 4. FizzBuzz

const numFB = 22

function fizzBuzz(num) {
	for (let i = 0; i < num; i++) {
		if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
		else if (i % 3 === 0) console.log('Fizz');
		else if (i % 5 === 0) console.log('Buzz');
		else console.log(i);
	}
}

fizzBuzz(numFB);



// 5. Find Vowels v.1 Classic

const vowels = ['a', 'e', 'i', 'o', 'u'];

function findVowels(str) {
	let count = 0;

	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) count++
	}

	return count;
}

console.log(findVowels('hello'));


// 5. Find Vowels v.2 Regular expression

function vowelsReg(str) {
	const matched = str.match(/[aeiou]/gi)
	return matched ? matched.length : 0;
}

console.log(vowelsReg('string'));



// 6. Annagramma. Classic method

function anam(str1, str2) {
	str1 = str1.toLowerCase().trim()
	str2 = str2.toLowerCase().trim()

	for (let char of str2) {
		if (str1.includes(char) && str1.length === str2.length) return true
		else return false
	}
}

console.log(anam('friend', 'Finder'));
console.log(anam('hello', 'bye'));

// 6. Annagramma. Hesh map

function buildCharObject(str) {
	const charObj = {};
	str = str.toLowerCase().replace(/[^\w]/g);

	for (let char of str) {
		charObj[char] = charObj[char] + 1 || 1
	}

	return charObj;
}

function anamAdvanced(str1, str2) {
	const charA = buildCharObject(str1);
	const charB = buildCharObject(str2);

	if (Object.keys(charA).length !== Object.keys(charB).length) return false;

	for (let char in charA) {
		if (charA[char] !== charB[char]) return false;
	}

	return true;
}


console.log(buildCharObject('friend'));

console.log(anamAdvanced('friend', 'fInder'));


// 6. Annagramma. One line

const anagram = (a,b) => [...a.toLowerCase()].sort().join('') === [...b.toLowerCase()].sort().join('');

console.log(anam('frieend', 'feInder'));


// 7. Fibonacci. Classic Method

function fibonacci(num) {
	const res = [0, 1]

	for (let i = 2; i <= num; i++) { 
		const prev1 = res[i-1], prev2 = res[i-2];

		res.push(prev1 + prev2)
		res
	}

	return res[num];
}

console.log(fibonacci(7));

// 7. Fibonacci. short Method

function fibonacciShort(num) {
	let a = 1, b = 1;

	for (let i = 3; i <=num; i++) {
		[a, b] = [b, a + b]
	}

	return b;
}

console.log(fibonacciShort(9));


// 7. Fibonacci. Recursive Method

function fibRec(num) {
	if (num < 2) return num;

	return fibRec(num - 1) + fibRec(num - 2);
}

console.log(fibRec(8));

const classNames = ['header', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link', 'link'];

let classNameCount = {}

for (let i = 0; i < classNames.length; i++) {
	classNameCount[classNames[i]] ? classNameCount[classNames[i]] += 1 : classNameCount[classNames[i]] = 1;
}
let res = Object.keys(classNameCount).sort((a,b) => classNameCount[b] - classNameCount[a]);

console.log(res);



function sortClasses(classes) {
	let filterClasses = classes.filter((clazz, i) => {
		return classes.indexOf(clazz) === i
	})

	return filterClasses;
}

console.log(sortClasses(classNames));


// 9. Currency

const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000]
]

const result = {}

input.forEach(item => {
	let [currency, type, amount] = item; 
	if (!result[currency]) result[currency] = [0, 0];

	result[currency][type === 'buy' ? 0 : 1] += amount;
})

console.log(result);


// 10. Get minimum value

function minimum(a, b) {
	return a < b ? a : b
}

console.log(minimum(2, 3));




// 11. markStringEnds

function markStringEnds(str) {
	let arr = [];

	let firstWord = str.slice(1).replace(/^/, str[0].toUpperCase())
	let lastWord = str.slice(0, -1).replace(/$/, str[str.length - 1].toUpperCase())

	arr.push(firstWord, lastWord)

	return arr
}

console.log(markStringEnds("lol"));


// All prime numbers, using nested loop

function getPrimesLoop(num) {
	const res = []

	nextPrime: for (let i = 2; i <= num; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) continue nextPrime;
		}

		res.push(i)
	}
	return res;
}

console.log(getPrimesLoop(12));




// uniqueInOrder


const uniqueInOrder = function(iterable){
	if (typeof iterable === 'sting') iterable = iterable.split('')
	const newArr = []

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i] !== iterable[i+1]) newArr.push(iterable[i])
	}

	return newArr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD') );
console.log(uniqueInOrder([1,2,2,3,3])  );

const uniq = iter => [...iter].filter((item, i) => item !== iter[i - 1]);

console.log(uniq('AAAABBBCCDAABBB'));


// Find The Parity Outlier

function findOutlier(integers) {
	let odd = 0, even = 0 

	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) even++
		else odd++
	}

	if (even > odd) {
		return +integers.filter(item => item % 2 !== 0).join()
	} else {
		return +integers.filter(item => item % 2 === 0).join()
	}
}

function outlier(int) {
	let even = int.filter(item => item % 2 === 0)
	let odd = int.filter(item => item % 2 !== 0)

	return even.length == 1 ? even[0] : odd[0]
}

console.log(outlier([2,3,5,7,9]));
console.log(outlier([2,4,6,3,2,10]));




// Your order, please

function order(words){
	if (words === "") return "empty input should return empty string"
	let nums = words.match(/\d/g).sort();
	words = words.split(' ');
	let newStr = []

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < words.length; j++) {
			if (nums[i] !== words[j].match(/\d/g).join()) continue
			else newStr.push(words[j])
		}
	}

	return newStr.join(' ');
}


console.log(order("4of Fo1r pe6ople g3ood th5e the2"))


const orderOneLine = words => words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');



function splitStrings(str) {
	str = str.split('')
	if (str.length % 2 !== 0) str.push('_')
	let newArr = []

	for (let i = 0; i < str.length - 1; i++) {
		let concat = str[i] + str[i+1];
		
		newArr.push(concat)
	}

	newArr = newArr.filter((item, i) => {
		if (i % 2 === 0) return item
	})


	return newArr
}

console.log(splitStrings('abcde'));


// RGB to HEX 

function rgb(r, g, b){
	r > 255 ? r = 255 : r = r
	g > 255 ? g = 255 : g = g
	b > 255 ? b = 255 : b = b

	r < 0 ? r = 0 : r = r
	g < 0 ? g = 0 : g = g
	b < 0 ? b = 0 : b = b

	r < 16 ? r = 0 + r.toString(16) : g
	g < 16 ? g = 0 + g.toString(16) : g
	b < 16 ? b = 0 + b.toString(16) : b

	if (r === 0 & g === 0 & b === 0) return '000000'

	r = r.toString(16)
	g = g.toString(16)
	b = b.toString(16)

	console.log(g < 16 ? 0 + g.toString(16) : g);

	let res = (r+g+b).toUpperCase()

	return (res)
}

console.log(rgb(153,13,69));



function getTipsRating(amount) {
	if (amount === 0) return 'terrible'
	else if (amount >= 1 && amount <= 10) return 'poor'
	else if (amount >= 11 && amount <= 20) return 'good'
	else if (amount >= 21 && amount <= 50) return 'great'
	else if (amount > 50) return 'excellent'
}
  
console.log(getTipsRating(1));


function getLargestExpressionResult(a, b) {
	let result = a + b
	if ((a - b) > result) result = a - b
	if ((a * b) > result) result = a * b
	if ((a / b) > result) result = a / b
  
	return result;
  }

  console.log(getLargestExpressionResult(1, 2));


function getDrinksWithStep(numberOfGuests, step) {
	let count = 0;
	for (let i = 1; i <= numberOfGuests; i = i + step) {
		count += i
	}

	return count
}

console.log(getDrinksWithStep(5, 3) );


// Bank deposit

function calculateProfit(amount, percent, period) {
	percent /= 100
	let result = amount;

	for (let i = 1; i <= period; i++) {
		result += result * percent
	}

	const profit = result - amount;
	return Math.floor(profit)
}

console.log(calculateProfit(12500, 3, 12));