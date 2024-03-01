import { useState } from "react"

const useLocalStorage = (itemKey: string) => {
  const [value, setValue] = useState<string>()
  const get = () => {
    return localStorage.getItem(itemKey)
  }
  const set = (value: string) => {
    localStorage.setItem(itemKey, value)
    setValue(get() ?? "")
  }
  const remove = () => {
    localStorage.removeItem(itemKey)
    setValue(get() ?? "")
  }
  const clear = () => {
    localStorage.clear()
    setValue(get() ?? "")
  }
  return { get, set, remove, clear }
}

export default useLocalStorage;