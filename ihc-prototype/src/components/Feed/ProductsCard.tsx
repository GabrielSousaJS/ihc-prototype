import {products} from "@/json/db.json"
import { IProducts } from "@/service/api/Model/Products.model"

type cardProps ={
    products:IProducts
}
const Card = ({products}:cardProps) =>{
    return(
        <section className="w-[200px] flex flex-col gap-6">
        <img src={products.images.mainImage} className="w-52 rounded-sm" alt={products.title} />
        <div className="flex flex-col gap-4">
        <h3 className="font-Poppins  text-[#333] font-semibold text-lg">{products.title} </h3>
        <div className="cart-scrool p-2">
        <p className="font-Poppins text-base text-[#737373] font-normal">{products.description.short}</p>
        </div>
        <p className="font-Poppins text-sm text-[#333] font-semibold">R$ {products.normalPrice}</p>
        </div>
        <button className="font-Poppins text-base font-semibold text-[#737373] bg-white border border-cor-9F9F9F px-6 py-4">add to cart</button>
    </section>
    )
}

const ProductsCard = () => {
  return (
    <main className="container mt-10 flex flex-wrap gap-10">
        {products.map((prod) =>(
            <Card key={prod.id} products={prod}/>
        ))}
    </main>
  )
}

export default ProductsCard
