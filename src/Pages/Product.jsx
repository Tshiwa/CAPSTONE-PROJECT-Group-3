import React, { useContext } from 'react'
import { Restauto } from '../Context/Restauto'
import { useParams } from 'react-router-dom'
import { Beack } from '../Components/Beack/Beack'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {products} = useContext(Restauto)
  const {productId} = useParams()
  const product = products.find((e)=> e.id ===Number(productId))
  return (
    <div>
      <Beack product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
