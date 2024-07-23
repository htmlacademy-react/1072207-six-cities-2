export type StarItem={
  value: number;
  id: string;
  title: string;
}

export type StarsList = StarItem[];

export const starsList: StarsList = [
  {
    value: 5,
    id: '5-star',
    title: 'perfect',
  },
  {
    value: 4,
    id: '4-star',
    title: 'good',
  },
  {
    value: 3,
    id: '3-star',
    title: 'not bad',
  },
  {
    value: 2,
    id: '2-star',
    title: 'badly',
  },
  {
    value: 1,
    id: '1-star',
    title: 'terribly',
  },
];
