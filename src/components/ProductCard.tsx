import { Box, Text } from '@chakra-ui/layout';
import { ProductResponse } from 'backend/suika';
import React from 'react';

interface ProductCardProps {
  product: ProductResponse;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Box backgroundColor="pink" p="2" my="2" w="full" h="48">
      <Text>{product.name}</Text>
    </Box>
  );
};
