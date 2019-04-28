export const PRODUCT_EDITING='PRODUCT_EDITING'
export function editProduct(product){

	return {
		type: PRODUCT_EDITING,
		payload:product
	}
}