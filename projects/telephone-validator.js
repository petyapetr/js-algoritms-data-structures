function telephoneCheck(str) {
	str = str.trim();

	if (/[^\s\d()-]/.test(str)) {
		return false;
	}

	if (/[\(\)]/.test(str)) {
		if (!/^(1\s*)*\(\d{3}\)(?!.*[\(\)])/.test(str)) {
			return false;
		}
	}

	const dashRes = str.split("-");
	if (dashRes.length > 3) {
		return false;
	}

	str = str
		.split("")
		.filter((symbl) => /\d/.test(symbl))
		.join("");

	switch (str.length) {
		case 10: {
			return true;
		}
		case 11: {
			console.log(str[0]);
			if (str[0] === "1") {
				return true;
			}
			return false;
		}
		default:
			return false;
	}
}

// true
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1	(555) 555-5555"));
// console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1(555)555-5555"));
// console.log(telephoneCheck("1 555 555 5555"));
// console.log(telephoneCheck("1 456 789 4444"));

// false
console.log(telephoneCheck("555-5555"));
// console.log(telephoneCheck("5555555"));
// console.log(telephoneCheck("1 555)555-5555"));
// console.log(telephoneCheck("123**&!!asdf#"));
// console.log(telephoneCheck("55555555"));
// console.log(telephoneCheck("(6054756961)"));
// console.log(telephoneCheck("2 (757) 622-7382"));
// console.log(telephoneCheck("0 (757) 622-7382"));
// console.log(telephoneCheck("-1 (757) 622-7382"));
// console.log(telephoneCheck("2 757 622-7382"));
// console.log(telephoneCheck("10 (757) 622-7382"));
// console.log(telephoneCheck("27576227382"));
// console.log(telephoneCheck("555)-555-5555"));
// console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("11 555-555-5555"));
