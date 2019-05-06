
export function sortAllProductByStatus(categories) {
	for (let cate in categories){
		categories[cate].products=sortProductByStatus(categories[cate].products)
	}
	return categories;
}

export function updateCategory(editedCategory, categories) {

	for (let index in categories) {
		let cate = categories[index];
		if (cate.id === editedCategory.id) {
			cate.description = editedCategory.description;
			cate.title = editedCategory.title;
			cate.priority = parseInt(editedCategory.priority);
			return ;
		}
	}
}

export function updateProduct(editedProduct, categories) {

	for (let index in categories) {
		let cate = categories[index];
		if (cate.id === editedProduct.categoryId) {
			for (let productIndex in cate.products) {
				let product = 	cate.products[productIndex];
				if (product.id === editedProduct.id) {
					cate.products[productIndex]=editedProduct;
					cate.products=sortProductByStatus(cate.products);
					return ;
				}
			}
		}
	}
}

export function addProduct(categories, addedProduct) {
	for (let index in categories) {
		let cate = categories[index];
		if (cate.id === addedProduct.categoryId) {
			cate.products.push(addedProduct);
			cate.products=sortProductByStatus(cate.products)
			return ;
		}
	}
}

function sortProductByStatus(products) {
	return [...products].sort((A,B)=>{
		if(A.status==='ON_SALE'){
			return -1;
		}else
			return 1;

	});

}
export  function filterDeletedProduct(categories, deletedProduct) {
	for (let index in categories) {
		let cate = categories[index];
		if (cate.id === deletedProduct.categoryId) {
			return cate.products.filter((product, index) => {
				return deletedProduct.id !== product.id;
			})
		}
	}
}

