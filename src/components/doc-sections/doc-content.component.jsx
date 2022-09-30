import { Box } from '@chakra-ui/react';

import GettingStarted from './getting-started/getting-started.component';
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
    <Box p="48px" fontSize="md" paddingLeft={['0', '0', '320px']}>
      <GettingStarted />
      <hr />
      <Products />
      <hr />
      <Reviews />
      <hr />
      <Brands />
      <hr />
      <Categories />
      <hr />
      <Carts />
      <hr />
      <Purchases />
      <hr />
      <Users />
      <hr />
      <Authentication />
    </Box>
  );
};

export default DocContent;
