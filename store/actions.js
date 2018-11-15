import {
  GET_USER
} from './mutation-types'
import { getStore } from '../server/mUtils'

export default {
  async getUser({ commit }){
    let id=getStore('user_id')
    commit(GET_USER,id)
  }
}
