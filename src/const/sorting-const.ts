const sorting = {
  base: 'Popular',
  decrease: 'Price: high to low',
  increase: 'Price: low to high',
  rating: 'Top rated first',
} as const;

type SortKeys = keyof typeof sorting;
export type SortValue = typeof sorting[SortKeys];

export default sorting;
