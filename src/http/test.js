import fly from '../utils/request'

// import qs from 'qs'
export function register () {
  return console.log(fly.post('https://yj.kiy.cn/Home/post').then((d) => {
    // 输出请求数据
    console.log('aaa' + d.data)
    // 输出响应头
    console.log('bbb' + d.header)
  }).catch(err => {
    console.log(err.status, err.message)
  }))
}
export function DDD () {
  // debugger
  return fly.get('https://www.easy-mock.com/mock/5b3b3943642a5d2cc1d9dcd6/example/test')
}
