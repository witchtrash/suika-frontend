import React from 'react';

import { Center, Spinner, Flex, Button } from '@chakra-ui/react';
import { useProducts } from 'hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error } = useProducts({
    page,
  });

  if (!data || isLoading) {
    return (
      <Center>
        <Spinner color="pink.200" />
      </Center>
    );
  }
  return (
    <Flex>
      <Button mr="4" mt="2" onClick={() => setPage(page + 1)}>
        page + 1
      </Button>
      <Flex w="full" flexDirection="column">
        {data.data.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </Flex>
  );
};
