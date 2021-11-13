import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts } from './fonts';

export const theme = extendTheme(
  {
    fonts,
    colors,
  },
  withDefaultColorScheme({
    colorScheme: 'pink',
  })
);
