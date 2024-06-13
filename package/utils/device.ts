import { getUserAgent } from './ua'

/**
 * Checks if the code is being executed in a browser environment
 *
 * @category device
 */
export const isBrowser = typeof window !== 'undefined'

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
