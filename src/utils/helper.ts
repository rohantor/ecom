import { ProductInterface } from '../Interface'
export const FormValidator = async (obj: ProductInterface) => {
  const Errorobj = {
    title: '',
    image: '',
    description: '',
    id: '',
    url: '',
  }

  if (obj.title === '') {
    Errorobj.title = 'title can not be empty'
  }
  if (obj.image === '') {
    Errorobj.image = 'image can not be empty'
  }
  if (obj.description === '') {
    Errorobj.description = 'description  can not be empty'
  }

  if (!(await isValidImgUrl(obj.image))) {
    Errorobj.url = 'image url is  not valid'
  }
  if (
    Errorobj.url === '' &&
    Errorobj.image === '' &&
    Errorobj.description === '' &&
    Errorobj.title === ''
  ) {
    return true
  }
  return Errorobj
}

function isValidImgUrl(url: string) {
  const img = new Image()
  img.src = url
  return new Promise((resolve) => {
    img.onerror = () => resolve(false)
    img.onload = () => resolve(true)
  })
}

