import axios from 'axios'

// Action type
export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST'
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS'
export const FETCH_DISHES_FAIL = 'FETCH_DISHES_FAIL'

// Action creators
export const fetchDishes = () => async dispatch => {
	dispatch({ type: FETCH_DISHES_REQUEST })

	try {
		const response = await axios.get('http://localhost:5000/dish/getDish')
		dispatch({
			type: FETCH_DISHES_SUCCESS,
			payload: response.data,
		})
	} catch (error) {
		dispatch({
			type: FETCH_DISHES_FAIL,
			payload: error.message,
		})
	}
}
