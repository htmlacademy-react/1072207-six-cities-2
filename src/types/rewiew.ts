type ReviewUser={
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review={
  id: string;
  date: string;
  user: ReviewUser;
  comment: string;
  rating: number;
}
