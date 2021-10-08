const assert = require('assert');
const n = 3, q = 2;
// n boxes of sweets
// 0 <= j <= q - 1
// 0 <= l[j] <= r[j] <= n - 1
// l[j] <= k <= r[j]
// Box i = c[i], 0 <= i <= n - 1
// c = [], l = [], v = [], r = [], n = [];

function dist_candies(c, l, r, v) {
	assert(c.constructor == Array && l.constructor == Array && r.constructor == Array && v.constructor == Array);
	const s = Array.apply(null, Array(c.length)).map(function() { return 0; });
	if(c.length != n) {
		throw new Error('The length of c does not equal to n!');
	}
	if(l.length != q) {
		throw new Error('The length of l does not equal to q!');
	}
	if(r.length != q) {
		throw new Error('The length of r does not equal to q!');
	}
	if(v.length != q) {
		throw new Error('The length of v does not equal to q!');
	}
	/* Day J  START */
	for (let j = 0; j < q; j++) {
		if(v[j] > 0) {
			for (let k = 0; k < c.length; k++) {
				if(l[j] <= k && k <= r[j]) {
					let i = 0; // reset
					while (i < v[j] && s[k] < c[k]) {
						s[k]++;
						i++;
					}
				}
			}
		}
		if(v[j] < 0) {
			for (let k = 0; k < c.length; k++) {
				console.log(`${l[j] <= k && k <= r[j]}; ${l[j]}; ${k}; ${r[j]}`);
				if(l[j] <= k && k <= r[j]) {
					let i = 0; // reset
					while (i < -1 * v[j] && s[k] > 0) {
						s[k]--;
						i++;
					}
				}
			}
		}
	}
	/* Day J END */
	return s;
}

console.log(dist_candies([10, 15, 13], [0, 0], [2, 1], [20, -11]));
