import { useState, useEffect, react } from "react";
import Navbar from "./Navbar";
import { Card } from "flowbite-react";
import MyNavbar from "./Navbar";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Products = () => {
    const dispatch = useDispatch()
    const[products, getProducts] = useState([])

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(result => getProducts(result) );
    },[])


    const addToCart = (product) => {
      dispatch(add(product))
    }


    const cards = products.map(product => (
      <div className="col-md-3 flex flex-wrap" key={product.id}>
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
      <button className="bold bg-blue-900 text-white" onClick={() => addToCart(product)}> Add to Cart</button>
    </Card>
      </div>
    ))

  return (
    <>

     <div className="flex flex-wrap">
      {cards}
     </div>
     
    </>
  )
}

export default Products