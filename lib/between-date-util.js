'use strict'

const moment = require('moment');

module.exports = class BetweenDateUtil {
    // constructor(생성자)
    constructor() {

    }

    getBetweenDates(startDate, endDate) {
        const dateArray = [];
        let newStartDate = moment(startDate);
        const newEndDate = moment(endDate);
        while (newStartDate <= newEndDate) {
            const dayNumber = newStartDate.day();
            // 시작 날짜로 부터 증가 된 날짜가 월~금 인지 체크 한다.
            if (dayNumber > 0 && dayNumber < 6) {
                // 만약, 월~금 이면 List 추가 한다.
                dateArray.push(moment(newStartDate).format('YYYYMMDD'));
            }
            // 시작 날짜에 하루를 더한다.
            newStartDate = moment(newStartDate).add(1, 'days');
        }
        return dateArray;
    }
}
