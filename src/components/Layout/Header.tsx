import { Text, Box, HStack } from '@chakra-ui/react';
import { Link } from 'components/Link';

export const Header = () => {
  return (
    <Box as="header" backgroundColor="pink" w="full" p="4">
      <HStack>
        <Link href="/">
          <Text fontFamily="mono" fontSize="lg">
            suika
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};
