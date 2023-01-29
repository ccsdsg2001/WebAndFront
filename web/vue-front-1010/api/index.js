import request from '@/utils/request'
export default {
    //select course and teacher
  getIndexData() {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}