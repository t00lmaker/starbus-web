import { routes as auth } from '../modules/auth'
import { routes as map } from '../modules/map'

/* define all routes from modules impoteds above */
export default [
  ...auth,
  ...map
]