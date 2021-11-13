/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductResponse = {
  date_created: string;
  date_modified: string;
  sku: string;
  name: string;
  volume: number;
  abv: number;
  country_of_origin: string;
  available: boolean;
  container_type: string;
  style: string;
  sub_style: string;
  producer: string;
  short_description: string;
  season: string;
  id: number;
  current_price?: number;
};
