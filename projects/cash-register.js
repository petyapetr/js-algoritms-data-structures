function checkCashRegister(price, cash, cid) {
	// store
	const dictionary = new Map([
		["PENNY", 0.01],
		["NICKEL", 0.05],
		["DIME", 0.1],
		["QUARTER", 0.25],
		["ONE", 1],
		["FIVE", 5],
		["TEN", 10],
		["TWENTY", 20],
		["ONE HUNDRED", 100],
	]);

	// utils
	function sortCid(arr) {
		return arr
			.map((el) => {
				const denomination = dictionary.get(el[0]);
				el.push(denomination);
				return el;
			})
			.sort((currency_1, currency_2) => currency_1[2] - currency_2[2]);
	}
	function sortChange(obj) {
		console.log(obj)
		let {status, change} = obj
		if (status === "OPEN") {
			change = change.filter((el) => el[1] !== 0)
		}

		return change
		.sort(([name1, amount1, denomination1], [name2, amount2, denomination2]) => {
			
			if (amount1 - amount2 !== 0) {
				return amount2 - amount1;
			}
			return denomination1 - denomination2;
		})
		.map((el) => el.splice(0, 2))
	}
	function getChange(bill, cid) {
		const change = [];
		let status = "OPEN";

		for (let i = cid.length - 1; i >= 0; i--) {
			const currency = cid[i];
			const [name, amount, denomination] = currency;
			
			const denominator = Math.floor(bill / denomination);
			const sum = (amount - bill) <= 0 ? amount : denominator * denomination;
			change.push([name, sum, denomination]);
			
			const rest = amount - sum;
			bill = Math.round((bill - sum) * 100) / 100;

			if (bill === 0) {
				if (rest > 0) {
					status = "OPEN";
				}

				if (rest === 0) {
					status = "CLOSED";
				}
				return {status, change};
			}

			if (i === 0) {
				return {status: "INSUFFICIENT_FUNDS", change: []};
			}
		}
	}

	// logic
	const sortedCid = sortCid(cid);
	const bill = cash - price;
	const result = getChange(bill, sortedCid);
	const sortedChange = sortChange(result);
	result.change = sortedChange;

	return result;
}

// const res1 = checkCashRegister(19.5, 20, [
// 	["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100],
// ]);
// console.log(res1)
// {status: "OPEN", change: [["QUARTER", 0.5]]}

// const res2 = checkCashRegister(3.26, 100, [
// 	["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100],
// ]);
// console.log(res2)
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}


const res3 = checkCashRegister(19.5, 20, [
	["PENNY", 0.5],
	["NICKEL", 0],
	["DIME", 0],
	["QUARTER", 0],
	["ONE", 0],
	["FIVE", 0],
	["TEN", 0],
	["TWENTY", 0],
	["ONE HUNDRED", 0],
]);
console.log(res3) 
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}