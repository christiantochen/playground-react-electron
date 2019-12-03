import { connectRouter } from 'connected-react-router'
import history from './history'

const context = require.context('.', true, /reducer\.js$/)
const reducers = { router: connectRouter(history) }

context.keys().forEach(fileRelativePath => {
  reducers[fileRelativePath.replace('./', '').replace('/reducer.js', '')] = context(
    fileRelativePath
  ).default
})

export default reducers
