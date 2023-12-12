const api = {}

const filesList = require.context('./', true, /index\.ts$/)
filesList.keys().forEach((route) => {
  if (route.startsWith('./index.js')) {
    return
  }
  const arr = route.split('/')
  const apiList = filesList(route)
  api[arr[1]] = apiList
})

export default api
