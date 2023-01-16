import { cartActions } from "./cartSlice"
import { uiActions } from "./uiSlice"

export const fetchCart = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const res = await fetch(
				"https://react-ref-async-default-rtdb.firebaseio.com/cart.json"
			)
			if (!res.ok) {
				throw new Error("Could not fetch cart!")
			}

			const data = await res.json()
			return data
		}
		try {
			const cart = await fetchData()
			dispatch(
				cartActions.replaceCart({
					items: cart.items || [],
					totalQuantity: cart.totalQuantity,
				})
			)
		} catch (error) {
			dispatch(
				uiActions.setNotification({
					status: "error",
					title: "Error!...",
					message: "Fetching cart data failed!",
				})
			)
		}
	}
}

export const sendCart = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.setNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data!",
			})
		)

		const sendRequest = async () => {
			const res = await fetch(
				"https://react-ref-async-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}
			)
			if (!res.ok) {
				throw new Error("Sending data failed.")
			}
		}

		try {
			await sendRequest()
			dispatch(
				uiActions.setNotification({
					status: "success",
					title: "Success!...",
					message: "Sent cart data successfully!",
				})
			)
		} catch (error) {
			dispatch(
				uiActions.setNotification({
					status: "error",
					title: "Error!...",
					message: "Sending cart data failed!",
				})
			)
		}
	}
}
