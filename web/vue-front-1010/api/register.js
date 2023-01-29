import request from '@/utils/request'
export default {

    //getcode by phone
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/`+phone,
      method: 'get'
    })
  },

  //register
  registerMember(formItem){
    return request({
        url: `/educenter/member/register`,
        method: 'post',
        data: formItem

      })
  }
}