import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemDetails() {
    const params = useParams()

    const [product, setProduct] = useState ()
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + params.id)
            .then(async (res) => await res.json())
            .then(i => setProduct(i))
    })
    return (
        <div>
            {product == null ?
                <p>Loading...</p>
                :
                <>
                    <p>{product.title}</p>
                    <img src={product.images[0]} alt="" />
                    <p>{product.description}</p>
                    <p>Price: $ {product.price}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                </>

            }


        </div>
    )
}

export default ItemDetails