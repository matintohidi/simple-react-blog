export const setLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error({ err })
    }
}

export const getLocalStorage = (key, initialValue) => {
    try {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : initialValue
    } catch (err) {
        return initialValue
    }
}