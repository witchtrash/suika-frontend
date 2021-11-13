import NextLink from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

interface LinkButtonProps extends ButtonProps {
  href: string;
}
export const LinkButton = ({ href, ...rest }: LinkButtonProps) => (
  <NextLink href={href} passHref>
    <Button as="a" {...rest} />
  </NextLink>
);
