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
	"features": [...],
	"images": [...],
	"sku": 1,
	"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
	"category": {
		"_id": "6213d49cb7f67e0d64774e92",
		"name": "Electronics"
	},
	"brand": "HP",
	"regular_price": 159.95,
	"sale_price": 139.95,
	"description": "Enjoy more desk space than you ever thought possible with this ultra-slim HP display. The attractive, micro-edge design adds stylish beauty to any environment, and provides for a seamless multi-monitor setup.",
	"specs": [...],
	"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/1a.jpg",
	"id": "6213d55cf8b9765ec0fbbcaa"
}
`;

export const getAllReviewsResponse = `"status": "success",
"results": 3,
"total": 188,
"data": [
	{
		"recommends": true,
		"incentivized": true,
		"verified": true,
		"review": "So cute and soft. Great quality!",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-9.jpg",
			"_id": "6213d79b3a57cb555079db71",
			"name": "Marco Lawrence"
		},
		"product": "6213d55cf8b9765ec0fbbcbe",
		"created_at": "2022-05-07T14:24:03.188Z",
		"id": "627b2e20fd536c0450cd92c0"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Not just for men! Great option for women who don't want to wear super short or overly baggy basketball shorts. These shorts are slim and fall right at the knee on me and I'm 5'9. Oh, and the pockets lay flat and don't protrude out like I have found with other Nike basketball shorts.",
		"rating": 4,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-7.jpg",
			"_id": "6213d79b3a57cb555079db6f",
			"name": "Amy Neal"
		},
		"product": "625c50fcc1198f626cc41840",
		"created_at": "2022-05-03T07:46:42.709Z",
		"id": "625c762ee84c84320ca30bd1"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "I bought this outfit a few weeeks ago and I love it, I'm so happy I did. The material is good quality and fits my kid very well.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-3.jpg",
			"_id": "6213d79b3a57cb555079db6b",
			"name": "Jodi Warner"
		},
		"product": "625c50fcc1198f626cc41836",
		"created_at": "2022-05-01T23:31:43.834Z",
		"id": "625c762ee84c84320ca30bc6"
	}
	...
]
`;

export const getReviewResponse = `"status": "success",
"data": {
	"recommends": true,
	"incentivized": false,
	"verified": true,
	"review": "I bought this outfit a few weeeks ago and I love it, I'm so happy I did. The material is good quality and fits my kid very well.",
	"rating": 5,
	"user": {
		"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-3.jpg",
		"_id": "6213d79b3a57cb555079db6b",
		"name": "Jodi Warner"
	},
	"product": "625c50fcc1198f626cc41836",
	"created_at": "2022-05-01T23:31:43.834Z",
	"id": "625c762ee84c84320ca30bc6"
}
`;

export const getProductReviewsResponse = `"status": "success",
"results": 6,
"total": 6,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Very nice. Was the perfect touch for my kitchen! ",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-9.jpg",
			"_id": "6213d79b3a57cb555079db71",
			"name": "Marco Lawrence"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2021-06-21T00:38:12.443Z",
		"id": "627b2e20fd536c0450cd92c2"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "Nice colors and fits just right! Glad that it's non-slip and that I'll be able to wash it.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-8.jpg",
			"_id": "6213d79b3a57cb555079db70",
			"name": "Candace Burns"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2020-10-13T05:54:49.004Z",
		"id": "625c762ee84c84320ca30bee"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Looks exactly like the picture. Great buy!",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-17.jpg",
			"_id": "6213d79b3a57cb555079db79",
			"name": "Bennie Walton"
		},
		"product": "6213d55cf8b9765ec0fbbccb",
		"created_at": "2020-07-15T06:27:33.779Z",
		"id": "627b2e20fd536c0450cd92e9"
	},
	...
]
`;

export const getCurrentUserReviewsResponse = `"status": "success",
"results": 11,
"data": [
	{
		"recommends": true,
		"incentivized": false,
		"verified": true,
		"review": "Perfect monitor if you Know how to calibrate it! HDR isn't great though. Worth it once you calibrate with RGB color hues & saturation. So good many settings.",
		"rating": 4,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"sku": 2,
			"name": "Acer Predator XB3 - 27 in. Monitor Full HD",
			"category": {
				"_id": "6213d49cb7f67e0d64774e92",
				"name": "Electronics"
			},
			"brand": "Acer",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/electronics/2a.jpg",
			"id": "6213d55cf8b9765ec0fbbcad"
		},
		"created_at": "2022-04-19T18:28:52.446Z",
		"id": "623641df96433b10a833b058"
	},
	{
		"recommends": true,
		"incentivized": true,
		"verified": false,
		"review": "I've had this couch for about 2 weeks now. I wanted to try it out and give an honest review. Its so beautiful and durable. I love that the cushion is very comfortable and yet durable. I dont think it will cave in any time soon. Soft velvet fabric used gives a soft feel. It arrived without any damages. It is actually a bigger couch than I initially thought. Do not hesitate to buy this you will not regret it. Assembly is very easy and takes less than 10 minutes. I would recommend this sofa based on looks as well as comfort.",
		"rating": 5,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"sku": 10,
			"name": "Morden Fort Modern Contemporary Love Seat",
			"category": {
				"_id": "6213d49cb7f67e0d64774e97",
				"name": "Home"
			},
			"brand": "Morden Fort Store",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/home/2a.jpg",
			"id": "625c50fcc1198f626cc41829"
		},
		"created_at": "2022-03-29T17:56:59.705Z",
		"id": "625c762ee84c84320ca30bb7"
	},
	{
		"recommends": true,
		"incentivized": false,
		"verified": false,
		"review": "This was a bit overpriced, but it is high quality. But the arms and legs are very finicky.",
		"rating": 4,
		"user": {
			"photo": "https://storepi-media.s3.us-west-1.amazonaws.com/img/users/user-2.jpg",
			"_id": "6213d79b3a57cb555079db6a",
			"name": "Dorothy Jennings"
		},
		"product": {
			"_id": "625c50fcc1198f626cc41828",
			"sku": 9,
			"name": "Gaya Stardew Valley Plush Junimo Blue",
			"category": {
				"_id": "6213d49cb7f67e0d64774e95",
				"name": "Kids & Baby"
			},
			"brand": "Gaya Entertainment",
			"image_main": "https://storepi-media.s3.us-west-1.amazonaws.com/img/products/kids_and_baby/2a.jpg",
			"id": "625c50fcc1198f626cc41828"
		},
		"created_at": "2022-02-10T16:16:13.963Z",
		"id": "625c762ee84c84320ca30bb6"
	},
	...
]
`;

export const createOrUpdateReviewResponse = `"status": "success",
"data": {
	"recommends": true,
	"incentivized": false,
	"verified": false,
	"review": "...",
	"rating": 5,
	"product": {
		"sku": 1,
		"name": "HP 24 in. LED Monitor IPS Micro-edge HDMI VGA 60Hz 5ms - 24m",
		"category": {
			"_id": "6213d49cb7f67e0d64774e92",
			"name": "Electronics"
		},
		"id": "6213d55cf8b9765ec0fbbcaa"
	},
	"user": "6213d79b3a57cb555079db6a",
	"created_at": "2020-01-13T20:16:08.347Z",
	"id": "634f83e48eb7ac0016e8cd4f"
}
`;
