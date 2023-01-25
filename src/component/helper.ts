import { ProductInterface } from '../Interface'
export const FormValidator = async (obj2: ProductInterface) => {
  const obj = {
    title: '',
    url: '',
    description: '',
  }
  if (obj.title === obj2.title && obj.url === obj2.url) {
    return false
  } else if (obj2.id > 0 && obj2.price > 0) {
    return await isImgUrl(obj2.url)
  }
  return false
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
