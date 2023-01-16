import { useEffect } from "react"
import { useSelector } from "react-redux"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"

function App() {
	const cartVisible = useSelector((state) => state.ui.cartVisible)
	const cart = useSelector((state) => state.cart)
	useEffect(() => {
		fetch("https://react-ref-async-default-rtdb.firebaseio.com/cart.json", {
			method: "PUT",
			body: JSON.stringify(cart),
		})
	}, [cart])

	return (
		<Layout>
			{cartVisible && <Cart />}
			<Products />
		</Layout>
	)
}

export default App
