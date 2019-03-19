// 保证数字在范围内
//  最大， 最小， 是否需要整型  
module.exports = (least, largest, isInt = true) => (num = 0) => {
  const { min, max } = Math
  if (isInt) {
    num = parseInt(num)
  }
  if( least != undefined ) {
    num = max(least, num)
  }
  if( largest != undefined ) {
    num = min(largest, num)
  }
  return num
}