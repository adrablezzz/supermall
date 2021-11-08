import axios from "axios";

//最佳方式 instance本身就是Promise
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  //2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })
  //2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送真正的网络请求
  return instance(config)
}

//基本方式01
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }

//基本方式02
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }

//Promise方式 
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
//实际上axios的instance实例就是Promise,所以直接返回instane就可以,从而产生最佳方式