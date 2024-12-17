import {
	FETCH_DISHES_FAIL,
	FETCH_DISHES_REQUEST,
	FETCH_DISHES_SUCCESS,
} from '../actions/dishesActions'

const initialState = {
	loading: false,
	dishes: [],
	error: null,
}

const dishesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DISHES_REQUEST:
			return { ...state, loading: true }
		case FETCH_DISHES_SUCCESS:
			return { ...state, loading: false, dishes: action.payload }
		case FETCH_DISHES_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}

export default dishesReducer
