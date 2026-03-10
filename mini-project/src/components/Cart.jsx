import { useContext } from "react";
import { CartContext } from "../context/Mycontext";


const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    TotalPrice,
    increment,
  } = useContext(CartContext);

  return (
    <div className="fixed top-0 right-0 h-screen w-80 bg-white shadow-lg p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <div className="grow w-full overflow-y-auto">
            {cartItems.length===0 && <p>your cart is empty</p>}

            {cartItems.map ((item)=>{
                return (
                    <div key={item.id} className="border-b">
                        <div className="pb-4 mb-4 flex justify-between items-center">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p>{item.quantity}</p>
                            <div className="flex justify-center flex-col">
                                <button className="font-bold bg-green-400 text-amber-50 w-20 rounded-lg mb-2" onClick={()=> increment(item.id)}>
                                    +
                                </button>
                                <button className="font-bold bg-red-300 text-amber-50 w-20 rounded-lg mb-2" onClick={()=>decreaseQuantity(item.id)}>
                                    -
                                </button>
                                <button onClick={()=> removeFromCart(item.id)} className="cursor-pointer bg-red-600 text-amber-50 w-20 rounded-lg font-bold">
                                    Remove
                                </button>
                            </div>
                        </div>
                        <p>${item.price * item.quantity}</p>
                    </div>
                )
            })}
        </div>
        <p>Total : ${TotalPrice}</p>
        <button onClick={clearCart} className="mt-auto w-full bg-red-500 text-white py-2 rounded">Clear Cart</button>
    </div>
  );
};

export default CartSidebar;