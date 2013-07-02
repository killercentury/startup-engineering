#!/usr/bin/env node
var fs = require('fs');
var outfile = "part2.txt";
var i, j, isPrime, max = 100;
var primes = [];
for (i = 2; primes.length <= max; i++) {
	isPrime = true;
	for (j = 2; j<i; j++) {
		if(i%j==0) isPrime = false;
	}
	if (isPrime) primes.push(i);
}
var out = primes.join();
fs.writeFileSync(outfile, out);  
console.log(out);