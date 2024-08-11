const Sorting = {
  base: 'Popular',
  decrease: 'Price: high to low',
  increase: 'Price: low to high',
  rating: 'Top rated first',
} as const;

type SortKeys = keyof typeof Sorting;
export type SortValue = typeof Sorting[SortKeys];

export default Sorting;
