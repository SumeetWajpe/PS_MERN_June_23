export class ReviewModel {
  constructor(
    public id: number = 0,
    public comment: string = "",
    public user: string = "",
    public productId: number = 0,
  ) {}
}

type ReviewsDataType = {
  reviews: ReviewModel[];
};
export let reviewsData: ReviewsDataType = {
  reviews: [
    {
      id: 1,
      comment: "Great Product",
      user: "Manjeet",
      productId: 1,
    },
    {
      id: 2,
      comment: "Awesome Product",
      user: "Manmeet",
      productId: 1,
    },
    {
      id: 3,
      comment: "Much needed Product",
      user: "Paramjeet",
      productId: 2,
    },
    {
      id: 4,
      comment: "Good Product !!!",
      user: "Paramjeet",
      productId: 4,
    },
    {
      id: 5,
      comment: "Good Product !!!",
      user: "Paramjeet",
      productId: 4,
    },
  ],
};
