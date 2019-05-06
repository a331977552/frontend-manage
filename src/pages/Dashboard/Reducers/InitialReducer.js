import {
	INITIALIZED_LOADING,
	INITIALIZED_LOADING_FINISHED,
	EDITING_CATEGORY_SUCCESS,
	DELETING_CATEGORY_SUCCESS,
	ADDING_CATEGORY_SUCCESS,
	ADDING_PRODUCT_SUCCESS, EDITING_PRODUCT_SUCCESS, DELETING_PRODUCT_SUCCESS
} from "../Actions/InitialActions";
import  {
	updateCategory,
	addProduct,
	updateProduct,
	filterDeletedProduct,
	sortAllProductByStatus
} from "../../../utils/CommonUtils";

const initialState = {
	loading: false,
	loadingSuccess: false,
	categories: [],
	errorMessage: null,

}



export default function initialReducer(state = initialState, action) {
	/*let cate = state.categories;
	switch (action.type) {

		case INITIALIZED_LOADING:
			return {...state, ...action.payload};
		case INITIALIZED_LOADING_FINISHED:
			action.payload.categories=sortAllProductByStatus(sortCategoryByPriority(action.payload.categories));
			return {...state, ...action.payload};
		case ADDING_CATEGORY_SUCCESS:
			cate.push(action.payload.addedCategory);
			return {...state, categories: sortCategoryByPriority(cate)};
		case EDITING_CATEGORY_SUCCESS:
			updateCategory(action.payload.editedCategory, state.categories);
			return {...state, categories: sortCategoryByPriority(state.categories)};
		case DELETING_CATEGORY_SUCCESS:
			return {...state, categories: filterDeletedCategory(state.categories, action.payload.deletedCategory)};
		case ADDING_PRODUCT_SUCCESS:
			addProduct(cate, action.payload.addedProduct)
			return {...state, categories: cate};
		case EDITING_PRODUCT_SUCCESS:
			console.log(action.payload.editedProduct)
			updateProduct(action.payload.editedProduct, state.categories);
			console.log(state.categories)
			return {...state, categories: sortCategoryByPriority(state.categories)};
		case DELETING_PRODUCT_SUCCESS:
			const categories = filterDeletedProduct(state.categories, action.payload.deletedProduct);
			return {...state, categories: categories};

		default:

	}*/

	return state;
}

function filterDeletedCategory(categories, deletedCategory) {


	return categories.filter((cate, index) => {
		return deletedCategory.id !== cate.id;
	});

}

