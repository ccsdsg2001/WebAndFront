import request from '@/utils/request'

export default {
    //select by page
  getCourseList(page,limit,serachobj) {
    return request({
      url: `/eduservice/coursefront//getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: serachobj
    })
  },

  //get all subject
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  //course info
  getCourseInfo(id){
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/`+id,
      method: 'get'
    }) 
  }

}