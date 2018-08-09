'use strict';

var formatTime = function formatTime() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var date = options.date || new Date();
	var currentdate = '';

	// 判断是否为undefined
	var isUnd = function isUnd(item) {
		return item === void 0 ? true : false;
	};

	var unit = options.unit || ['年', '月', '日', '时', '分', '秒'];
	var seperator = options.seperator || [' ', ' '];

	// 设置为true、false时就为true、false，不设置时为true
	var isHour24 = !!options.isHour24 || isUnd(options.isHour24);
	var isWeekday = !!options.isWeekday || isUnd(options.isWeekday);
	var isYear = !!options.isYear || isUnd(options.isYear);
	var isMonth = !!options.isMonth || isUnd(options.isMonth);
	var isDay = !!options.isDay || isUnd(options.isDay);
	var isHours = !!options.isHours || isUnd(options.isHours);
	var isMinute = !!options.isMinute || isUnd(options.isMinute);
	var isSecond = !!options.isSecond || isUnd(options.isSecond);

	// 处理星期
	var weekday = date.getDay();
	var weekdayArr = ['日', '一', '二', '三', '四', '五', '六'];
	weekday = isWeekday ? seperator[1] + '星期' + weekdayArr[weekday] : '';

	// 获取值
	var year = isYear ? date.getFullYear() : undefined;
	var month = isMonth ? date.getMonth() + 1 : undefined;
	var day = isDay ? date.getDate() : undefined;
	var hour = isHours ? date.getHours() : undefined;
	var minute = isMinute ? date.getMinutes() : undefined;
	var second = isSecond ? date.getSeconds() : undefined;

	// 处理日期、时间
	[year, month, day, hour, minute, second].forEach(function (item, index) {
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