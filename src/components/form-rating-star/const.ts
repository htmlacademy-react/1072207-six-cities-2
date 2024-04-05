export type StarItem={
  defaultValue: number;
  id: string;
  title: string;
}

export type StarsList = StarItem[];

export const starsList: StarsList = [
  {
    defaultValue: 5,
    id: '5-star',
    title: 'perfect',
  },
  {
    defaultValue: 4,
    id: '4-star',
    title: 'good',
  },
  {
    defaultValue: 3,
    id: '3-star',
    title: 'not bad',
  },
  {
    defaultValue: 2,
    id: '2-star',
    title: 'badly',
  },
  {
    defaultValue: 1,
    id: '1-star',
    title: 'terribly',
  },
];
