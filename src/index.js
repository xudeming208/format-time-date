'use strict'

const formatTime = (options = {}) => {
	let date = options.date || new Date();
	let currentdate = '';

	// 判断是否为undefined
	let isUnd = item => {
		return (item === void 0) ? true : false;
	}

	let unit = options.unit || ['年', '月', '日', '时', '分', '秒'];
	let seperator = options.seperator || [' ', ' '];

	// 设置为true、false时就为true、false，不设置时为true
	let isHour24 = !!options.isHour24 || isUnd(options.isHour24);
	let isWeekday = !!options.isWeekday || isUnd(options.isWeekday);
	let isYear = !!options.isYear || isUnd(options.isYear);
	let isMonth = !!options.isMonth || isUnd(options.isMonth);
	let isDay = !!options.isDay || isUnd(options.isDay);
	let isHours = !!options.isHours || isUnd(options.isHours);
	let isMinute = !!options.isMinute || isUnd(options.isMinute);
	let isSecond = !!options.isSecond || isUnd(options.isSecond);

	// 处理星期
	let weekday = date.getDay();
	let weekdayArr = ['日', '一', '二', '三', '四', '五', '六'];
	weekday = isWeekday ? seperator[1] + '星期' + weekdayArr[weekday] : '';

	// 获取值
	let year = isYear ? date.getFullYear() : undefined;
	let month = isMonth ? (date.getMonth() + 1) : undefined;
	let day = isDay ? date.getDate() : undefined;
	let hour = isHours ? date.getHours() : undefined;
	let minute = isMinute ? date.getMinutes() : undefined;
	let second = isSecond ? date.getSeconds() : undefined;

	// 处理日期、时间
	[year, month, day, hour, minute, second].forEach((item, index) => {
		if (isUnd(item)) {
			return;
		}
		// 小时处理
		if (index == 3) {
			// 12点时
			if (item == 0) {
				item = 12;
			}
			// 12小时制时，显示上午、下午
			if (!isHour24) {
				if (item > 12) {
					item = item - 12;
					currentdate += '下午';
				} else {
					currentdate += '上午';
				}
			}
		}
		// 小于10时，在前面补足0
		item = item.toString();
		item = item[1] ? item : '0' + item;

		// 拼接
		currentdate += item + unit[index];
		if (index == 2) {
			currentdate += seperator[0];
		}
	});
	currentdate += weekday;
	return currentdate;
};

module.exports = formatTime;