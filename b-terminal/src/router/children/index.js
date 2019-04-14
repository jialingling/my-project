import * as pathType from '../path'
import Wait from '@/page/wait'
import IviewDemo from '@/page/iviewDemo'
import IviewForm from '@/page/iviewForm'


export default [{
  path: pathType.PATH_WAIT,
  component: Wait
}, {
  path: pathType.PATH_IVIEW,
  component: IviewDemo
}, {
  path: pathType.PATH_IVIEW_FORM,
  component: IviewForm
}]