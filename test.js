const betweenDateUtil = require('./index').BetweenDateUtil;


console.log(betweenDateUtil.getWorkingDateListBetweenDates('2020-10-01', '2020-10-10'));
console.log(betweenDateUtil.getAllDateListBetweenDates('2020-10-01', '2020-10-10'));

const sourceDateList = betweenDateUtil.getAllDateListBetweenDates('2020-10-01', '2020-10-11');
const targetDateList = betweenDateUtil.getAllDateListBetweenDates('2020-10-11', '2020-10-20');

const retVal = betweenDateUtil.checkContainTargetDateList(sourceDateList, targetDateList);
console.log(`retVal : ${retVal}`);
