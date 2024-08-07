export type StarItem={
  value: number;
  id: string;
  title: string;
}

export type StarsList = StarItem[];

export const starsList: StarsList = [
  {
    value: 5,
    id: '5-stars',
    title: 'perfect',
  },
  {
    value: 4,
    id: '4-stars',
    title: 'good',
  },
  {
    value: 3,
    id: '3-stars',
    title: 'not bad',
  },
  {
    value: 2,
    id: '2-stars',
    title: 'badly',
  },
  {
    value: 1,
    id: '1-star',
    title: 'terribly',
  },
];
