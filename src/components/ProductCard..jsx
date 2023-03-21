function ProductCard(post) {
    return (
        <a href={"/products/" + post.post.id} className>
            <img src={post.post.images[0]}></img>
            <h2>{post.post.title}</h2>
            <h3>p {post.post.price}</h3>
            <span className="discount"> -%{post.post.discountPercentage}
            </span>
            <hr />
            <p>{post.post.description}</p>


        </a>

    )
}
export default ProductCard