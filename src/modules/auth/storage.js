
const TOKEN_ID = 'token'  

export const getLocalToken = () => localStorage.getItem(TOKEN_ID)
export const deleteLocalToken = () => localStorage.removeItem(TOKEN_ID)
export const setLocalToken = (token) => localStorage.setItem(TOKEN_ID, token)