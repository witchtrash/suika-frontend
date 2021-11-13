export type SearchParams<T> = { [K in keyof T]?: T[K] };
