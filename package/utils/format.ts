/**
 * Format the number to thousands separator number.
 *
 * @param number - a number
 *
 * @category format
 */
export function formatNumber(number: number) {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Format the numner to zh-cn unit number.
 * eg: 10万 20.1万 1亿
 * @param number
 */
export function formatNumberToZhCn(number: number) {
  const theThousandsDivisor = Number.parseInt((number / 10000).toFixed(1))

  if (theThousandsDivisor < 1)
    return number
  else if (theThousandsDivisor < 10000)
    return `${theThousandsDivisor}万`
  else return `${theThousandsDivisor}亿`
}

/**
 * Format the time as `yyyy-MM-dd HH:mm:ss`
 *
 * @param time - a timestamp or a date object
 *
 * @param dateOnly - true will be returns `yyyy-MM-dd`
 *
 * @category format
 */
export function formatTime(time: number | Date, dateOnly?: boolean) {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = (`0${date.getMonth() + 1}`).slice(-2)
  const day = (`0${date.getDate()}`).slice(-2)
  const hours = (`0${date.getHours()}`).slice(-2)
  const minutes = (`0${date.getMinutes()}`).slice(-2)
  const seconds = (`0${date.getSeconds()}`).slice(-2)

  const formattedDate = dateOnly
    ? `${year}-${month}-${day}`
    : `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

  return formattedDate
}
