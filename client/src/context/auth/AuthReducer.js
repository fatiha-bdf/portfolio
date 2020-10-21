import {
	SHOW_LOADER,
	CLEAR_ERRORS,
	SENDFORM_SUCCESS,
	SENDFORM_FAIL,
} from '../types'

 export default (state, action) => {
	switch(action.type) {
		case SHOW_LOADER:
		return {
			...state,
			loading: true
		}
		case SENDFORM_SUCCESS:
		return {
			...state,
			...action.payload,
			formSent: 'done',
			loading: false
		}
		case SENDFORM_FAIL:
		return {
			...state,
			...action.payload,
			formSent: '',
			error: action.payload,
			loading: false
		}

		case CLEAR_ERRORS:
		return {
			...state,
			error: null ,
		}

		default:
			return state
	}
 }
