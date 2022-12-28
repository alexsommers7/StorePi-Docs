export const DocSidebarItems = [
  {
    label: 'Getting Started',
    subitems: [
      { label: 'Introduction', anchor: 'introduction' },
      { label: 'Database Interaction', anchor: 'database-interaction-intro' },
      { label: 'CORS', anchor: 'cors-intro' },
      { label: 'Rate Limiting', anchor: 'rate-limiting-intro' },
      { label: 'Authorization', anchor: 'authorization' },
      { label: 'Query Parameters', anchor: 'query-parameters' },
      { label: 'Filtering', anchor: 'filtering-intro' },
    ],
  },
  {
    label: 'Products',
    subitems: [
      { label: 'Get All Products', anchor: 'get-products' },
      { label: 'Get Product', anchor: 'get-product' },
      { label: 'Create New Product', anchor: 'create-product' },
      { label: 'Update Product', anchor: 'update-product' },
      { label: 'Delete Product', anchor: 'delete-product' },
    ],
  },
  {
    label: 'Reviews',
    subitems: [
      { label: 'Get All Reviews', anchor: 'get-reviews' },
      { label: 'Get Review', anchor: 'get-review' },
      { label: `Get Product's Reviews`, anchor: 'get-product-reviews' },
      { label: 'Get Current User Reviews', anchor: 'get-current-user-reviews' },
      { label: 'Create New Review', anchor: 'create-review' },
      { label: 'Update Review', anchor: 'update-review' },
      { label: 'Delete Review', anchor: 'delete-review' },
    ],
  },
  {
    label: 'Brands',
    subitems: [{ label: 'Get All Brands', anchor: 'get-brands' }],
  },
  {
    label: 'Categories',
    subitems: [
      { label: 'Get All Categories', anchor: 'get-categories' },
      { label: 'Get All Products in Category', anchor: 'get-category-products' },
      { label: 'Create New Category', anchor: 'create-category' },
      { label: 'Update Category', anchor: 'update-category' },
      { label: 'Delete Category', anchor: 'delete-category' },
    ],
  },
  {
    label: 'Carts',
    subitems: [
      { label: 'Get All Carts', anchor: 'get-carts' },
      { label: 'Get Cart', anchor: 'get-cart' },
      { label: 'Get Current User Cart', anchor: 'get-current-user-cart' },
      { label: 'Add to Current User Cart', anchor: 'add-to-current-user-cart' },
      { label: 'Remove From Current User Cart', anchor: 'remove-from-current-user-cart' },
      { label: 'Delete Cart', anchor: 'delete-cart' },
    ],
  },
  {
    label: 'Purchases',
    subitems: [
      { label: 'Get All Purchases', anchor: 'get-purchases' },
      { label: 'Get Purchase', anchor: 'get-purchase' },
      { label: 'Get Current User Purchases', anchor: 'get-current-user-purchases' },
      { label: 'Create New Purchase', anchor: 'create-purchase' },
    ],
  },
  {
    label: 'Wishlists',
    subitems: [
      { label: 'Get Current User Wishlist', anchor: 'get-current-user-wishlist' },
      { label: 'Add to Current User Wishlist', anchor: 'add-to-current-user-wishlist' },
      { label: 'Remove From Current User Wishlist', anchor: 'remove-from-current-user-wishlist' },
    ],
  },
	{
    label: 'Authentication',
    subitems: [
      { label: 'Sign Up', anchor: 'sign-up' },
      { label: 'Log In', anchor: 'log-in' },
      { label: 'Log Out', anchor: 'log-out' },
    ],
  },
  {
    label: 'Users',
    subitems: [
      { label: 'Get All Users', anchor: 'get-users' },
      { label: 'Get User', anchor: 'get-user' },
      { label: 'Get Current User', anchor: 'get-current-user' },
      { label: 'Update Current User', anchor: 'update-current-user' },
      { label: 'Delete User', anchor: 'delete-user' },
      { label: 'Delete Current User', anchor: 'delete-current-user' },
    ],
  },
];
