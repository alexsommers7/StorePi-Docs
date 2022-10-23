import { Box } from '@chakra-ui/react';

import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import GettingStarted from './getting-started/getting-started.component';
import Products from './products/products.component';
import Reviews from './reviews/reviews.component';
import Brands from './brands/brands.component';
import Categories from './categories/categories.component';
import Carts from './carts/carts.component';
import Purchases from './purchases/purchases.component';
import Wishlists from './wishlists/wishlists.component';
import Users from './users/users.component';
import Authentication from './authentication/authentication.component';

const Docs = () => {
  return (
    <Box
      mt={5}
      fontSize="md"
      padding={[6, 6, `2rem 4rem 0 calc(${docsSidebarWidth.string} + 3.125rem)`]}
    >
      <GettingStarted />
      <Products />
      <Reviews />
      <Brands />
      <Categories />
      <Carts />
      <Purchases />
      <Wishlists />
      <Users />
      <Authentication />
    </Box>
  );
};

export default Docs;
