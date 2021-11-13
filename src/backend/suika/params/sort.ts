type SortDirection = 'asc' | 'desc';
type SortBy<T> = T;

export interface Sort<T> {
  sort_direction?: SortDirection;
  sort_by?: SortBy<T>;
}
