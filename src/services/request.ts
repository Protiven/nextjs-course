import { APP_URL } from '../config'

const request = async <T>(url: URL): Promise<T> => {
  const response = await fetch(APP_URL + url)
  const result = await response.json()

  return result
}

export default request
