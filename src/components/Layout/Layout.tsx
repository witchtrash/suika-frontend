import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <Flex margin="0 auto" transition="0.2s ease-out">
      <Box as="header"></Box>
      <Box as="main" w="full" paddingX="4" paddingY="4">
        <Heading as="h1" size="lg" fontWeight="400" pb="4">
          {props.title}
        </Heading>
      </Box>
    </Flex>
  );
};
