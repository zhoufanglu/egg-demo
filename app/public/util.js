/**
 * 获取当前时间 格式：yyyy-MM-dd HH:MM:SS
 */
// eslint-disable-next-line strict
const getCurrentTime = () => {
  const date = new Date();// 当前时间
  const month = zeroFill(date.getMonth() + 1);// 月
  const day = zeroFill(date.getDate());// 日
  const hour = zeroFill(date.getHours());// 时
  const minute = zeroFill(date.getMinutes());// 分
  const second = zeroFill(date.getSeconds());// 秒

  // 当前时间
  const curTime = date.getFullYear() + '-' + month + '-' + day
    + ' ' + hour + ':' + minute + ':' + second;

  return curTime;
};

/**
 * 补零
 */
function zeroFill(i) {
  if (i >= 0 && i <= 9) {
    return '0' + i;
  }
  return i;

}

// 时间戳转换方法    date:时间戳数字
function formatDate(date) {
  const dateValue = new Date(date);
  const YY = dateValue.getFullYear() + '-';
  const MM = (dateValue.getMonth() + 1 < 10 ? '0' + (dateValue.getMonth() + 1) : dateValue.getMonth() + 1) + '-';
  const DD = (dateValue.getDate() < 10 ? '0' + (dateValue.getDate()) : dateValue.getDate());
  const hh = (dateValue.getHours() < 10 ? '0' + dateValue.getHours() : dateValue.getHours()) + ':';
  const mm = (dateValue.getMinutes() < 10 ? '0' + dateValue.getMinutes() : dateValue.getMinutes()) + ':';
  const ss = (dateValue.getSeconds() < 10 ? '0' + dateValue.getSeconds() : dateValue.getSeconds());
  return YY + MM + DD + ' ' + hh + mm + ss;
}

module.exports.getCurrentTime = getCurrentTime;
module.exports.formatDate = formatDate;
