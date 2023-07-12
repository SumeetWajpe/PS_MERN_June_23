export class ReviewModel {
    constructor(id = 0, comment = "", user = "", productId = 0) {
        this.id = id;
        this.comment = comment;
        this.user = user;
        this.productId = productId;
    }
}
export let reviewsData = {
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
