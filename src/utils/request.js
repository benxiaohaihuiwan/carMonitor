import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import httpCode from '../api/httpCode'
import httpMsg from '../api/httpMsg'
const CancelToken = axios.CancelToken

let cancel, promiseArr = {}

// 创建axios实例
const service = axios.create({
	//baseURL: '/api', // api的base_url
	timeout: 15000, // 请求超时时间
	headers: {

		//  'Content-Type': 'application/x-www-form-urlencoded',
		//  'X-Requested-With': 'XMLHttpRequest'
	}
})

//请求拦截器
service.interceptors.request.use(config => {
	// Do something before request is sent
	//if (store.getters.token) {
	//  config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
	//}

	//发起请求时，取消掉当前正在进行的相同请求

	//	if(promiseArr[config.url]) {
	//		promiseArr[config.url]('操作取消')
	//		promiseArr[config.url] = cancel
	//	} else {
	//		promiseArr[config.url] = cancel
	//	}

	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
	//response => response,
	/**
	 * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
	 * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
	 */
	//	  const res = response.data;
	//	     if (res.code !== 20000) {
	//	       Message({
	//	         message: res.message,
	//	         type: 'error',
	//	         duration: 5 * 1000
	//	       });
	//	       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
	//	       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
	//	         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
	//	           confirmButtonText: '重新登录',
	//	           cancelButtonText: '取消',
	//	           type: 'warning'
	//	         }).then(() => {
	//	           store.dispatch('FedLogOut').then(() => {
	//	             location.reload();// 为了重新实例化vue-router对象 避免bug
	//	           });
	//	         })
	//	       }
	//	       return Promise.reject('error');
	//	     } else {
	//	       return response.data;
	//	     }

	response => {
		console.warn(response)
		const res = response.data
		console.warn(res.code)

		if(res.code === httpCode.UNAUTHORIZED.code) {

			if(response.config.headers.name == 'login') { //这边获取api 来限制登录不入全局路由
				console.warn('11111')
			} else {
				localStorage.removeItem('sessionId');
				localStorage.removeItem('userName');
				localStorage.removeItem('roleId');
				localStorage.removeItem('systemInnerRoleName');
				window.location.href = "/";
			}
			//			  location.reload()// 为了重新实例化vue-router对象 避免bug

			//                  router.replace("/");

			//			return Promise.reject('error')
		}
		return response.data;

	},
	error => {
		console.log('err' + error) // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(error)
	})

export default {
	//get请求
	get(url, param) {
		let heads = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-Requested-With': 'XMLHttpRequest',
			'jsessionid': localStorage.getItem('sessionId')
		}
		//		param.sessionId = localStorage.getItem('sessionId')
		return new Promise((resolve, reject) => {
			service({
				headers: heads,
				method: 'get',
				url,
				params: param,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => { //axios返回的是一个promise对象
				resolve(res) //resolve在promise执行器内部 
			}).catch(err => {

				console.log(err, '异常')
			})

		})
	},
	//post请求
	post(url, param, type) {
		let heads = ''
		let data = ''
		console.warn(param)
		//		param.sessionId = localStorage.getItem('sessionId')
		console.warn(qs.stringify(param));
		console.warn(JSON.stringify(param))

		if(type == 'json') {
			heads = {
				'Content-Type': 'application/json ; charset=utf-8',
				'jsessionid': localStorage.getItem('sessionId'),

			}
			data = JSON.stringify(param)
		} else {

			heads = {
				'Content-Type': 'application/x-www-form-urlencoded',
				'X-Requested-With': 'XMLHttpRequest',
				'jsessionid': localStorage.getItem('sessionId')
			}
			if(type == 'login') {
				heads.name = type
			}
			data = qs.stringify(param)

		}

		return new Promise((resolve, reject) => {
			console.error(resolve)
			service({
				headers: heads,
				method: 'post',
				url,
				data: data,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err, '异常')
				resolve(err)

			})
		})
	},

	//post 上传请求

	postImg(url, content) {
		return new Promise((resolve, reject) => {

			//1. 创建formData 利用AXIOS传递
			let formData = new FormData;
			formData.append('file', content.file);
			let heads = {
				'Content-Type': 'multipart/form-data',
				'jsessionid': localStorage.getItem('sessionId')
			}

			service({
				headers: heads,
				method: 'post',
				url,
				data: formData,
				cancelToken: new CancelToken(c => {
					cancel = c
				})
			}).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err, '异常')
				resolve(err)

			})

			//			let var_this = this;
			//			axios.post(url, formData, config).then(res => {
			//				console.error(res)
			//				resolve(res);
			//					})
			//				.catch(err=> {
			//					console.log(err, '异常')
			//					reject(err);
			//				})

		})

	},
	//这边加个开关，open的时候用后台的提示语，close 用自己定义的 
	//如果自己定义的，找到的话就用自己的，没有找到就用系统的
	/**
	 * that 当前函数对象
	 * res 后台的整个数据流
	 * msgSwitch 是否使用后台的提示语
	 * msgName  msg名称 
	 * callback 回调函数
	 */
	requestResult(that, res, msgSwitch, msgName, callback) {
		console.warn(that)
		let types = '';
		let msg = '';
		if(msgSwitch == 'open') {
			msg = res.msg
		} else if(msgSwitch == 'openSuccess') {
			if(res.code == httpCode.OK.code) {
				if(httpMsg[res.code][msgName]) {
					msg = httpMsg[res.code][msgName]
				} else {
					msg = res.msg
				}
			} else {
				msg = res.msg
			}
		} else {
			if(httpMsg[res.code][msgName]) {
				msg = httpMsg[res.code][msgName]
			} else {
				msg = res.msg
			}

		}
		if(res.code == httpCode.OK.code) {
			callback()
			types = 'success'
		} else {
			types = 'error'
		}
		that.$message({
			message: msg,
			type: types
		});

	},
	/**
	 * 表单验证方法
	 * @param {Object} res
	 * @param {Object} msgName
	 * @param {Object} callback
	 */
	requestVerification: function(res, msgName, callback) {
		let msg = '';
		if(res.code == httpCode.OK.code) {
			callback()
		} else {
			if(httpMsg[res.code][msgName]) {
				msg = httpMsg[res.code][msgName]

			} else {
				msg = res.msg
			}
			callback(msg)
		}

	}

}