import axios from 'axios';
import store from './store';
import router from './router'
axios.interceptors.request.use((config)=>{
  let xAuthToken = localStorage.getItem('xAuthToken');

  if(xAuthToken){
    config.headers['token'] = xAuthToken
  }else{

  }

  store.dispatch('beginLoading');
  //携带token
  return config
});
axios.interceptors.response.use((config)=>{

  if(config.data.flag === 'SESSION_INVALID'){
    router.push('/login');
    console.log(config.data);
    console.log('失效');

    return
  }
  store.dispatch('endLoading');

 // console.log(config.headers)

  //获取token,验证，跳转
  return config
})
