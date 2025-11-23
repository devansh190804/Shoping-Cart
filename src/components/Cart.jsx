import React from 'react'
import { Card } from "flowbite-react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const removeToCart = (id) => {
        dispatch(remove(id))
    }

     const cards = products.map(product => (
          <div className="col-md-12 flex flex-wrap"key={product.id}>
                <Card
          className="max-w-sm text-center flex flex-col"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={product.image} style={{width: "150px" }}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              {product.price}
          </p>
          <button className="bold bg-red-900 text-white" onClick={() => removeToCart(product.id)}> Remove Item</button>
        </Card>
          </div>
           ))
  return (
    <div className='row'>
        {cards}
    </div>
  )
}

export default Cart