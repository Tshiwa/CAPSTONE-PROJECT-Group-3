import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Restauto } from '../../Context/Restauto';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(Restauto) 
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productDisplay-img">
                <img className="productDisplay--main" src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-new">{product.new_price} Ugx</div>
                <div className="productDisplay-right-price-old">{product.old_price} Ugx</div>
            </div>
            <div className="productDisplay-right-description">
            Our Food is usually of plant, animal, or fungal origin and contains essential nutrients such as 
            <br/>carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism 
            <br/>and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div>
                <p>About <strong>Breakfast, </strong> Often called '<strong>the most important meal of the day
                </strong>', and for good reason. As the name suggests, Breakfast breaks the overnight fasting period. </p>
                <br/>
                <p>About <strong>Lunch, </strong> in the most countries, it is <strong>the second 
                meal of the day, after breackfast and before dinner. </strong> A lunch can be 
                cold (bread and fruit) or hot (a full meal, like a dinner).</p>
            </div>
        </div>
    </div>
  )
}
