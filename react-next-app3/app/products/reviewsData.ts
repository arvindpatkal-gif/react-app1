export type Review = {
  id: number;
  author: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
};

export const reviewsByProductId: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      author: "Ava",
      rating: 5,
      title: "Amazing Sound Quality",
      comment: "Crystal clear audio with deep bass. Battery lasted me a full week.",
      createdAt: "2026-04-11",
    },
    {
      id: 2,
      author: "Noah",
      rating: 4,
      title: "Great Value",
      comment: "Very comfortable for long sessions, though the case is a bit bulky.",
      createdAt: "2026-04-15",
    },
  ],
  2: [
    {
      id: 1,
      author: "Mia",
      rating: 5,
      title: "Super Comfortable",
      comment: "Perfect fit and excellent cushioning for daily runs.",
      createdAt: "2026-03-29",
    },
  ],
  3: [
    {
      id: 1,
      author: "Liam",
      rating: 4,
      title: "Solid Coffee Every Morning",
      comment: "Easy setup and consistent brew. Cleaning is straightforward.",
      createdAt: "2026-02-22",
    },
  ],
};
