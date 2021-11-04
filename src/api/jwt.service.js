const key = 'PAVELON'
const storeItem = (item, type) => localStorage.setItem(`${key}-${type}`, item)
const getItem = (type) => localStorage.getItem(`${key}-${type}`)
const destroyItem = (type) => localStorage.removeItem(`${key}-${type}`)

export default { storeItem, getItem, destroyItem }
