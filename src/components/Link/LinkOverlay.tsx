import React from 'react';
import NextLink from 'next/link';
import {
  LinkOverlay as ChakraLinkOverlay,
  LinkOverlayProps as ChakraLinkOverlayProps,
} from '@chakra-ui/layout';
import { LinkBox } from '@chakra-ui/react';

interface LinkOverlayProps extends ChakraLinkOverlayProps {
  href: string;
}

export const LinkOverlay = ({ href, ...rest }: LinkOverlayProps) => {
  return (
    <LinkBox>
      <NextLink href={href} passHref>
        <ChakraLinkOverlay {...rest} />
      </NextLink>
    </LinkBox>
  );
};
