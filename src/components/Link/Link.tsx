import NextLink from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  LinkOverlay as ChakraLinkOverlay,
  LinkOverlayProps as ChakraLinkOverlayProps,
} from '@chakra-ui/react';

interface LinkProps extends ChakraLinkProps {
  href: string;
}

export const Link = ({ href, ...rest }: LinkProps) => (
  <NextLink href={href} passHref>
    <ChakraLink {...rest} />
  </NextLink>
);
