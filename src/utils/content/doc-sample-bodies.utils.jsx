export const createNewProductBody = `// all fields are required
"sku": 1234,
"name": "...",
"category": "6213d49cb7f67e0d64774e92",
"brand": "...",
"regular_price": 99.95,
"sale_price": 79.95,
"description": "..."
`;

export const updateProductBody = `"regular_price": 159.95
"sale_price": 139.95
`;

export const createOrUpdateReviewBody = `// all fields are required
"review": "...",
"rating": 5
`;

export const createOrUpdateCategoryBody = `// all fields are required
"name": "..."
`;

export const createNewCartBody = `// all fields are required
"products": [
	{
		"item": "6213d55cf8b9765ec0fbbcaa",
		"quantity": 1
	}
]
`;

export const addProductToCurrentUserCartBody = `// all fields are required
"sku": 1,
"quantity": 1
`;

export const removeProductFromCurrentUserCartBody = `// all fields are required
"sku": 16
`;
