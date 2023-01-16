import ProductItem from "./ProductItem"
import classes from "./Products.module.css"

const TEST_PRODUCTS = [
	{
		id: "m1",
		price: 10,
		title: "Good Book",
		description: "A really good book",
	},
	{
		id: "m2",
		price: 12,
		title: "Better Book",
		description: "A better book",
	},
	{
		id: "m3",
		price: 1000,
		title: "Best Book",
		description: "The best book you can read",
	},
]

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{TEST_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	)
}

export default Products
