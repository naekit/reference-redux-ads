import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import Notification from "./components/UI/Notification"
import { sendCart } from "./store/cartSlice"

let initialRender = true

function App() {
	const dispatch = useDispatch()
	const cartVisible = useSelector((state) => state.ui.cartVisible)
	const cart = useSelector((state) => state.cart)
	const notification = useSelector((state) => state.ui.notification)

	useEffect(() => {
		if (initialRender) {
			initialRender = false
			return
		}

		dispatch(sendCart(cart))
	}, [cart, dispatch])

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{cartVisible && <Cart />}

				<Products />
			</Layout>
		</>
	)
}

export default App
