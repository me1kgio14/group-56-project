import products from "../data/ProductsData"
import ProductCard from "./ProductCard"

const RenderProducts = () => {
    return (
        <div>
            {
                products.map(product=>(
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default RenderProducts;