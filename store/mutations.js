import {
  RECORD_USER,
  OUT_USER,
  GET_USER
} from './mutation-types'
import { setStore, getStore, removeStore } from '../server/mUtils'

export  default {
  [RECORD_USER](state,info){
    state.loginInfo = info
    state.isLogin = true
    console.log(state.isLogin)
    setStore('user_id',info)
  },
  [OUT_USER](state){
    state.isLogin = false
    state.loginInfo = null
    removeStore('user_id')
  },
  [GET_USER](state,info){
    if(info){
      state.loginInfo = info
      state.isLogin = true
    }
  }
}
