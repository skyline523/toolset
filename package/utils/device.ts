import { getUserAgent } from './ua'

/**
 * Checks if the code is being executed in a browser environment
 *
 * @category device
 */
export const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * Checks if the code is being executed in a server environment
 *
 * @category device
 */
export const isServer = !isBrowser

/**
 * Regular expression pattern to match mobile device user agents
 *
 * @category device
 */
export const mobileDevicesRegExp = /iPhone|iPad|iPod|android|phone|pad/i

/**
 * Check if the code is running on a mobile device
 *
 * @category device
 */
export function isMobile() {
  if (!isBrowser)
    return false
  return mobileDevicesRegExp.test(getUserAgent())
}

/**
 * Regular expression pattern to match tablet device user agents
 *
 * @category device
 */
export const tabletDevicesRegExp = /iPad|android(?!.*mobile)|tablet|kindle|silk|playbook|(windows(?!.*phone)(.*touch))|(puffin(?!.*(IP|AP|WP)))/i

/**
 * Check if the code is running on a tablet device
 * Tablet also is kind of mobile device
 *
 * @category device
 */
export function isTablet() {
  if (!isBrowser)
    return false
  if (!isMobile())
    return false
  return tabletDevicesRegExp.test(getUserAgent())
}

/**
 * Check if the code is running on a desktop device
 *
 * @category device
 */
export function isDesktop() {
  if (!isBrowser)
    return false
  return !isMobile()
}

/**
 * Regular expression pattern to match apple device user agents
 *
 * @category device
 */
export const appleDevicesRegExp = /iPhone|iPad|iPod|Mac/i

/**
 * Check if the code is running on a apple device
 *
 * @category device
 */
export function isApple() {
  if (!isBrowser)
    return false
  return appleDevicesRegExp.test(getUserAgent())
}

/**
 * Check if the code is running on a android device
 *
 * @category device
 */
export const isAndroid = /Android/i.test(getUserAgent())

/**
 * @category device
 */
interface DeviceResizeWatcherOptions {
  // 是否在页面加载就执行回调
  immediate: boolean
}

/**
 * 监听页面尺寸变化并执行回调
 *
 * @param callback - 被执行的回调函数
 *
 * @param options - 监听器的options
 *
 * @category device
 */
export function watchResize(
  callback: () => void,
  options: DeviceResizeWatcherOptions = { immediate: true },
) {
  if (!isBrowser)
    return
  if (options.immediate)
    window.addEventListener('load', callback, false)

  window.addEventListener(
    'orientationchange' in window ? 'orientationchange' : 'resize',
    callback,
    false,
  )
}
