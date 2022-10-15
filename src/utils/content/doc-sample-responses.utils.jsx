export const getAllProductsResponse = `"status": "success",
"results": 54,
"total": 54,
"data": [
	{
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": "6213d55cf8b9765ec0fbbcaa"
	},
	{
		"reviews_average": 4.5,
		"reviews_quantity": 4,
		"best_seller": false,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 2,
		"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "Acer",
		"regular_price": 369.99,
		"sale_price": 249.99,
		"description": "Bring on the blitz. Turbo-charged refresh rates will fuel your need for gaming speed with this captivating 27 inch dislay.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
		"slug": "acer-predator-xb3-27-in.-monitor-full-hd",
		"id": "6213d55cf8b9765ec0fbbcad"
	},
	{
		"reviews_average": 4.67,
		"reviews_quantity": 6,
		"best_seller": false,
		"in_stock": false,
		"features": [...],
		"images": [...],
		"sku": 3,
		"name": "Susulv-MCL Men Shirt Men's Large Size Long Sleeve Lapel Zipper Shirt",
		"category": {
			"_id": "6213d49cb7f67e0d64774e93",
			"name": "Men's Clothing"
		},
		"brand": "Susulv MCL",
		"regular_price": 119.99,
		"sale_price": 119.99,
		"description": "Cool, slim fit, top quality casual style shirt, perfect and comfortable for daily wear or relaxing weekends.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/mens_clothing/1a.jpg",
		"slug": "susulv-mcl-men-shirt-men's-large-size-long-sleeve-lapel-zipper-shirt",
		"id": "6213d55cf8b9765ec0fbbcb0"
	},
	... 
]`;

export const getProductResponse = `"status": "success",
"data": {
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [...],
		"images": [...],
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 129.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"slug": "hp-24-in.-led-monitor-ips-micro-edge-hdmi-vga-60hz-5ms-24m",
		"id": "6213d55cf8b9765ec0fbbcaa"
}
`;

export const createNewProductResponse = `"status": "success",
"data": {
	"reviews_average": 4.5,
	"reviews_quantity": 0,
	"best_seller": false,
	"in_stock": true,
	"features": [],
	"images": [],
	"sku": 1234,
	"name": "...",
	"category": {
		"_id": "6213d49cb7f67e0d64774e92",
		"name": "Electronics"
	},
	"brand": "...",
	"regular_price": 99.95,
	"sale_price": 79.95,
	"description": "...",
	"id": "634a49847857d50016d56ae1"
}
`;

export const updateProductResponse = `"status": "success",
"data": {
		"reviews_average": 4.63,
		"reviews_quantity": 8,
		"best_seller": true,
		"in_stock": true,
		"features": [
				"3-sided micro-edge display",
				"Low blue light mode",
				"Ultra-wide 178 degree horizontal and vertical viewing angles"
		],
		"images": [...],
		"_id": "6213d55cf8b9765ec0fbbcaa",
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
				"_id": "6213d49cb7f67e0d64774e92",
				"name": "Electronics"
		},
		"brand": "HP",
		"regular_price": 149.95,
		"sale_price": 139.95,
		"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
		"specs": [...],
		"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
		"id": "6213d55cf8b9765ec0fbbcaa"
}
`;
