
# Node Date Between Util Project 

## Summary

This is just designed to help to handle date between start date and end date.

## Date List Between StartDate and EndDate Util

This module is handle getting date list between startDate and endDate.

```js
const betweenDateUtil = require('./index').BetweenDateUtil;

## getBetweenDates (startDate, endDate)
## -> This function is get dates between start date and end date except of Saturday and Sunday
console.log(betweenDateUtil.getAllDateListBetweenDates('2020-10-01', '2020-10-10'));

```

---

## Date List Between StartDate and EndDate Except Of Working Date 

This module is handle getting date list between startDate and endDate except of working date.

```js
const betweenDateUtil = require('./index').BetweenDateUtil;

## getBetweenDates (startDate, endDate)
## -> This function is get dates between start date and end date except of Saturday and Sunday
console.log(betweenDateUtil.getWorkingDateListBetweenDates('2020-10-01', '2020-10-10'));

```

