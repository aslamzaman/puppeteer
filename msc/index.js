const data1 = require('./upcoming');
const data2 = require('./upcoming_1');
const data3 = require('./upcoming_2');



const checkData = data2.map(item=>{
	const matchData = data3.find(d => d.url === item.url);
	return matchData.rating === item.rating ? null:item.url;
})

const result = checkData.filter(item=>item);
console.log(result);