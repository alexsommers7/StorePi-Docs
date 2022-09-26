import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Intrduction from './introduction/introduction.component';
import Products from './products/products.component';
import Reviews from './reviews/reviews.component';
import Brands from './brands/brands.component';
import Categories from './categories/categories.component';
import Carts from './carts/carts.component';
import Purchases from './purchases/purchases.component';
import Users from './users/users.component';
import Authentication from './authentication/authentication.component';

const DocContent = () => {
  return (
    <Box as="main" p="32px" fontSize="md">
      <Routes>
        <Route path="introduction" element={<Intrduction />} index></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="brands" element={<Brands />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path="carts" element={<Carts />}></Route>
        <Route path="purchases" element={<Purchases />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="authentication" element={<Authentication />}></Route>
      </Routes>
    </Box>
  );
};

export default DocContent;
