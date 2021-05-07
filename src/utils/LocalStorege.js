export default {
  read: (key) => {
    const data = localStorage.getItem(key)

    if (data) {
      return JSON.parse(data)
    } else {
      return undefined
    }
  },
  write: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
