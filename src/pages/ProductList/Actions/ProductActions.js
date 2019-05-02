export const PRODUCT_EDITING='PRODUCT_EDITING'

export function productEditing(product){

	return {
		type: PRODUCT_EDITING,
		payload:{editingProduct:product}
	}
}



