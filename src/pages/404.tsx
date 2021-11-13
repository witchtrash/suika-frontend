import { Text, Center, Stack } from '@chakra-ui/react';
import { LinkButton } from 'components/Link';

const NotFound = () => (
  <Center w="full" h="100vh">
    <Stack spacing="4">
      <Text fontSize="4xl">404 | Page not found</Text>
      <LinkButton href="/" marginTop="4">
        Back home
      </LinkButton>
    </Stack>
  </Center>
);

export default NotFound;
