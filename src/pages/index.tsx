import React from 'react';
import { Layout } from 'components/Layout';
import { Text } from '@chakra-ui/layout';
import { useProducts } from 'hooks/useProducts';

const Index = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error } = useProducts({
    page,
  });

  return (
    <Layout title="Index">
      <Text fontFamily="mono">Hello!</Text>
    </Layout>
  );
};

export default Index;
