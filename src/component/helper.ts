import { ProductInterface } from "../Interface";
export const FormValidator = (obj2: ProductInterface) => {
  const obj = {
    title: '',
    url: '',
    description: '',
  }
  console.log(obj2)
  if (obj.title === obj2.title && obj.url===obj2.url ) 
  {
   return false
  }
  else{

   return true;
  }
}


export const CartValueCalculator = (cart: ProductInterface[]):number => {
let total = 0;
  for(let i =0;i<cart.length;i++){
    total = total + cart[i].price

  }
  return total;
}