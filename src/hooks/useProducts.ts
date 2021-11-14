import { ProductCollection } from 'backend/suika';
import queryString from 'query-string';
import useSWR from 'swr';

interface UseProductsArgs {
  page: number;
  sortBy?: 'id' | 'name' | 'abv' | 'current_price';
  sortDirection?: 'asc' | 'desc';
  filter?: string;
}
export const useProducts = ({
  page,
  sortBy,
  sortDirection,
  filter,
}: UseProductsArgs) => {
  const query = queryString.stringify({
    page,
    filter,
    sort_by: sortBy,
    sort_direction: sortDirection,
  });

  const { data, error } = useSWR<ProductCollection>(`product?${query}`);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
