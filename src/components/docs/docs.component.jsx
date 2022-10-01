import { Box, Divider } from '@chakra-ui/react';
import { BorderColor } from '../../utils/color/colorModeValues.utils';

import { docsSidebarWidth } from '../../utils/sizing/sizing.utils';
import GettingStarted from './getting-started/getting-started.component';
import Products from './products/products.component';
import Reviews from './reviews/reviews.component';
import Brands from './brands/brands.component';
import Categories from './categories/categories.component';
import Carts from './carts/carts.component';
import Purchases from './purchases/purchases.component';
import Users from './users/users.component';
import Authentication from './authentication/authentication.component';

const Docs = () => {
  return (
    <Box p="48px" fontSize="md" paddingLeft={['0', '0', `calc(${docsSidebarWidth} + 50px)`]}>
      <GettingStarted />
      <Divider borderColor={BorderColor} />
      <Products />
      <Divider borderColor={BorderColor} />
      <Reviews />
      <Divider borderColor={BorderColor} />
      <Brands />
      <Divider borderColor={BorderColor} />
      <Categories />
      <Divider borderColor={BorderColor} />
      <Carts />
      <Divider borderColor={BorderColor} />
      <Purchases />
      <Divider borderColor={BorderColor} />
      <Users />
      <Divider borderColor={BorderColor} />
      <Authentication />
    </Box>
  );
};

export default Docs;
