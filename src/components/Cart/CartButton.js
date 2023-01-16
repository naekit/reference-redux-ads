import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/uiSlice"
import classes from "./CartButton.module.css"

const CartButton = (props) => {
	const dispatch = useDispatch()
	const cartTotalItems = useSelector((state) => state.cart.totalQuantity)
	const toggleHandler = () => {
		dispatch(uiActions.toggleCart())
	}

	return (
		<button onClick={toggleHandler} className={classes.button}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartTotalItems}</span>
		</button>
	)
}

export default CartButton
