import { useContext } from "react";
import { CartContext } from "../context/Mycontext";

const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext);

    return (
        <div className="border p-4 rounded-s shadow-md w-100 h-100">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <button 
                onClick={() => addToCart(product)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    )
}
export default ProductCard