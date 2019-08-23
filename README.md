<h1 align="center">
  format-time-date
</h1>
<br>
<p align="center">
  <a href="https://travis-ci.org/xudeming208/format-time-date"><img src="https://travis-ci.org/xudeming208/format-time-date.svg?branch=master" alt="Travis Status"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/format-time-date.svg" alt="Nodejs"></a>
  <a href="https://www.npmjs.com/package/format-time-date"><img src="https://img.shields.io/npm/v/format-time-date.svg" alt="Version"></a>
  <a href="https://npmcharts.com/compare/format-time-date?minimal=true"><img src="https://img.shields.io/npm/dm/format-time-date.svg" alt="Downloads"></a>
  <a href="https://github.com/xudeming208/format-time-date/graphs/contributors"><img src="https://img.shields.io/github/contributors/xudeming208/format-time-date.svg" alt="Contributors"></a>
  <a href="https://www.npmjs.com/package/format-time-date"><img src="https://img.shields.io/github/license/xudeming208/format-time-date.svg" alt="License"></a>
</p>

## Introduction
* 格式化时间，能够将时间格式化成自己需要的样式，示例如下：

```javascript
1、2018年05月16日 15时07分26秒 星期三
2、2018年05月16日 下午03时07分26秒 星期三
3、2018/05/16 15:07:26 星期三
4、2018-05-16 下午03时07分26秒
5、2018/05/16; 15:07:26; 星期三
6、2018年05月16日
7、2018/05/16  // 当只要返回时间是，也可以利用new Date().toLocaleDateString()方法，注意兼容性
8、15时07分26秒
9、星期三
10、etc...
```

* 原生的toLocaleString暂时还不完善，如去掉月份保留日或者去掉分钟保留秒，返回的是乱值，而且还有兼容问题，暂不考虑；

```javascript
new Date().toLocaleString('chinese', {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
```

## Usage
```javascript
const formatTime = require('format-time-date');

let date = formatTime();

console.log(date);
```

## Options

```javascript
{
    // 设置日期时间，默认为当前日期时间，如果要设置为某一个时间，可以类似：new Date('2020/06/04 20:1:23')
    date: new Date(),
    // 是否为24小时制，为false时代表为12小时制
    isHour24: true,
    // 单位，分别代表：年、月、日、时、分、秒的单位；
    unit: ['年', '月', '日', '时', '分', '秒'],
    // 分隔符，第一个是日期与时间之间的风格符，第二个是时间与星期之间的分隔符
    seperator: [' ', ' '],
    // 是否显示年
    isYear: true,
    // 是否显示月
    isMonth: true,
    // 是否显示日
    isDay: true,
    // 是否显示时
    isHours: true,
    // 是否显示分
    isMinute: true,
    // 是否显示秒
    isSecond: true,
    // 是否显示星期
    isWeekday: true
}
```