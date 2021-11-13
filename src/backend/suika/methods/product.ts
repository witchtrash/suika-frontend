import { client } from 'backend/suika/client';
import { Pagination, Sort, Filter, SearchParams } from 'backend/suika/params';
import { ProductCollection } from 'backend/suika/models/ProductCollection';
import { ProductResponse } from 'backend/suika/models/ProductResponse';
import { PriceResponse } from 'backend/suika/models/PriceResponse';

type ProductSort = Sort<'id' | 'name' | 'current_price' | 'abv'>;
type GetProductsParams = Pagination & ProductSort & Filter;

export const getProducts = async (params: GetProductsParams) => {
  // Convert the params interface to a type with signatures
  const searchParams: SearchParams<GetProductsParams> = params;

  return client.get(`product`, { searchParams }).json<ProductCollection>();
};

export const getProduct = async (productId: number) => {
  return client.get(`product/${productId}`).json<ProductResponse>();
};

export const getProductPrices = async (productId: number) => {
  return client.get(`product/${productId}/price`).json<PriceResponse[]>();
};
