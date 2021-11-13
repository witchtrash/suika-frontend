/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductResponse } from './ProductResponse';

export type ProductCollection = {
  data: Array<ProductResponse>;
  total: number;
  page: number;
  size: number;
};
