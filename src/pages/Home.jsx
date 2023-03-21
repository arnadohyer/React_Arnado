import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard."

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(async res => await res.json())
            .then(data => setPosts(data.products))


    }, [])

    return (
        <div className="conntainer">
            {posts.map((post, i) =>
                <ProductCard post={post}> </ProductCard>

            )}

        </div>




    )
}

export default Home