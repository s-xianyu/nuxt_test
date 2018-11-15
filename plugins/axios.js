import * as axios from 'axios'

let options = {}
// 需要全路径才能工作
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 2222}/api`
}

export default axios.create(options)