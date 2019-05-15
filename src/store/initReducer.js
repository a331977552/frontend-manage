import {
    INITIALIZED_SUCCESSFULLY,
    DELETE_CATEGORY_SUCCESSFULLY,
    EDIT_CATEGORY_SUCCESSFULLY,
    ADD_CATEGORY_SUCCESSFULLY
} from "./constants";
import sortCategoryByPriority, {filterDeletedCategory, updateCategory} from "../utils/CommonUtils";

const initialState = {
    categories: [],
}
export default function initReducer(state = initialState, action) {
       let cate= state.categories;
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY:
            return {...state, categories: sortCategoryByPriority( action.payload.categories)}
        case ADD_CATEGORY_SUCCESSFULLY:
            cate.push(action.payload.category);
            return {...state, categories: sortCategoryByPriority(cate)};
        case EDIT_CATEGORY_SUCCESSFULLY:
            updateCategory(action.payload.category, state.categories);
            return {...state, categories: sortCategoryByPriority(state.categories)};
        case DELETE_CATEGORY_SUCCESSFULLY:
            return {...state, categories: filterDeletedCategory(state.categories, action.payload.deletedCategory)};
        default:
            return state;
    }

}