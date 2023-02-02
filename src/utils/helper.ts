import { ProductInterface } from '../Interface'
export const FormValidator =  async(obj: ProductInterface) => {
  const Errorobj = {
    title: '',
    image: '',
    description: '',
    url:''
  }

  if (obj.title==='')
  {
    Errorobj.title='title can not be empty'
    
    
  }
  if (obj.image === '')
  {
    Errorobj.image = 'image can not be empty'
  }
  if (obj.description === '') {
    Errorobj.description = 'description  can not be empty'
  }

  if (!(await isImgUrl(obj.image)))
  {
    Errorobj.url = 'image url is  not valid'

  }
  if (Errorobj.url ==='' &&  Errorobj.image ==='' && Errorobj.description===''&& Errorobj.title==='')
  {
    return true
  }
  return Errorobj
}


function isImgUrl(url: string) {
  const img = new Image()
  img.src = url
  return new Promise((resolve) => {
    img.onerror = () => resolve(false)
    img.onload = () => resolve(true)
  })
}

export const CartValueCalculator = (cart: ProductInterface[]): number => {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price
  }
  return total
}

export const RemoveFromLocalStorage = (id: number): void => {
  
      
    let newprv = JSON.parse(localStorage.getItem('Cart') || '[]').filter(
      (_: ProductInterface, i: number) => i !== id
    )
    localStorage.setItem('Cart', JSON.stringify(newprv))

  
}